export const FIREBASE_PROJECT_ID = "mr-copy";
export const FIREBASE_ISSUER = `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`;
export const FIREBASE_PUBLIC_KEYS_URL = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const MAX_AUTH_AGE_SECONDS = 10 * 60;

export type DeletionEnv = {
  FIREBASE_SERVICE_ACCOUNT: string;
};

type ServiceAccount = {
  client_email: string;
  private_key: string;
  token_uri?: string;
};

export type VerifiedFirebaseIdentity = {
  uid: string;
  email: string;
};

type JwtHeader = { alg?: string; kid?: string };
type FirebaseJwk = JsonWebKey & { kid?: string };
type JwtPayload = {
  aud?: string;
  iss?: string;
  sub?: string;
  exp?: number;
  iat?: number;
  auth_time?: number;
  email?: string;
  email_verified?: boolean;
};

export class DeletionError extends Error {
  constructor(
    public readonly code:
      | "INVALID_AUTH"
      | "EXPIRED_AUTH"
      | "STALE_AUTH"
      | "ALREADY_DELETED"
      | "BACKEND_FAILURE",
    message: string,
  ) {
    super(message);
  }
}

function base64UrlToBytes(value: string): Uint8Array {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const raw = atob(padded);
  return Uint8Array.from(raw, (character) => character.charCodeAt(0));
}

function toArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
}

function base64UrlEncode(value: string | ArrayBuffer): string {
  const bytes = typeof value === "string" ? new TextEncoder().encode(value) : new Uint8Array(value);
  let binary = "";
  for (let index = 0; index < bytes.length; index += 1) binary += String.fromCharCode(bytes[index]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeJson<T>(part: string): T {
  try {
    return JSON.parse(new TextDecoder().decode(toArrayBuffer(base64UrlToBytes(part)))) as T;
  } catch {
    throw new DeletionError("INVALID_AUTH", "The authentication token is malformed.");
  }
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const body = pem.replace(/-----BEGIN\s*PRIVATE\s*KEY-----/g, "").replace(/-----END\s*PRIVATE\s*KEY-----/g, "").replace(/\s/g, "");
  const bytes = Uint8Array.from(atob(body), (character) => character.charCodeAt(0));
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
}

function requireTimestamp(value: unknown): number {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new DeletionError("INVALID_AUTH", "The authentication token has invalid timing claims.");
  }
  return value;
}

export async function verifyFirebaseIdToken(idToken: string, fetcher: typeof fetch = fetch, nowSeconds = Math.floor(Date.now() / 1000)): Promise<VerifiedFirebaseIdentity> {
  const parts = idToken.split(".");
  if (parts.length !== 3 || idToken.length > 16_384) {
    throw new DeletionError("INVALID_AUTH", "A valid Firebase ID token is required.");
  }

  const header = decodeJson<JwtHeader>(parts[0]);
  const payload = decodeJson<JwtPayload>(parts[1]);
  const exp = requireTimestamp(payload.exp);
  const iat = requireTimestamp(payload.iat);
  const authTime = requireTimestamp(payload.auth_time);

  if (header.alg !== "RS256" || !header.kid || payload.aud !== FIREBASE_PROJECT_ID || payload.iss !== FIREBASE_ISSUER || !payload.sub) {
    throw new DeletionError("INVALID_AUTH", "The authentication token is not valid for Mr. Copy.");
  }
  if (exp <= nowSeconds) throw new DeletionError("EXPIRED_AUTH", "Your sign-in has expired. Please sign in again.");
  if (iat > nowSeconds + 60 || authTime > nowSeconds + 60) throw new DeletionError("INVALID_AUTH", "The authentication token has invalid timing claims.");
  if (nowSeconds - authTime > MAX_AUTH_AGE_SECONDS) {
    throw new DeletionError("STALE_AUTH", "Please sign in with Google again before confirming deletion.");
  }
  if (!payload.email || payload.email_verified !== true) {
    throw new DeletionError("INVALID_AUTH", "A verified Google account is required for deletion.");
  }

  const keyResponse = await fetcher(FIREBASE_PUBLIC_KEYS_URL);
  if (!keyResponse.ok) throw new DeletionError("BACKEND_FAILURE", "Unable to verify authentication at this time.");
  const keySet = (await keyResponse.json()) as { keys?: FirebaseJwk[] };
  const verificationKey = keySet.keys?.find((key) => key.kid === header.kid);
  if (!verificationKey) throw new DeletionError("INVALID_AUTH", "The authentication token uses an unknown signing key.");

  const publicKey = await crypto.subtle.importKey(
    "jwk",
    verificationKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["verify"],
  );
  const verified = await crypto.subtle.verify(
    { name: "RSASSA-PKCS1-v1_5" },
    publicKey,
    toArrayBuffer(base64UrlToBytes(parts[2])),
    toArrayBuffer(new TextEncoder().encode(`${parts[0]}.${parts[1]}`)),
  );
  if (!verified) throw new DeletionError("INVALID_AUTH", "The authentication token signature is invalid.");

  return { uid: payload.sub, email: payload.email };
}

export async function getServiceAccountAccessToken(env: DeletionEnv, fetcher: typeof fetch = fetch): Promise<string> {
  let account: ServiceAccount;
  try {
    account = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT) as ServiceAccount;
  } catch {
    throw new DeletionError("BACKEND_FAILURE", "The account deletion service is not configured.");
  }
  if (!account.client_email || !account.private_key) {
    throw new DeletionError("BACKEND_FAILURE", "The account deletion service is not configured.");
  }

  const now = Math.floor(Date.now() / 1000);
  const encodedHeader = base64UrlEncode(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const encodedPayload = base64UrlEncode(JSON.stringify({
    iss: account.client_email,
    scope: "https://www.googleapis.com/auth/identitytoolkit https://www.googleapis.com/auth/datastore",
    aud: account.token_uri || TOKEN_ENDPOINT,
    iat: now,
    exp: now + 3600,
  }));
  let signature: ArrayBuffer;
  try {
    const key = await crypto.subtle.importKey(
      "pkcs8",
      pemToArrayBuffer(account.private_key),
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["sign"],
    );
    signature = await crypto.subtle.sign(
      { name: "RSASSA-PKCS1-v1_5" },
      key,
      toArrayBuffer(new TextEncoder().encode(`${encodedHeader}.${encodedPayload}`)),
    );
  } catch {
    throw new DeletionError("BACKEND_FAILURE", "The account deletion service credential is unavailable or invalid.");
  }
  const assertion = `${encodedHeader}.${encodedPayload}.${base64UrlEncode(signature)}`;
  const response = await fetcher(account.token_uri || TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }),
  });
  if (!response.ok) throw new DeletionError("BACKEND_FAILURE", "The account deletion service could not authenticate securely.");
  const body = (await response.json()) as { access_token?: string };
  if (!body.access_token) throw new DeletionError("BACKEND_FAILURE", "The account deletion service did not receive an access token.");
  return body.access_token;
}

