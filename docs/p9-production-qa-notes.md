# P9 Production QA Notes

## Live route and initial-response verification

The deterministic P9 live probe passed after the Cloudflare deployment propagated. All 15 canonical routes returned HTTP 200 with their route-specific initial title, description, canonical URL, Open Graph URL, H1, and existing JSON-LD. The P9 Link Previews, Privacy & Security, and Pricing initial documents contain the new approved copy. HTTP requests preserve path/query in the 308 HTTPS redirect; unknown document and asset requests return 404; the unknown document response contains `X-Robots-Tag: noindex`; sitemap and robots retain the exact 15 canonical routes and sitemap declaration.

## Browser verification and cache observation

A previously open browser tab initially continued to display the pre-P9 “Get it on Google Play” UI after normal and hard-refresh controls, while no-cache HTTP retrieval already served the P9 document and current client script. Opening the same canonical page with a harmless cache-busting query rendered the P9 client application correctly: header and page CTAs became **See availability details** and rendered as links. This is a stale browser-document cache observation from a pre-deployment open tab, not a production source or deployment mismatch; a new navigation/cache key receives the current P9 application.

## Availability-path interaction

The fresh-cache Link Previews CTA navigated without an alert or external action to the exact existing route `https://mrcopy.pro/pricing#availability`. The destination exposes the confirmed pending-availability copy, no price/trial value, no web checkout, the separate Google Play billing boundary, and the identity/entitlement privacy link. A subsequent Tab from that already-followed in-page route retained its navigation focus rather than serving as a fresh-page first-Tab check, so a separate fresh-load keyboard test remains required.

## Fresh-page content and keyboard checks

The fresh-cache production Privacy & Security page rendered the new availability link and retained the existing encrypted-local-storage/account-boundary content. The P9 integrity section is present in the route’s deployed initial response and client page. On a fresh page load, the first Tab focused the visible **Skip to main content** link at the top of the viewport, confirming that the P9 additions did not regress the shared keyboard entry point.

## Responsive verification

The three P9-improved pages were captured locally at desktop `1280×720`, tablet `768×1024`, and mobile `375×812`. Pricing retains readable deferred-availability messaging and an informational status record without a false purchase control. Link Previews retains its hierarchy and existing cards around the added workflow area. Privacy & Security retains its local-storage hierarchy and existing trust cards. Across the checked breakpoints, the shared availability links fit their existing CTA rows, no horizontal overflow was observed, and no owner-supplied Android visual was altered.

Fresh local screenshots after server restart rendered the three updated routes without a visible client error. The available sandbox runtime log files are historical and did not record the screenshot-driven page loads, while direct production browser checks and deterministic live HTTP QA completed without application failure.
