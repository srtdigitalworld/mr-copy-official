import { DeletionError, deleteVerifiedFirebaseAccount, type DeletionEnv } from "./firebase";

type Env = DeletionEnv & {
  ASSETS: { fetch(request: Request): Promise<Response> };
};

const SITE_ORIGIN = "https://mrcopy.pro";
const jsonHeaders = {
  "Content-Type": "application/json; charset=UTF-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

function response(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

async function handleDeletion(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") return response({ error: "METHOD_NOT_ALLOWED" }, 405);
  if (request.headers.get("Origin") !== SITE_ORIGIN) return response({ error: "ORIGIN_NOT_ALLOWED" }, 403);
  if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) {
    return response({ error: "INVALID_REQUEST" }, 415);
  }
  const site = request.headers.get("Sec-Fetch-Site");
  if (site && site !== "same-origin") return response({ error: "ORIGIN_NOT_ALLOWED" }, 403);

  let idToken: unknown;
  try {
    ({ idToken } = (await request.json()) as { idToken?: unknown });
  } catch {
    return response({ error: "INVALID_REQUEST" }, 400);
  }
  if (typeof idToken !== "string" || !idToken.trim()) return response({ error: "INVALID_REQUEST" }, 400);

  try {
    await deleteVerifiedFirebaseAccount(idToken, env);
    return response({ deleted: true }, 200);
  } catch (error) {
    if (error instanceof DeletionError) {
      const statusByCode: Record<DeletionError["code"], number> = {
        INVALID_AUTH: 401,
        EXPIRED_AUTH: 401,
        STALE_AUTH: 401,
        ALREADY_DELETED: 409,
        BACKEND_FAILURE: 502,
      };
      return response({ error: error.code, message: error.message }, statusByCode[error.code]);
    }
    return response({ error: "BACKEND_FAILURE", message: "The account deletion service is unavailable." }, 502);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/account-delete") return handleDeletion(request, env);
    return env.ASSETS.fetch(request);
  },
};
