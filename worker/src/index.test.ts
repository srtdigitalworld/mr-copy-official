import { describe, expect, it, vi } from "vitest";
import { DeletionError, FIREBASE_ISSUER, FIREBASE_PROJECT_ID, deleteVerifiedFirebaseAccount, getServiceAccountAccessToken, verifyFirebaseIdToken } from "./firebase";

function encodedToken(payload: Record<string, unknown>): string {
  const header = Buffer.from(JSON.stringify({ alg: "RS256", kid: "test-key" })).toString("base64url");
  return `${header}.${Buffer.from(JSON.stringify(payload)).toString("base64url")}.signature`;
}

async function signedTokenAndPublicJwk(payload: Record<string, unknown>) {
  const keyPair = await crypto.subtle.generateKey(
    { name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
    true,
    ["sign", "verify"],
  );
  const header = Buffer.from(JSON.stringify({ alg: "RS256", kid: "test-key" })).toString("base64url");
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = await crypto.subtle.sign(
    { name: "RSASSA-PKCS1-v1_5" },
    keyPair.privateKey,
    new TextEncoder().encode(`${header}.${encodedPayload}`),
  );
  const publicJwk = await crypto.subtle.exportKey("jwk", keyPair.publicKey);
  return {
    token: `${header}.${encodedPayload}.${Buffer.from(signature).toString("base64url")}`,
    publicJwk: { ...publicJwk, kid: "test-key" },
  };
}

describe("account deletion service", () => {
  it("uses only the UID returned by verified-token processing for Firestore and Authentication deletion", async () => {
    const fetcher = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ name: "users/verified-user" }), { status: 200 }))
      .mockResolvedValueOnce(new Response(null, { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({}), { status: 200 }));
    const verifyIdToken = vi.fn().mockResolvedValue({ uid: "verified-user", email: "owner@example.com" });
    const getAccessToken = vi.fn().mockResolvedValue("server-access-token");

    await deleteVerifiedFirebaseAccount("browser-token-with-untrusted-data", { FIREBASE_SERVICE_ACCOUNT: "unused" }, { fetcher, verifyIdToken, getAccessToken });

    expect(verifyIdToken).toHaveBeenCalledWith("browser-token-with-untrusted-data", fetcher);
    expect(fetcher.mock.calls[0][0]).toContain("/users/verified-user");
    expect(fetcher.mock.calls[1][0]).toContain("/users/verified-user");
    expect(fetcher.mock.calls[2][1].body).toBe(JSON.stringify({ localId: "verified-user" }));
  });

  it("continues to Firebase Authentication deletion when the matching Firestore record is already absent, making a prior partial attempt safely retryable", async () => {
    const fetcher = vi.fn()
      .mockResolvedValueOnce(new Response(null, { status: 404 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({}), { status: 200 }));
    await expect(deleteVerifiedFirebaseAccount("token", { FIREBASE_SERVICE_ACCOUNT: "unused" }, {
      fetcher,
      verifyIdToken: vi.fn().mockResolvedValue({ uid: "verified-user", email: "owner@example.com" }),
      getAccessToken: vi.fn().mockResolvedValue("server-access-token"),
    })).resolves.toBeUndefined();
    expect(fetcher).toHaveBeenCalledTimes(2);
    expect(fetcher.mock.calls[1][1].body).toBe(JSON.stringify({ localId: "verified-user" }));
  });

  it("treats a duplicate retry after both record and authentication removal as a completed deletion", async () => {
    const fetcher = vi.fn()
      .mockResolvedValueOnce(new Response(null, { status: 404 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: { message: "USER_NOT_FOUND" } }), { status: 404 }));
    await expect(deleteVerifiedFirebaseAccount("token", { FIREBASE_SERVICE_ACCOUNT: "unused" }, {
      fetcher,
      verifyIdToken: vi.fn().mockResolvedValue({ uid: "verified-user", email: "owner@example.com" }),
      getAccessToken: vi.fn().mockResolvedValue("server-access-token"),
    })).resolves.toBeUndefined();
  });

  it("does not begin deletion when Firestore account lookup fails", async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response(null, { status: 503 }));
    await expect(deleteVerifiedFirebaseAccount("token", { FIREBASE_SERVICE_ACCOUNT: "unused" }, {
      fetcher,
      verifyIdToken: vi.fn().mockResolvedValue({ uid: "verified-user", email: "owner@example.com" }),
      getAccessToken: vi.fn().mockResolvedValue("server-access-token"),
    })).rejects.toMatchObject<Partial<DeletionError>>({ code: "BACKEND_FAILURE" });
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it("rejects malformed, expired, and stale ID tokens before it makes any network request", async () => {
    const now = 1_800_000_000;
    const fetcher = vi.fn();
    await expect(verifyFirebaseIdToken("not-a-token", fetcher, now)).rejects.toMatchObject<Partial<DeletionError>>({ code: "INVALID_AUTH" });
    await expect(verifyFirebaseIdToken(encodedToken({
      aud: FIREBASE_PROJECT_ID, iss: FIREBASE_ISSUER, sub: "verified-user", exp: now - 1, iat: now - 30, auth_time: now - 30, email: "owner@example.com", email_verified: true,
    }), fetcher, now)).rejects.toMatchObject<Partial<DeletionError>>({ code: "EXPIRED_AUTH" });
    await expect(verifyFirebaseIdToken(encodedToken({
      aud: FIREBASE_PROJECT_ID, iss: FIREBASE_ISSUER, sub: "verified-user", exp: now + 600, iat: now - 700, auth_time: now - 700, email: "owner@example.com", email_verified: true,
    }), fetcher, now)).rejects.toMatchObject<Partial<DeletionError>>({ code: "STALE_AUTH" });
    expect(fetcher).not.toHaveBeenCalled();
  });

  it("verifies a correctly signed Firebase token against the Google JWK key set", async () => {
    const now = 1_800_000_000;
    const { token, publicJwk } = await signedTokenAndPublicJwk({
      aud: FIREBASE_PROJECT_ID,
      iss: FIREBASE_ISSUER,
      sub: "verified-user",
      exp: now + 600,
      iat: now - 10,
      auth_time: now - 10,
      email: "test@example.com",
      email_verified: true,
    });
    const fetcher = vi.fn().mockResolvedValue(new Response(JSON.stringify({ keys: [publicJwk] }), { status: 200 }));
    await expect(verifyFirebaseIdToken(token, fetcher, now)).resolves.toEqual({ uid: "verified-user", email: "test@example.com" });
    expect(fetcher).toHaveBeenCalledWith("https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com");
  });

  it("returns a controlled backend failure when the encrypted Worker secret is not a usable service-account key", async () => {
    await expect(getServiceAccountAccessToken({ FIREBASE_SERVICE_ACCOUNT: JSON.stringify({ client_email: "worker@mr-copy.iam.gserviceaccount.com", private_key: "not-a-pem" }) }, vi.fn()))
      .rejects.toMatchObject<Partial<DeletionError>>({ code: "BACKEND_FAILURE" });
  });

});
