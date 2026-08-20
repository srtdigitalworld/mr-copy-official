# Mr. Copy P5 Semantic Audit and Optimization Map

**Audit scope:** All 15 canonical P0–P4 public routes at `https://mrcopy.pro`  
**Method:** Live DOM inventory, page-source link review, shared metadata/schema audit, existing Product Intelligence evidence, and prior P0–P4 implementation maps.[1]

## Audit conclusion before implementation

The current site already has a substantive, non-duplicative content architecture. There is **no case for creating a new page in P5**. The highest-value work is to strengthen parent-to-child discovery, reconcile three page-level consistency issues, and make structured-data coverage consistent for existing utility and legal routes. No routes should be deleted, redirected, consolidated, or expanded into mass content.

## Current site semantic map

| Page | Primary entity | Search intent | Supporting entities | Existing link role | Metadata and schema status |
| --- | --- | --- | --- | --- | --- |
| `/` | Mr. Copy Android application | Product discovery | Clipboard, Floating Bubble, public links, local storage | Parent hub to Features and Privacy | Unique metadata; `WebSite`, `SoftwareApplication`, `WebPage` |
| `/features` | Mr. Copy feature ecosystem | Feature exploration | Clipboard Manager, Floating Bubble, Link Previews, Shopping Links, Privacy & Security | Feature hub to all deep feature/use-case nodes | Unique metadata; `WebPage`; no breadcrumb needed for hub |
| `/features/clipboard-manager` | Clipboard Manager | How to save and organize copied text/URLs | Folders, Recent, Starred, pins, Trash, limits | Connects to Floating Bubble and Privacy | Unique metadata; `WebPage`, `BreadcrumbList` |
| `/features/floating-bubble` | Floating Bubble | Quick-access workflow and requirements | Recent, Starred, overlay permission, Android restrictions | Strong feature-to-help cluster | Unique metadata; `WebPage`, `BreadcrumbList` |
| `/features/link-previews` | `UrlPreview` | Public-link reference workflow | Available metadata, public sources, Maps, shopping, local storage | Strong feature-to-use-case, privacy, and FAQ cluster | Unique metadata; `WebPage`, `BreadcrumbList`, `FAQPage` |
| `/features/privacy-security` | Local encrypted Android library | Product trust and data boundary | AES-256 GCM, Android Keystore, account separation | Connects to Privacy, Link Previews, Delete Account | Unique metadata; `WebPage`, `BreadcrumbList` |
| `/use-cases/shopping-links` | Shopping-link reference | Product-link reference use case | Public store support, available attributes, source limits | Connects to Link Previews, Clipboard Manager, privacy | Unique metadata; `WebPage`, `BreadcrumbList` |
| `/help/floating-bubble-permission` | Android overlay permission | Permission setup and control | Display over other apps, disable path, recent/starred content | Connects to Floating Bubble and Android help | Unique metadata; `WebPage`, `BreadcrumbList` |
| `/help/android-clipboard-access` | Android clipboard access boundary | Android 13+ troubleshooting | Foreground interaction, bubble tap, local reuse | Connects to Floating Bubble and permission help | Unique metadata; `WebPage`, `BreadcrumbList` |
| `/faq` | Mr. Copy support questions | Cross-ecosystem informational support | Feature, link, privacy, account, and Android questions | Answer-level hub to all detailed P1–P3 routes | Unique metadata; `WebPage`, `BreadcrumbList`, `FAQPage` with visible parity |
| `/pricing` | Availability and commercial-status boundary | Commercial-information lookup | Google Play billing boundary, account data | Connects to Privacy | Unique metadata; `WebPage`; commercial terms deliberately withheld |
| `/privacy` | Privacy policy | Legal data-handling information | Local data, public requests, Firebase account data, deletion | Connects to Delete Account | Unique metadata; `WebPage` |
| `/terms` | Terms of Use | Legal use and limitation information | Public references, account responsibility, billing boundary | Footer-only legal endpoint | Unique metadata; no `WebPage` schema; copy consistency issues identified below |
| `/delete-account` | Account-deletion flow | Account-control action | Firebase identity, Firestore record, local-data limit, Google Play separation | Reached from Privacy, FAQ, Contact, footer | Unique metadata; no `WebPage` schema |
| `/contact` | Official support and developer contact | Support navigation | Email, developer identity, account-deletion path | Header/footer endpoint | Unique metadata; no `WebPage` schema |

## Entity coverage and relationship assessment

| Verified entity | Current coverage | Important attributes currently covered | P5 decision |
| --- | --- | --- | --- |
| Clipboard Manager | Homepage, Features, detailed page, FAQ | Text/URL scope, folders, pins, 500 Recent non-pinned items, 30-day Trash recovery | Add one contextual Android-access help link where background limits are already explained. |
| Floating Bubble | Homepage, Features, detail, help, FAQ | Recent/Starred reuse, one-tap copy, user-controlled overlay, Android 13+ interaction | Already strong; retain current detail/help cluster without expansion. |
| Link Previews | Homepage, Features, detail, FAQ | Available metadata, public-source requests, social/Maps/shopping boundaries, fallback | Already strong; retain P4 FAQ relation and no per-platform pages. |
| Shopping Links | Homepage, Features, detail, FAQ | Eight named stores, available product fields, source-dependent results | Already coherent; add only a measured FAQ link if it creates a clear user exit. |
| Local encrypted storage | Homepage, Privacy, Privacy & Security, FAQ | AES-256 GCM, Android Keystore-backed storage, local/cloud boundary | Add contextual Privacy → Privacy & Security and Privacy → Link Previews links. |
| Firebase account data and deletion | Privacy, Delete Account, FAQ, Contact | Identity/entitlement separation, verified deletion scope, local-device limit | Improve Contact’s stale “request-preparation” description; add `WebPage` schema. |
| Hashtag references | Homepage and Features as a supporting entity | Public-reference context only | No unique verified workflow or distinct intent requiring a new page. |

