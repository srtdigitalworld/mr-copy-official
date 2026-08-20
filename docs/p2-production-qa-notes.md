# P2 Production QA Notes

## Live verification — 20 August 2026

### Link Previews

The published route `https://mrcopy.pro/features/link-previews` returned the expected page with the title **“Save Links with Previews on Android | Mr. Copy.”** The rendered content includes the visible breadcrumb, one H1, URL-preview workflow, explicit non-downloader limitation, supported public YouTube/Instagram/Facebook-link boundary, Google Maps reference boundary, supported shopping-reference boundary, and the public-request/local-storage limitation.

The visible contextual navigation includes the existing Feature Hub and the descriptive destination **“Organize saved text and links.”** Production DOM inspection is still in progress for head metadata, JSON-LD, links, responsive layout, keyboard behavior, crawl files, and browser-console state.

### Privacy & Security

The published route `https://mrcopy.pro/features/privacy-security` returned the expected page with the title **“Local Encrypted Clipboard Storage for Android | Mr. Copy.”** Its rendered content includes the visible breadcrumb, one H1, local-first architecture, saved-content boundary, verified AES-256 GCM and Android Keystore statement, account-data separation, public-link request boundary, clear no-security-guarantee language, and contextual links to the full privacy policy and account-deletion process.

The page explicitly states that saved text, folders, search indexes, URL previews, and preferences are local Android application data and are not a cloud-synced clipboard. The remaining DOM, structured-data, responsive, keyboard, crawl, and console checks are still in progress.

## Completed production and release checks

The Cloudflare Workers build for checkpoint `32e0b2bb` completed successfully. Both live P2 routes returned `200 text/html` from `mrcopy.pro`.

| Check | Link Previews | Privacy & Security |
| --- | --- | --- |
| Live title | `Save Links with Previews on Android \| Mr. Copy` | `Local Encrypted Clipboard Storage for Android \| Mr. Copy` |
| Canonical | `/features/link-previews` | `/features/privacy-security` |
| Description and Open Graph | Present and route-specific | Present and route-specific |
| Structured data | `WebPage` and `BreadcrumbList` | `WebPage` and `BreadcrumbList` |
| Indexability | No `noindex` marker | No `noindex` marker |
| Sitemap entry | Present | Present |
| Heading hierarchy | One H1 followed by section H2s | One H1 followed by section H2s |

The published sitemap contains both canonical route URLs. `robots.txt` permits general crawling and points to `https://mrcopy.pro/sitemap.xml`.

Visual checks passed at desktop (live route), tablet (`768×1024`), and mobile (`375×812`) viewports. Breadcrumbs, headings, CTA labels, feature cards, and the responsive navigation were legible without horizontal overflow in the inspected views. The desktop production DOM exposed the shared **Skip to main content** link; the shared shell uses a `main#main-content` landmark, and the shared stylesheet brings the skip link on screen on keyboard focus. Descriptive link labels and decorative icon semantics remain present.

The final regression run passed all **28 tests in 6 files**. TypeScript completed without errors, and the production build completed successfully, producing independently lazy-loaded P2 chunks. The build continues to report the existing advisory about a main bundle above 500 kB after minification; it is not a build failure and was not introduced by the P2 route chunks. No failed P2 network requests or new P2 browser-console errors were recorded. The log retains two historical pre-P2 development errors, neither reproduced during this QA.

### Responsive-capture follow-up

The first headless live tablet capture of Link Previews rendered correctly. The first equivalent Privacy & Security capture contained only the shared header, indicating that it was captured before its lazy route chunk completed. This is a capture timing condition, not valid page evidence; it must be repeated with an explicit load wait before the responsive QA can be considered complete.

The repeated live Privacy & Security tablet capture used an explicit render wait and showed the expected hero, breadcrumb, CTA pair, local-first section, and two-column feature-card layout. The live Link Previews mobile capture showed the expected mobile header, breadcrumb, fully visible H1, readable descriptive text, stacked CTA pair, and the beginning of the next semantic section with no horizontal clipping.

The live Privacy & Security mobile capture also showed the expected mobile header, visible breadcrumb, fully readable H1, descriptive text, and stacked CTA pair with no clipping or overflow. Live production evidence is therefore complete at desktop, tablet (`768×1024`), and mobile (`375×812`) for both P2 routes.

### Explicit production keyboard, console, and network check

A live-browser probe loaded both P2 URLs after the production route chunks had completed. Each route returned HTTP 200, its expected title and canonical, route-specific description and Open Graph values, and JSON-LD types `WebPage` and `BreadcrumbList`. On both routes, the first `Tab` focused **Skip to main content** (`#main-content`); after its built-in 160 ms focus transition, it was visibly positioned at `top: 16px` with an active `:focus` state. The same live-browser session reported no console errors and no failed network requests for either P2 route.
