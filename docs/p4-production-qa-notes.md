# P4 Production QA Notes

## Local implementation verification

The local `/faq` route rendered the route-specific title, visible Home → FAQ breadcrumb, H1, evidence-backed grouping, default-open accessible question-and-answer content, and descriptive contextual links. The rendered content included the verified clipboard, Android access, Floating Bubble permission, public-link, shopping-reference, local-storage, encryption, account-data, deletion, billing-boundary, and Android-only scope answers.

The local `/features/link-previews` route retained its established page hierarchy and rendered the new P4.2 FAQ source structure. The local page title and existing Link Previews hero remained intact. Browser extraction confirmed the established URL-preview workflow, available metadata, and downloader boundary. Full live-route metadata, schema, responsive, keyboard, console, and network QA remain pending publication.

## Initial live production rendering

The Cloudflare Workers build for checkpoint `100b8e8d` completed successfully. The live `/faq` route rendered the expected route title, Home → FAQ breadcrumb, H1, and intended opening page hierarchy at `https://mrcopy.pro/faq`. The live `/features/link-previews` route retained its expected route title, Home → Features → Link Previews breadcrumb, H1, and established opening feature hierarchy at `https://mrcopy.pro/features/link-previews`. Detailed DOM metadata, FAQ schema parity, responsive, keyboard, console, and network checks remain in progress.

## Responsive capture evidence

The live FAQ tablet capture at `768×1024` displayed the compact header and menu control, visible Home → FAQ breadcrumb, readable H1 and supporting copy, two clear CTAs, the first semantic section, and the default-open first FAQ answer. The cards, text, and link were contained without visible horizontal overflow.

The live Link Previews mobile capture at `375×812` displayed the compact header and menu control, wrapped Home → Features → Link Previews breadcrumb, readable H1, description, stacked CTAs, and the start of the existing workflow section without clipping or horizontal overflow. The remaining mobile/tablet capture review and full FAQ-section rendering validation are pending.

The live Link Previews tablet capture at `768×1024` retained the compact header, full breadcrumb, readable heading and description, side-by-side CTA pair, and two-column workflow-card layout without clipping or overflow. The live FAQ mobile capture at `375×812` retained the compact header, visible breadcrumb, readable H1 and supporting copy, stacked CTA pair, and start of the substantive FAQ section without clipping or overflow. Tablet and mobile responsive evidence is now complete for the two P4 routes; desktop evidence was confirmed on the live browser routes.

## Live metadata, schema, accessibility, and runtime evidence

The production DOM confirms that `/faq` has its expected title, description, canonical `https://mrcopy.pro/faq`, Open Graph URL, `WebPage`, `BreadcrumbList`, and `FAQPage`. It contains 13 visible accordion questions and 13 structured `Question` nodes in the same order. It also contains every required detailed destination: Clipboard Manager, Floating Bubble, Android Clipboard Access, Floating Bubble Permission, Link Previews, Shopping Links, Privacy & Security, Privacy, and Delete Account.

The production DOM confirms that `/features/link-previews` retains its expected title, description, canonical `https://mrcopy.pro/features/link-previews`, Open Graph URL, `WebPage`, `BreadcrumbList`, and `FAQPage`. It contains seven visible Link Previews FAQ questions and seven structured `Question` nodes in the same order. The page retains its Clipboard Manager, Privacy & Security, Privacy, Shopping Links, Delete Account, and new sitewide FAQ destinations.

The live-browser probe returned HTTP 200 for both routes. On each page, the first `Tab` focused **Skip to main content** and, after the existing focus transition, placed it visibly at `top: 16px`. The same run reported no console errors and no failed network requests. Neither captured production DOM contained a `noindex` marker.

## Final crawl and code validation

Direct live HTTP checks returned 200 for `/faq` and `/features/link-previews`. The live sitemap includes both canonical URLs, and `robots.txt` permits crawling and references `https://mrcopy.pro/sitemap.xml`. The final local validation completed with **47 tests passing across 6 files**, TypeScript with no errors, and a successful production build. The build retains the established non-blocking advisory that the shared main bundle exceeds 500 kB after minification; the FAQ route and Link Previews remain independently lazy-loaded page chunks.
