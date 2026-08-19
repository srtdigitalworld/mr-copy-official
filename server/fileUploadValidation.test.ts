import { describe, expect, it } from "vitest";
import { MAX_UPLOAD_BYTES, safeFileName, validateFileUpload } from "./fileUploadValidation";

describe("file upload validation", () => {
  it("accepts a supported small file and returns its original bytes", () => {
    const encoded = Buffer.from("Mr. Copy reference").toString("base64");
    const result = validateFileUpload("text/plain", encoded);
    expect(result.valid).toBe(true);
    if (result.valid) expect(result.bytes.toString()).toBe("Mr. Copy reference");
  });

  it("rejects an unsupported MIME type", () => {
    expect(validateFileUpload("application/zip", "aGVsbG8=")).toEqual({ valid: false, message: "This file type is not supported." });
  });

  it("rejects an oversized upload", () => {
    const encoded = Buffer.alloc(MAX_UPLOAD_BYTES + 1).toString("base64");
    expect(validateFileUpload("text/plain", encoded)).toEqual({ valid: false, message: "Files must be 10 MB or smaller." });
  });

  it("normalizes unsafe file names without losing the extension", () => {
    expect(safeFileName("my <copy> file?.txt")).toBe("my-copy-file-.txt");
  });
});
