# P6 Production QA Notes

## Canonical routing repair

The first P6 Worker configuration deployed the redirect logic but left static pages outside Worker-first execution. Production evidence showed that plain HTTP pages and the stale static fallback bypassed the Worker, so the change was not treated as complete. The corrected configuration sets `assets.run_worker_first` to `true`, retaining the Worker’s `ASSETS.fetch` fallback for public content.

After the corrective deployment, fresh uncached HTTP requests redirect with **308 Permanent Redirect** to the identical HTTPS URL, preserving both path and query string. The static root head now exposes slashless `https://mrcopy.pro` for its canonical and Open Graph URL. The real hero asset returns HTTP 200, HTTPS `GET /api/account-delete` still returns its expected 405 method boundary, and key canonical routes return HTTP 200.

## Initial live rendering

The production homepage retained its navigation, original owner-supplied Android screenshot inside the phone frame, headline, CTA, content hierarchy, and P5 contextual links after the Worker-first change. The production Link Previews page also loaded with its real supplied screen, full public-link workflow content, visible FAQ content, privacy and Clipboard Manager links, and source-limit language. No page design or product content was changed in P6.

## Responsive evidence

The live desktop homepage capture at `1280×720` retained the original header, hero hierarchy, CTA pair, unchanged real Android screen, and official floating icon with no layout regression. The live mobile homepage capture at `375×812` retained readable headings, a compact header, stacked CTA controls, and contained phone visual with no visible horizontal overflow. The directly inspected live tablet capture at `768×1024` retained the compact header, readable hero, CTA pair, full real Android screen, and contained layout. The P6 change is routing-only and does not alter page CSS or content.

## Full-site live QA

The final live-browser probe loaded all 15 canonical routes through the Worker-first asset path. Every route returned HTTP 200 and exposed a `mrcopy.pro` canonical URL, a non-empty description, a matching Open Graph URL, and a `WebPage` JSON-LD node. The first `Tab` focused **Skip to main content** at `top: 16px` on every route. The same probe reported zero console errors and zero failed network requests across the full canonical inventory.

The P6 static root has matching slashless canonical and Open Graph values. Fresh uncached HTTP requests for the root, a feature path with a query string, and the account-deletion API path each returned 308 to the identical HTTPS target. The sitemap remains at 15 canonical URLs; robots permits crawling and names `https://mrcopy.pro/sitemap.xml`. All source assets, including the real hero screen, continue to return HTTP 200.

## Final code validation

The final validation passed **52 tests across 6 files**, including the new Worker HTTP-to-HTTPS regression. TypeScript completed with no errors, the production build completed successfully, and Wrangler dry-run validated the Worker-first static-assets configuration. The established shared main-bundle advisory above 500 kB remains non-blocking and pre-existing; P6 added no page or bundle expansion.
