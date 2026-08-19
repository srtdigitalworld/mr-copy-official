import { describe, expect, it, vi } from "vitest";
import { DeletionError, deleteVerifiedFirebaseAccount } from "./firebase";

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
});
