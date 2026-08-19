export type DeletionApiPayload = {
  deleted?: boolean;
  error?: string;
  message?: string;
};

const messageByCode: Record<string, string> = {
  INVALID_AUTH: "Your sign-in could not be verified. Please sign in with Google again.",
  EXPIRED_AUTH: "Your sign-in has expired. Please sign in with Google again.",
  STALE_AUTH: "Please sign in with Google again before confirming deletion.",
  ALREADY_DELETED: "This Mr. Copy account has already been deleted.",
  BACKEND_FAILURE: "The account deletion service is temporarily unavailable. No further account action was completed; please try again later.",
};

export function deletionErrorMessage(payload: DeletionApiPayload): string {
  if (payload.error && messageByCode[payload.error]) return messageByCode[payload.error];
  return payload.message || "Account deletion could not be completed. Please try again later.";
}
