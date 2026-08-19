export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg", "image/png", "image/webp", "image/gif", "application/pdf",
  "text/plain", "text/csv", "application/json",
]);

export function safeFileName(fileName: string) {
  const cleaned = fileName.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-").slice(0, 180);
  return cleaned || "mr-copy-upload";
}

export function validateFileUpload(mimeType: string, dataBase64: string) {
  if (!ALLOWED_MIME_TYPES.has(mimeType)) return { valid: false as const, message: "This file type is not supported." };
  const bytes = Buffer.from(dataBase64, "base64");
  if (!bytes.length || bytes.length > MAX_UPLOAD_BYTES) return { valid: false as const, message: "Files must be 10 MB or smaller." };
  return { valid: true as const, bytes };
}
