# Mr. Copy P3 Semantic SEO Completion Report

**Release:** P3.1 Shopping Links, P3.2 Floating Bubble Permission, and P3.3 Android Clipboard Access  
**Production domain:** `https://mrcopy.pro`  
**Published implementation checkpoint:** `48432f5a`  
**Status:** Completed and validated in production

## Approved scope and stopping point

P3 implements the three approved substantive pages in the required order: a shopping-link use case, a Floating Bubble permission guide, and an Android clipboard-access guide. The work follows the verified Product Intelligence evidence and the Semantic SEO Blueprint’s entity, intent, and claims-boundary requirements.[1]

> **P4 has not been started.** The `/faq` route was intentionally not created or added to the sitemap in this release.

| Sequence | Page created | Production URL | Primary entity | Search intent |
| --- | --- | --- | --- | --- |
| P3.1 | Shopping Links | [`/use-cases/shopping-links`](https://mrcopy.pro/use-cases/shopping-links) | `ECommerceProduct` and `UrlPreview` | Problem-solving: save supported shopping links as useful local references |
| P3.2 | Floating Bubble Permission | [`/help/floating-bubble-permission`](https://mrcopy.pro/help/floating-bubble-permission) | Android overlay permission / `SYSTEM_ALERT_WINDOW` | Informational support: understand and control Display over other apps |
| P3.3 | Android Clipboard Access | [`/help/android-clipboard-access`](https://mrcopy.pro/help/android-clipboard-access) | `ClipboardReaderActivity` and Android clipboard-access limitation | Informational support: understand Android 13+ foreground-interaction behavior |

## P3.1 — Shopping Links

The Shopping Links page explains a narrow, evidence-backed use case: saving a supported public product URL as a local reference that can retain available source details. It documents the Android Share Sheet entry point, product title, brand, specifications, price or MRP, image, and rating detail **when available**. It names only the eight verified supported platforms: Amazon India, Flipkart, Myntra, Meesho, Nykaa, TataCliq, JioMart, and Shopsy.

The page answers the implicit questions of which shopping links are supported, what can be retained with a link, and why a source may return incomplete information. Its natural-question coverage includes *Which shopping links can Mr. Copy recognize?*, *How can I save shopping links with price on Android?*, and *Can I organize Amazon and Flipkart product links?* It connects Link Previews, Clipboard Manager, Privacy & Security, and the full Privacy policy using descriptive anchors.

The page expressly excludes affiliate, marketplace, checkout, purchase, live-price, live-stock, review, product-comparison, downloader, and cloud-sync positioning. It explains that the page is a local reference workflow rather than a guarantee of current price, stock, ratings, or availability.

## P3.2 — Floating Bubble Permission

The Floating Bubble Permission page explains why Android requires **Display over other apps** before Mr. Copy can render the Floating Bubble above another app. It covers the purpose of the overlay, a device-variable settings path, the owner’s choice to enable it, what the bubble can surface, how to disable it, and bounded troubleshooting. The wording avoids inventing a device-specific Android settings sequence.

Its IQQI coverage answers why the permission is required, what it enables, whether it can be disabled, and what it does not permit. Its K2Q coverage answers *Why does the Floating Bubble need permission to display over other apps?* and *How do I enable the Mr. Copy Floating Bubble on Android?* The page links to Floating Bubble, Android Clipboard Access, Clipboard Manager, Privacy & Security, and Privacy.

The permission is accurately limited to an overlay for saved Recent and Starred content. The page explicitly says that the permission does not grant access to another app’s private information and does not bypass Android privacy protections or promise uninterrupted background clipboard access.

## P3.3 — Android Clipboard Access

The Android Clipboard Access page explains Android’s background clipboard-access protections in user language. It describes the verified Android 13+ behavior: tapping Mr. Copy’s Floating Bubble can bring the required foreground interaction into focus before reading pending clipboard content. It distinguishes that interaction from a workaround or bypass, retains the supported text-and-URL scope, and explains how saved local Recent and Starred items can still be reused.

Its IQQI coverage answers why a bubble tap can be required on Android 13+, whether Mr. Copy bypasses Android protections, and what to do when a new item is not immediately available. Its K2Q coverage answers *How does clipboard access work on Android 13 and later?*, *Why does a clipboard bubble need a tap?*, and *What are Android clipboard manager limitations?* Contextual links connect Floating Bubble, Floating Bubble Permission, Clipboard Manager, Privacy & Security, and Privacy.

The page excludes promises of automatic background capture, access to private app data, privacy bypass, image/audio/file capture, cloud synchronization, cross-platform support, and automatic sensitive-data masking.

## Internal-link relationships

The new pages form a descriptive support and use-case cluster rather than a set of isolated landing pages.

| Source | Descriptive destination relationship |
| --- | --- |
| Features hub | Adds a contextual Shopping References link to Shopping Links |
| Link Previews | Adds a contextual link to Shopping Links |
| Floating Bubble | Adds contextual links to Display over other apps help and Android clipboard-access help |
| Floating Bubble Permission | Links to Floating Bubble, Android Clipboard Access, Clipboard Manager, Privacy & Security, and Privacy |
| Android Clipboard Access | Links to Floating Bubble, Floating Bubble Permission, Clipboard Manager, Privacy & Security, and Privacy |
| Shopping Links | Links to Link Previews, Clipboard Manager, Privacy & Security, and Privacy |

No future or nonexistent destination is linked. The deferred FAQ page is not referenced as an active route.

## Metadata and structured data

Each new route uses `usePageMeta` to publish a unique title, description, self-referential `mrcopy.pro` canonical, Open Graph title/description/URL/type, and Twitter metadata. The shared `p3Schemas` utility emits a visible-content-backed `WebPage` and a truthful three-level `BreadcrumbList` that reflects the visible parent context.

| Route | Live title | Canonical | JSON-LD |
| --- | --- | --- | --- |
| Shopping Links | `Save Shopping Links and Product Details on Android \| Mr. Copy` | `https://mrcopy.pro/use-cases/shopping-links` | `WebPage`, `BreadcrumbList` |
| Floating Bubble Permission | `Enable Floating Bubble Permission on Android \| Mr. Copy` | `https://mrcopy.pro/help/floating-bubble-permission` | `WebPage`, `BreadcrumbList` |
| Android Clipboard Access | `How Clipboard Access Works on Android \| Mr. Copy` | `https://mrcopy.pro/help/android-clipboard-access` | `WebPage`, `BreadcrumbList` |

No `Product` schema was used for third-party shopping pages, and no `FAQPage` schema was used because no FAQ route was approved or published.[1]

## Sitemap and files

`client/public/sitemap.xml` now includes the three new canonical production URLs. `robots.txt` remains crawlable and continues to reference the canonical sitemap. The live sitemap does not include the deferred `/faq` URL.

| File | Change |
| --- | --- |
| `client/src/pages/ShoppingLinks.tsx` | New P3.1 substantive shopping-reference use case |
| `client/src/pages/FloatingBubblePermission.tsx` | New P3.2 overlay-permission support page |
| `client/src/pages/AndroidClipboardAccess.tsx` | New P3.3 Android clipboard-access support page |
| `client/src/lib/seo.ts` | Added shared P3 route schema support and three P3 schemas |
| `client/src/App.tsx` | Registered three new lazy-loaded public routes |
| `client/src/pages/Features.tsx` | Added contextual Shopping References destination |
| `client/src/pages/LinkPreviews.tsx` | Added Shopping Links contextual destination |
| `client/src/pages/FloatingBubble.tsx` | Added both new support-page destinations |
| `client/src/pages/FloatingBubblePermission.tsx` | Links Android Clipboard Access after it became an existing route |
| `client/public/sitemap.xml` | Added all three P3 canonical URLs |
| `client/src/lib/seo.test.ts` | Replaced obsolete deferred-route checks with P3.1–P3.3 positive metadata, schema, sitemap, link, and claims-firewall coverage |
| `docs/p3-semantic-seo-implementation-map.md` | Evidence, entities, intent, IQQI/K2Q, link, and claims map |
| `docs/p3-production-qa-notes.md` | Live production verification record |

## Verified claims and excluded claims

| Topic | Verified claims published | Excluded claims |
| --- | --- | --- |
| Shopping Links | Eight named public stores; available product-reference fields; Android Share Sheet; local folders; source-dependent partial results | Affiliate, checkout, marketplace, purchase, live price/stock, review, comparison, guarantee, downloader, cloud sync |
| Bubble Permission | Display over other apps purpose; user-controlled enable/disable; overlay for saved Recent/Starred content; device-variable settings labels | Private-app-data access, surveillance, permission bypass, continuous background access, cross-platform claims |
| Clipboard Access | Android restrictions; Android 13+ foreground-interaction behavior; optional overlay; saved local references; text-and-URL scope | Android-privacy bypass, every-state capture, image/audio/file capture, cloud sync, secret masking, iOS/desktop support |

## Validation results

| Validation area | Result |
| --- | --- |
| Cloudflare Workers build | Successful |
| Live P3 routes | All three routes returned HTTP 200 |
| Canonical, metadata, Open Graph, Twitter | Present and route-specific in live DOM |
| Structured data | Live `WebPage` and `BreadcrumbList` payloads confirmed for every route |
| Sitemap, robots, and indexability | Three canonical URLs present; `robots.txt` names sitemap; no rendered `noindex` marker |
| Heading and content hierarchy | One H1 per page followed by substantive H2 sections |
| Desktop responsive QA | Passed on all three live production routes |
| Tablet responsive QA | Passed on live `768×1024` captures for all three routes |
| Mobile responsive QA | Passed on live `375×812` captures for all three routes |
| Accessibility QA | Visible breadcrumbs, descriptive links, semantic heading order, shared `main` landmark, and first-`Tab` skip link at `top: 16px` confirmed live |
| Console and network QA | Live browser probe recorded zero console errors and zero failed network requests across all three routes |
| Regression tests | 40 passing tests across 6 files |
| TypeScript | Passed with no errors |
| Production build | Passed; P3 pages emitted as independently lazy-loaded chunks |

The build preserves the existing non-blocking advisory that the shared main bundle exceeds 500 kB after minification. The new P3 chunks are separately lazy loaded; this advisory was not introduced by the P3 pages.

## Remaining opportunities

The Google Play Store URL and all public price, plan, trial, currency, eligibility, date, and entitlement-benefit terms remain deliberately unconfirmed and unpublished. The substantive FAQ route, platform-specific FAQ additions within Link Previews, and any later workflow-article work remain deferred. **P4 has not been started and requires explicit owner approval.**

## Reference

[1]: ./mr-copy-semantic-seo-blueprint.md "Mr. Copy Semantic SEO Blueprint"
