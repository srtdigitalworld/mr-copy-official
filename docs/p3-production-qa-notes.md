# P3 Production QA Notes

## Live verification — 20 August 2026

### P3.1 Shopping Links

The published route `https://mrcopy.pro/use-cases/shopping-links` returned the expected title **“Save Shopping Links and Product Details on Android | Mr. Copy.”** Its visible content includes the breadcrumb through Link Previews; the Android Share Sheet workflow; available product title, brand, specifications, price/MRP, image, and rating fields; all eight verified supported public stores; the local-folder organization relationship; and the explicit public-source, partial-result, local-storage, non-marketplace, and non-guarantee boundaries.

The live DOM snapshot is preserved for detailed head metadata, JSON-LD, indexability, heading, and internal-link inspection. Browser verification of P3.2 and P3.3 is still in progress.

### P3.2 Floating Bubble Permission

The published route `https://mrcopy.pro/help/floating-bubble-permission` returned the expected title **“Enable Floating Bubble Permission on Android | Mr. Copy.”** Its visible content includes the breadcrumb through Floating Bubble; a clear Display over other apps purpose; device-variable but non-speculative Android settings guidance; explicit user choice and disable path; the Saved Recent/Starred-only boundary; the no-private-app-data boundary; troubleshooting guidance; and the no-bypass/no-uninterrupted-background-access limitation.

The live DOM snapshot is preserved for detailed head metadata, JSON-LD, indexability, heading, and internal-link inspection. Browser verification of P3.3 is still in progress.

### P3.3 Android Clipboard Access

The published route `https://mrcopy.pro/help/android-clipboard-access` returned the expected title **“How Clipboard Access Works on Android | Mr. Copy.”** Its visible content includes the breadcrumb through Floating Bubble; Android background clipboard-access restrictions; the Android 13+ bubble-tap foreground-interaction explanation; the explicit no-bypass boundary; supported text-and-URL scope; saved Recent/Starred reuse; the optional overlay setting boundary; and contextual links to Floating Bubble, permission help, Clipboard Manager, Privacy & Security, and Privacy.

The live DOM snapshot is preserved for detailed head metadata, JSON-LD, indexability, heading, and internal-link inspection.

### Responsive-capture evidence

Live tablet (`768×1024`) captures for Shopping Links and Floating Bubble Permission rendered the full headers, visible breadcrumbs, readable H1s and descriptions, paired CTAs, section headings, and two-column workflow cards without horizontal clipping. The Android Clipboard Access tablet capture and all three mobile captures remain to be reviewed.

The Android Clipboard Access tablet capture also rendered the expected breadcrumb, readable H1 and description, CTA pair, Android clipboard-boundary section, and readable workflow cards without clipping. The Shopping Links mobile (`375×812`) capture rendered the mobile header, wrapped breadcrumb, readable H1 and description, and stacked CTA pair without horizontal overflow. Two P3 mobile captures remain to be reviewed.

The Floating Bubble Permission and Android Clipboard Access mobile (`375×812`) captures likewise rendered the expected mobile header, wrapped breadcrumb, readable H1 and description, and stacked CTA pair without clipping or horizontal overflow. Responsive production evidence is now complete at desktop, tablet, and mobile for all three P3 routes.

## Completed production and release checks

The Cloudflare Workers build for checkpoint `48432f5a` completed successfully. All three live P3 routes returned `200 text/html` from `mrcopy.pro`.

| Check | Shopping Links | Floating Bubble Permission | Android Clipboard Access |
| --- | --- | --- | --- |
| Canonical | `/use-cases/shopping-links` | `/help/floating-bubble-permission` | `/help/android-clipboard-access` |
| Description and Open Graph | Present and route-specific | Present and route-specific | Present and route-specific |
| Structured data | `WebPage` and `BreadcrumbList` | `WebPage` and `BreadcrumbList` | `WebPage` and `BreadcrumbList` |
| Indexability | No `noindex` marker | No `noindex` marker | No `noindex` marker |
| Sitemap entry | Present | Present | Present |
| Heading hierarchy | One H1 followed by section H2s | One H1 followed by section H2s | One H1 followed by section H2s |

The live sitemap contains all three canonical P3 URLs, while the deferred `/faq` URL is intentionally absent. `robots.txt` permits general crawling and points to `https://mrcopy.pro/sitemap.xml`.

A live-browser probe loaded each route after its page chunk completed. On all three routes, the expected title, description, canonical URL, Open Graph title and URL, and JSON-LD types were present. The first `Tab` focused **Skip to main content** (`#main-content`); after its existing focus transition, it was visibly positioned at `top: 16px` on each page. The same production session recorded no console errors and no failed network requests.

The final regression run passed **40 tests in 6 files**. TypeScript completed without errors, and the production build completed successfully. The P3 route chunks are separately lazy-loaded. The established advisory for the shared main bundle exceeding 500 kB after minification remains non-blocking and was not introduced by the P3 route chunks.