export async function deleteVerifiedFirebaseAccount(
  idToken: string,
  env: DeletionEnv,
  dependencies: {
    verifyIdToken?: typeof verifyFirebaseIdToken;
    getAccessToken?: typeof getServiceAccountAccessToken;
    fetcher?: typeof fetch;
  } = {},
): Promise<void> {
  const fetcher = dependencies.fetcher ?? fetch;
  const identity = await (dependencies.verifyIdToken ?? verifyFirebaseIdToken)(idToken, fetcher);
  const accessToken = await (dependencies.getAccessToken ?? getServiceAccountAccessToken)(env, fetcher);
  const headers = { Authorization: `Bearer ${accessToken}` };
  const documentUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/users/${encodeURIComponent(identity.uid)}`;

  const existingRecord = await fetcher(documentUrl, { headers });
  if (!existingRecord.ok && existingRecord.status !== 404) throw new DeletionError("BACKEND_FAILURE", "Unable to verify the account record before deletion.");

  if (existingRecord.status !== 404) {
    const documentDeletion = await fetcher(documentUrl, { method: "DELETE", headers });
    if (!documentDeletion.ok && documentDeletion.status !== 404) {
      throw new DeletionError("BACKEND_FAILURE", "Unable to remove the account record. No account was deleted.");
    }
  }

  const authDeletion = await fetcher(
    `https://identitytoolkit.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/accounts:delete`,
    {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ localId: identity.uid }),
    },
  );
  if (authDeletion.ok) return;

  const errorText = await authDeletion.text();
  if (authDeletion.status === 404 || errorText.includes("USER_NOT_FOUND")) {
    return;
  }
  throw new DeletionError("BACKEND_FAILURE", "The account record was removed, but complete account deletion could not finish. Please retry safely.");
}
