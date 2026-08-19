import { describe, expect, it } from "vitest";
import { deletionErrorMessage } from "./deleteAccountErrors";

describe("deletionErrorMessage", () => {
  it("maps invalid, expired, stale, duplicate, and backend Worker results to clear non-destructive guidance", () => {
    expect(deletionErrorMessage({ error: "INVALID_AUTH" })).toContain("sign in with Google again");
    expect(deletionErrorMessage({ error: "EXPIRED_AUTH" })).toContain("expired");
    expect(deletionErrorMessage({ error: "STALE_AUTH" })).toContain("sign in with Google again");
    expect(deletionErrorMessage({ error: "ALREADY_DELETED" })).toContain("already been deleted");
    expect(deletionErrorMessage({ error: "BACKEND_FAILURE" })).toContain("No further account action was completed");
  });

  it("uses the server message only for unknown future error codes", () => {
    expect(deletionErrorMessage({ error: "FUTURE_ERROR", message: "A future error occurred." })).toBe("A future error occurred.");
  });
});
