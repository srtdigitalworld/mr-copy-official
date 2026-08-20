import { DeletionError, deleteVerifiedFirebaseAccount, type DeletionEnv } from "./firebase";
import { canonicalPublicRoutes, normalizePublicRoute } from "../../shared/publicRoutes";

type Env = DeletionEnv & {
  ASSETS: { fetch(request: Request): Promise<Response> };
};

const SITE_ORIGIN = "https://mrcopy.pro";
const staticAssetPrefixes = ["/assets/", "/manus-storage/", "/__manus__/"];
const staticAssetPaths = new Set(["/robots.txt", "/sitemap.xml", "/favicon.ico"]);
const jsonHeaders = {
  "Content-Type": "application/json; charset=UTF-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

function response(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

function isStaticAssetPath(pathname: string): boolean {
  return staticAssetPrefixes.some((prefix) => pathname.startsWith(prefix)) || staticAssetPaths.has(pathname);
}

function isCanonicalPublicRoute(pathname: string): boolean {
  return canonicalPublicRoutes.includes(pathname as (typeof canonicalPublicRoutes)[number]);
}

function assetRequest(request: Request, path: string): Request {
  const url = new URL(request.url);
  url.pathname = path;
  return new Request(url.toString(), request);
}

function documentAssetPath(pathname: string): string {
  const name = pathname === "/" ? "home" : pathname.slice(1).replaceAll("/", "__");
  return `/_documents/${name}.html`;
}

async function notFoundResponse(request: Request, env: Env): Promise<Response> {
  const asset = await env.ASSETS.fetch(assetRequest(request, "/_documents/not-found.html"));
  const headers = new Headers(asset.headers);
  headers.set("Content-Type", "text/html; charset=UTF-8");
  headers.set("X-Robots-Tag", "noindex");
  return new Response(asset.body, { status: 404, headers });
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
    console.error("Account deletion backend error", { name: error instanceof Error ? error.name : "UnknownError" });
    return response({ error: "BACKEND_FAILURE", message: "The account deletion service is unavailable." }, 502);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 308);
    }
    if (url.pathname === "/api/account-delete") return handleDeletion(request, env);
    if (url.pathname.startsWith("/api/")) return response({ error: "NOT_FOUND" }, 404);
    if (isStaticAssetPath(url.pathname)) return env.ASSETS.fetch(request);

    const canonicalPath = normalizePublicRoute(url.pathname);
    if (isCanonicalPublicRoute(canonicalPath)) {
      return env.ASSETS.fetch(assetRequest(request, documentAssetPath(canonicalPath)));
    }
    return notFoundResponse(request, env);
  },
};
