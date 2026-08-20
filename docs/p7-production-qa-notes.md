# P7 Production QA Notes

## Current live verification

The live `https://mrcopy.pro/features/link-previews` response returned HTTP 200 after the final internal-document routing correction. Its initial body contains the route marker, approved feature title, canonical, Open Graph URL, H1, and route JSON-LD as verified by the deterministic live probe. The existing visual page rendered correctly in a desktop browser with its feature hierarchy, breadcrumbs, CTA controls, and established public-link boundary copy intact.

Keyboard testing on the same live route confirmed that the first `Tab` focuses the visible **Skip to main content** link at the top of the page. No visual redesign was introduced by P7.

The live unknown route `https://mrcopy.pro/p7-route-does-not-exist` displayed the existing, user-friendly **Page Not Found** recovery page with the **Back to Mr. Copy** path. The deterministic probe had already established the corresponding HTTP 404 and `X-Robots-Tag: noindex`; browser verification confirms the human-facing recovery experience. The first `Tab` on the 404 page also focuses the visible **Skip to main content** link.

## Local validation completed before live QA

P7 local validation passed TypeScript for the application and Worker, 59 Vitest regressions, the production build, and deterministic output checks for all 15 prerendered canonical documents plus the static 404 artifact. The output checks confirm each document has one approved title, description, canonical, Open Graph URL, H1, and JSON-LD node without a client loading fallback.

## Complete production and responsive checks

The final live P7 probe passed for all 15 canonical routes. Each returned HTTP 200 directly, without a trailing-slash redirect, and the raw server-delivered HTML included the exact route marker, title, description, canonical, matching Open Graph URL, H1, and one `mr-copy-page-schema` JSON-LD node. The same probe verified the root sitemap has exactly the 15 declared canonical URLs, robots declares that sitemap, a nonexistent document route returns HTTP 404 with `X-Robots-Tag: noindex`, a nonexistent static asset returns HTTP 404, and HTTP requests preserve their path/query in the 308 HTTPS redirect.

The P7 Cloudflare routing correction required disabling automatic HTML filename rewriting (`html_handling: "none"`). Cloudflare had redirected internal `.html` asset fetches before that setting, which was caught during live QA and corrected before final validation. The final custom-domain response now has direct HTTP 200 parity for canonical routes and direct HTTP 404 parity for unknown routes.

Homepage screenshots after a clean local restart were inspected at desktop `1280×720`, tablet `768×1024`, and mobile `375×812`. The existing hierarchy, header behavior, CTA controls, and owner-supplied Android visuals remain contained and unchanged. Fresh local instrumentation after restart recorded zero console errors and zero failed network requests. The only production build advisory remains the established shared JavaScript bundle above 500 kB; P7 did not introduce that warning or change page content.