## Search-intent gaps, content-depth findings, and information gain

| Finding | Evidence | User-information gain | Recommendation | Priority |
| --- | --- | --- | --- | --- |
| Homepage names Floating Bubble, public-link, shopping/reference, and local-encryption entities but routes only to broad Features or Privacy | Current Home internal links are `/features` and `/privacy` | Lets a user follow the specific entity already named in the relevant section | Add three contextual deep links: Floating Bubble, Link Previews, and Privacy & Security. | High |
| Clipboard Manager explains Android background restrictions but only links to Floating Bubble and Privacy | The relevant answer already exists on Android Clipboard Access | Converts a limitation into a practical support path | Add a descriptive Android Clipboard Access link beside the existing limitation. | High |
| Privacy explains encrypted local storage and public URL requests but links only to Delete Account | Detailed pages exist for both product-level boundaries | Connects legal-policy statements to concise implementation explanations without repeating text | Add descriptive links to Privacy & Security and Link Previews. | High |
| FAQ is a detailed answer hub but remains absent from shared footer discovery | It is currently reached through Link Previews and answer-level paths | Makes the P4 support hub reachable from every canonical page without adding header clutter | Add a single Footer “FAQ” link. | Medium |
| Terms states that an official support contact “should be configured,” although Contact exposes the verified address | `siteConfig.supportEmail` is configured and Contact is live | Removes false launch-state language and gives users a direct support path | Replace with the verified mailto contact and add a Contact link. | High |
| Terms states “Current paid access is offered” while Pricing deliberately withholds all commercial terms | This conflicts with the commercial-information firewall | Prevents an unconfirmed commercial state from being presented as current | Replace with a neutral Google Play billing boundary and direct users to Pricing only when terms are confirmed. | High |
| Contact calls the verified deletion flow a “request-preparation page” that is not automatically completed | Delete Account now performs confirmed deletion after verified authentication | Aligns support guidance with the actual protected workflow without overstating it | Rename/rewrite the card to describe the secure verified deletion flow accurately. | High |
| Terms, Contact, and Delete Account have metadata but no JSON-LD `WebPage` | Live DOM schema audit | Makes route-level metadata and structured data consistent with P0–P4 public routes | Add evidence-backed `WebPage` schema to these existing pages; keep FAQ schema limited to visible FAQs. | Medium |

## Internal-linking map: selected P5 additions

| Source | Proposed descriptive anchor | Destination | Semantic relationship |
| --- | --- | --- | --- |
| Homepage | “See how the Floating Bubble helps you reuse saved content” | `/features/floating-bubble` | Product overview → quick-access feature |
| Homepage | “Explore saved public-link previews and source limits” | `/features/link-previews` | Product overview → link intelligence |
| Homepage | “See how encrypted local storage and account data are separated” | `/features/privacy-security` | Product overview → trust implementation |
| Clipboard Manager | “Understand Android clipboard-access limitations” | `/help/android-clipboard-access` | Core workflow → Android support |
| Privacy | “See encrypted local storage and account data explained” | `/features/privacy-security` | Legal policy → product trust implementation |
| Privacy | “See public-link previews and source limits” | `/features/link-previews` | Legal policy → public-request workflow |
| Footer | “FAQ” | `/faq` | Sitewide discovery → answer hub |
| Terms | “Contact Mr. Copy support” | `/contact` | Legal/support endpoint → verified support path |
| Terms | “Review current availability information” | `/pricing` | Billing boundary → controlled commercial-status page |

## Consolidation and competition findings

No consolidation is recommended. Privacy & Security and Privacy serve distinct product-trust and legal-policy intents. Floating Bubble, Floating Bubble Permission, and Android Clipboard Access serve distinct feature, permission, and operating-system limitation intents. The sitewide FAQ and Link Previews FAQ serve different scopes. The detailed P2 public-link route remains appropriately consolidated; no YouTube, Instagram, Facebook, Maps, or shopping keyword-variation page should be created.

## Metadata and schema review

The live audit found self-referential canonical URLs, route-specific titles/descriptions, Open Graph tags, one H1, and no `noindex` marker across every canonical page. Existing P0–P4 feature, use-case, help, FAQ, and major policy pages use `WebPage` schema; only Terms, Contact, and Delete Account lack a page-level JSON-LD node. P5 should correct that consistency gap only. No additional breadcrumbs are justified for the legal, account-action, or contact endpoints because they do not belong to an existing visible hierarchy; adding invented parent labels would be less truthful than retaining their current simple routes.

## Accuracy firewall and deferred work

P5 must not introduce commercial values, trial language, a Google Play URL, cloud clipboard synchronization, non-Android platforms, private-source access, downloader/scraper claims, unsupported automation, or security guarantees. The site will not add a new page, blog post, comparison, redirect, or mass content during P5. The only changes selected are evidence-backed improvements to existing pages and existing structured data.

## Reference

[1]: ./mr-copy-semantic-seo-blueprint.md "Mr. Copy Semantic SEO Blueprint"
