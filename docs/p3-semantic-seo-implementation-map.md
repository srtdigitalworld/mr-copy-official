# Mr. Copy P3 Semantic SEO Implementation Map

## Approved stopping point

This P3 release contains only the three owner-approved, substantive routes below, in order. The separate `/faq` route and all P4 work remain out of scope until separately approved.

| Sequence | Route | Page type | Primary entity | Search intent |
| --- | --- | --- | --- | --- |
| P3.1 | `/use-cases/shopping-links` | Use-case page | `ECommerceProduct` | Problem-solving: save shopping links with price on Android |
| P3.2 | `/help/floating-bubble-permission` | Support page | Android overlay permission / `SYSTEM_ALERT_WINDOW` | Informational support: enable Display over other apps for Mr. Copy |
| P3.3 | `/help/android-clipboard-access` | Support page | `ClipboardReaderActivity` and Android clipboard limitation | Informational support: Android 13 clipboard-access behavior |

## P3.1 — Shopping Links

| Area | Evidence-bound implementation |
| --- | --- |
| Immediate answer | Mr. Copy can save supported public shopping links and, when source-page data is available, preserve product-reference details such as title, price or MRP, rating, brand, image, and specifications in the local reference library. |
| Entities and attributes | `ECommerceProduct`, `UrlPreview`, public product URL, title, price/MRP, rating, brand, image, specifications, local folder, Android Share Sheet. |
| IQQI coverage | Which shopping links are supported? What product details can stay with a saved link? Why might product information be incomplete? |
| K2Q coverage | Which shopping links can Mr. Copy recognize? How can I save shopping links with price on Android? Can I organize Amazon and Flipkart product links? |
| Required internal links | Link Previews, Clipboard Manager, Privacy. The future FAQ destination is intentionally not linked until it exists. |
| Required limits | List only Amazon India, Flipkart, Myntra, Meesho, Nykaa, TataCliq, JioMart, and Shopsy. Use “when available”; disclose public-source limitations and local storage. |
| Excluded claims | No affiliate, marketplace, checkout, purchase, live-price, live-stock, review, comparison, guarantee, downloader, or cloud-sync claim. |

## P3.2 — Floating Bubble Permission

| Area | Evidence-bound implementation |
| --- | --- |
| Immediate answer | The Floating Bubble needs Android’s Display over other apps permission so Mr. Copy can render its overlay over the app currently on screen. The device owner chooses whether to grant or revoke it in Android settings. |
| Entities and attributes | `SYSTEM_ALERT_WINDOW`, `OverlayService`, Floating Bubble, Android system settings, foreground service, Recent, Starred, one-tap copy. |
| IQQI coverage | Why does the bubble need Display over other apps? What does that permission enable? Can I turn it off again? |
| K2Q coverage | Why does the Floating Bubble need permission to display over other apps? How do I enable the Mr. Copy Floating Bubble on Android? |
| Required internal links | Floating Bubble, Privacy & Security, Android Clipboard Access once it exists. The future FAQ destination is intentionally not linked until it exists. |
| Required limits | Explain that the overlay is for a panel of saved local content and does not grant access to another app’s private data. Provide a clear disable path and bounded troubleshooting language. |
| Excluded claims | No private-app access, surveillance, permission bypass, automatic capture in every Android state, or uninterrupted background clipboard access. |

## P3.3 — Android Clipboard Access

| Area | Evidence-bound implementation |
| --- | --- |
| Immediate answer | Android system protections can restrict clipboard access while an app is in the background. On Android 13 and later, tapping Mr. Copy’s Floating Bubble can bring the required foreground interaction into focus before reading pending clipboard content. |
| Entities and attributes | `ClipboardReaderActivity`, Android 13+, Floating Bubble tap, foreground focus interaction, pending clipboard content, supported text and URLs, user controls. |
| IQQI coverage | Why might I need to tap the bubble on Android 13+? Does Mr. Copy bypass Android clipboard protections? What can I do when a copied item is not immediately available? |
| K2Q coverage | How does clipboard access work on Android 13 and later? Why does a clipboard bubble need a tap? What are Android clipboard manager limitations? |
| Required internal links | Floating Bubble, Floating Bubble Permission, Clipboard Manager, Privacy & Security. The future FAQ destination is intentionally not linked until it exists. |
| Required limits | Explain Android’s restriction in user language and distinguish a foreground interaction from a workaround or bypass. Keep capture scope to supported copied text and URLs. |
| Excluded claims | No bypass of Android privacy protections, no every-version/background guarantee, no image/audio/file clipboard capture, no cloud sync, and no secret masking claim. |

## Shared release requirements

Each page will use the existing page shell, visible breadcrumb, `usePageMeta` hook, route-specific `WebPage` plus truthful `BreadcrumbList` JSON-LD, canonical `https://mrcopy.pro` URL, Open Graph metadata, a substantive sitemap entry, descriptive existing-route links, semantic heading order, and regression coverage. All content is constrained to the owner-supplied Product Intelligence evidence summarized in the Semantic SEO Blueprint.
