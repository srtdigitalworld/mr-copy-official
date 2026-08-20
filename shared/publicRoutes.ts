export const canonicalPublicRoutes = [
  "/",
  "/features",
  "/features/clipboard-manager",
  "/features/floating-bubble",
  "/features/link-previews",
  "/features/privacy-security",
  "/use-cases/shopping-links",
  "/help/floating-bubble-permission",
  "/help/android-clipboard-access",
  "/faq",
  "/pricing",
  "/privacy",
  "/terms",
  "/delete-account",
  "/contact",
] as const;

export type CanonicalPublicRoute = (typeof canonicalPublicRoutes)[number];

export function normalizePublicRoute(pathname: string): string {
  if (pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}
