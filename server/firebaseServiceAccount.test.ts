import { createSign } from "node:crypto";
import { describe, expect, it } from "vitest";

type ServiceAccount = {
  client_email?: string;
  private_key?: string;
  token_uri?: string;
};

function hasUsableServiceAccount(rawSecret: string | undefined): boolean {
  if (!rawSecret?.trim().startsWith("{")) return false;
  try {
    const account = JSON.parse(rawSecret) as ServiceAccount;
    return Boolean(account.client_email && account.private_key && /BEGIN\s*PRIVATE\s*KEY/.test(account.private_key));
  } catch {
    return false;
  }
}

function base64Url(value: string): string {
  return Buffer.from(value).toString("base64url");
}

describe.skipIf(!hasUsableServiceAccount(process.env.FIREBASE_SERVICE_ACCOUNT))("Firebase deletion service credential", () => {
  it("exchanges the dedicated server-side key for a narrowly scoped Google access token", async () => {
    const rawSecret = process.env.FIREBASE_SERVICE_ACCOUNT;
    const account = JSON.parse(rawSecret as string) as ServiceAccount;
    if (!account.client_email || !account.private_key) throw new Error("FIREBASE_SERVICE_ACCOUNT is not a usable service-account credential.");
    expect(account.client_email).toMatch(/@mr-copy\.iam\.gserviceaccount\.com$/);

    const now = Math.floor(Date.now() / 1000);
    const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
    const payload = base64Url(JSON.stringify({
      iss: account.client_email,
      scope: "https://www.googleapis.com/auth/identitytoolkit https://www.googleapis.com/auth/datastore",
      aud: account.token_uri || "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 300,
    }));
    const signer = createSign("RSA-SHA256");
    signer.update(`${header}.${payload}`);
    const normalizedPrivateKey = (account.private_key as string)
      .replace(/-----BEGIN\s*PRIVATE\s*KEY-----/g, "-----BEGIN PRIVATE KEY-----")
      .replace(/-----END\s*PRIVATE\s*KEY-----/g, "-----END PRIVATE KEY-----");
    const assertion = `${header}.${payload}.${signer.sign(normalizedPrivateKey, "base64url")}`;
    const response = await fetch(account.token_uri || "https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }),
    });
    expect(response.ok).toBe(true);
    const result = (await response.json()) as { access_token?: string };
    expect(result.access_token).toMatch(/^ya29\./);
  }, 20_000);
});
