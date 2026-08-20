# Mr. Copy — Semantic SEO Website Blueprint

**Status:** Implementation blueprint; no website code or product copy is changed by this document.  
**Canonical domain:** `https://mrcopy.pro`  
**Primary factual source:** *Product Intelligence & Semantic Knowledge Extraction Report: Mr. Copy* (the **PI Report**), supplied by the owner on 20 August 2026.  
**SEO implementation references:** Google Search Central guidance on sitemaps, canonical URLs, and structured data.[2] [3] [4]

> **Evidence rule:** Every product statement in this blueprint must be traceable to the PI Report. Query wording below is an intent hypothesis for content planning, **not** a keyword-volume claim. Do not publish a feature, platform, price, or security claim until it is both code-backed and visible on the relevant page.

## 1. Executive Semantic SEO Strategy

Mr. Copy should own the category position of an **Android, offline-first clipboard manager and structured link organizer**. Its differentiator is not merely clipboard history: it captures text and URLs, organizes content locally, enables quick retrieval through a floating Android overlay, and enriches supported public links into useful structured information. The website must explain this through a small set of clear topic clusters rather than attempting to rank individual pages for every social network or shopping platform.

The primary conversion path is **problem → verified capability → privacy boundary → Android setup/compatibility → Google Play CTA**. The trust path is equally important: saved clipboard content, folders, and previews remain local and encrypted; Firebase is used for identity and entitlement metadata, not for cloud backup of clips.[1]

| Strategic decision | Recommendation | Reason grounded in evidence |
|---|---|---|
| Core entity | **Android clipboard manager** | Clipboard capture, history, folders, search, Trash, overlay quick copy, and local storage are central code-backed functions.[1] |
| Differentiating entity | **Floating clipboard overlay / floating bubble** | A native Android foreground overlay exposes Recent and Starred items above other apps, subject to the system overlay permission.[1] |
| Supporting entity | **Link preview and link organization** | A six-stage metadata pipeline enriches URLs and has dedicated handling for YouTube, Instagram, Facebook, Google Maps, and eight Indian commerce platforms.[1] |
| Trust entity | **Local encrypted clipboard storage** | Hive storage uses AES-256 GCM; keys are protected through Android Keystore-backed secure storage.[1] |
| Geographic/platform scope | **Android; India-relevant shopping links** | The product is Android-only and includes eight India-focused commerce platforms. Do not claim iOS, desktop, or generic cross-device support.[1] |
| Content model | One pillar homepage, one feature hub, 4–6 feature/use-case pages, support/FAQ pages, and carefully bounded informational content | The product has meaningful functional groups, but individual “Instagram downloader” or “Facebook scraper” pages would overstate the product and create policy/relevance risk. |

### Core editorial position

Use practical, user-first language such as **“save copied text,” “organize links,” “copy again without switching apps,”** and **“keep saved items local to your Android device.”** Explain limitations where they matter: the floating bubble needs Android’s “Display over other apps” permission; modern Android clipboard restrictions can require a user bubble tap; public-link previews may be partial when the source website blocks access or requires login.[1]

## 2. Verified Product Semantic Model

### 2.1 Entity classes

| Class | Verified entities | Role on the website |
|---|---|---|
| Primary entity | Mr. Copy | The Android application being evaluated, installed, and used. |
| Core product entities | Clipboard content, `ContentItem`, folders, Recent, Starred, pinned items, Trash | Explain capture, organization, retrieval, and deletion. |
| Quick-access entities | Floating Bubble, floating panel, `OverlayService`, `ClipboardReaderActivity` | Explain on-screen access, Android compatibility, and permissions. |
| Link-intelligence entities | `UrlPreview`, URL metadata, YouTube URL, Instagram URL, Facebook URL, Google Maps URL | Explain supported public-link enrichment without framing it as downloading or private-account access. |
| Commerce entities | `ECommerceProduct`, price, MRP, rating, brand, availability, supported shopping platform | Explain why saved product links can become more useful reference cards. |
| Privacy/security entities | AES-256 GCM, Android Keystore, encrypted Hive storage, root detection, account deletion | Explain local data boundaries and account controls. |
| Account entities | Google Sign-In, Firebase Authentication, `UserProfile`, plan, trial, subscription | Explain account identity and entitlement boundaries only. |
| Platform entities | Android, Android Share Sheet, Google Play Billing | Define supported platform and integration context. |

### 2.2 Verified relationship triples

| Entity | Predicate | Entity / value | Publishing implication |
|---|---|---|---|
| Mr. Copy | captures | system clipboard text and URLs | Use “copied text and links,” not images or files. |
| Clipboard content | becomes | a classified `ContentItem` | Explain automatic organization by content type where useful. |
| `ContentItem` | is stored in | encrypted local Hive storage | Core trust statement. |
| `ContentItem` | can belong to | a folder hierarchy | Supports organization and use-case pages. |
| `ContentItem` | can contain | `UrlPreview` | Links can be explained as richer saved references. |
| `UrlPreview` | is resolved by | staged metadata retrieval | Describe results, not implementation jargon, on marketing pages. |
| Floating Bubble | provides | quick access to Recent and Starred items | Core differentiator for `/features/floating-bubble`. |
| Floating Bubble | requires | Android overlay permission | Must be disclosed near the feature CTA. |
| Google Maps link | can yield | place, address, coordinates, route fields | Support under the public-link intelligence section. |
| Supported shopping link | can yield | normalized product reference data | Do not promise results when target sites block access. |
| Saved clips and folders | remain | on the local device | Core privacy boundary. |
| Firebase / Firestore | stores | identity and entitlement metadata | Do not label it as content sync or cloud clipboard. |
| Account deletion | removes | account profile/authentication data and local app data | Link to the existing deletion and privacy pages. |
| Google Play Billing | supports | the Basic subscription product | Present price/trial only when live and verified for the public release. |

### 2.3 Attribute model and claimable values

| Entity | Claimable attributes | Do not infer |
|---|---|---|
| Clipboard history | text/URL capture; Recent; Starred; folders; Trash; duplicate checking; 500 non-pinned Recent-item limit | Unlimited history; image/file capture; password masking. |
| Floating Bubble | draggable overlay; Recent/Starred panel; one-tap copy; edge collapse | Works without permission; unrestricted Android background capture. |
| URL previews | title, description, image, domain, author/date when available, hashtags, status | Guaranteed extraction for every URL; content behind a login wall. |
| Commerce parsing | supported stores; title, price/MRP, rating and product detail fields when available | Live price accuracy; price comparison engine; shopping transaction capability. |
| Security | AES-256 GCM encrypted local Hive boxes; Android Keystore-backed keys; root/integrity checks | Absolute protection, certified compliance, automatic secret masking. |
| Privacy | clips/folders/previews are not cloud-synced; profile/entitlement metadata is separate | “No network requests whatsoever”; URL previews can request public target-page metadata. |
| Plans | Basic subscription product, target ₹49/month, 3-calendar-day trial eligibility dated 29 August 2026 | A currently active offer before public launch/date confirmation; other plan benefits not visibly verified. |

### 2.4 User problems, users, use cases, workflows

| User type / situation | User problem | Verified outcome Mr. Copy can support | Best website home |
|---|---|---|---|
| Multi-app Android user | Copied snippets are overwritten | Save copied text/links into a local history for later reuse | Homepage + Clipboard Manager page |
| Form-filling or messaging user | Repeatedly switching apps to reuse text is slow | Open a floating panel and copy saved Recent/Starred content | Floating Bubble page |
| Research/link collector | URLs are hard to recognize later | Save links with available title, description, images, and platform metadata | Link Previews page |
| Shopper saving products | Product links lose context | Retain supported product references with available product details | Shopping Links use-case page |
| Privacy-conscious user | Clipboard content can be sensitive | Understand local encrypted storage and account-data separation | Privacy & Security page |
| Android 13+ user | Clipboard access has system restrictions | Learn the bubble-tap interaction and permission limits | Android clipboard access support article |

## 3. Website Entity Graph

```text
Mr. Copy (Android clipboard manager)
│
├── captures → copied text and public URLs
│   ├── organizes → Recent / Starred / folders / pinned items / Trash
│   └── enriches → supported URL previews
│       ├── supports → YouTube / Instagram / Facebook / Google Maps
│       └── supports → Amazon India / Flipkart / Myntra / Meesho / Nykaa /
│                     TataCliq / JioMart / Shopsy
│
├── enables quick access → Floating Bubble
│   └── requires → Android overlay permission
│
├── protects local content → AES-256 GCM encrypted local storage
│   └── key protection → Android Keystore-backed secure storage
│
└── separates account data → Google Sign-In + Firebase profile/entitlement metadata
    └── does not provide → cloud clipboard or multi-device clip sync
```

### Entity coverage allocation

| Entity group | Homepage | Feature hub | Dedicated page | FAQ / support | Informational content |
|---|---:|---:|---:|---:|---:|
| Android clipboard management | Yes | Yes | Yes | Yes | Limited |
| Floating Bubble | Summary | Yes | Yes | Yes | Limited |
| Folders, Starred, Trash | Summary | Yes | Group with clipboard management | Yes | No separate article initially |
| URL metadata / link organization | Summary | Yes | Yes | Yes | Limited |
| Social and Maps public-link handling | Mention as supported links | Yes | Grouped page only | Yes | Only bounded how-to content |
| E-commerce link references | Mention | Yes | Use-case page | Yes | Limited |
| Local encryption/privacy | Summary | Yes | Yes / existing Privacy page | Yes | No generic “encryption” blog cluster |
| Account deletion | Link | No | Existing Delete Account page | Yes | No |
| Billing/trial | CTA | No | Existing Pricing page | Yes | No until offer status is confirmed |

## 4. Search Intent Map

| Major topic | Primary intent | Primary query framing | Secondary query framing | User problem | Verified capability / outcome |
|---|---|---|---|---|---|
| Android clipboard manager | Commercial investigation / problem-solving | “Android clipboard manager” | “save copied text on Android”; “clipboard history app Android” | Copied text is overwritten | Captures copied text/URLs; stores items locally; organizes with folders, Starred, and Trash. |
| Floating clipboard access | Problem-solving / product evaluation | “floating clipboard Android” | “copy saved text over other apps”; “clipboard bubble Android” | App switching to reuse text | Floating Bubble panel surfaces Recent/Starred items and supports one-tap copy. |
| Clipboard privacy | Informational / product evaluation | “encrypted clipboard manager Android” | “local clipboard storage Android”; “clipboard history privacy” | Sensitive copied data needs better handling | AES-256 GCM local storage and Android Keystore-backed key protection. |
| Link organization | Problem-solving / commercial investigation | “save links with preview Android” | “organize copied links Android”; “link metadata app Android” | Raw URLs lack context | URL preview pipeline provides available metadata and images for supported public pages. |
| Shopping link saving | Problem-solving | “save shopping links with price Android” | “organize Amazon Flipkart product links”; “product link organizer Android” | Saved product URLs lose product context | Supported commerce extractors normalize available product details from eight listed platforms. |
| Share to clipboard manager | Navigational / problem-solving | “share link to clipboard manager Android” | “save shared text Android”; “Android share sheet link organizer” | Need to save content directly from another app | Android Share Sheet `ACTION_SEND` receiver accepts text and URLs. |
| Android 13 clipboard access | Informational / support | “Android 13 clipboard manager limitations” | “why clipboard bubble needs tap”; “clipboard permission Android” | Android restricts background clipboard access | Bubble-tap foreground focus fallback; disclose limitations clearly. |
| Account deletion | Navigational / trust | “delete Mr. Copy account” | “Mr. Copy privacy account deletion” | User needs an account removal path | Existing site flow verifies identity and removes account/profile data; local app wipe is app-side. |

### Search-intent guardrails

Do **not** target queries that imply downloading, bypassing authentication, private-profile access, surveillance, cloud synchronization, password management, or platform-affiliated services. Avoid pages titled “Instagram downloader,” “Facebook scraper,” “YouTube downloader,” or “cloud clipboard sync.” Those labels conflict with the PI Report’s verified limitations.[1]

## 5. IQQI Map — Questions Users Implicitly Need Answered

| Topic | Implicit question | Evidence-bound answer direction | Best placement |
|---|---|---|---|
| Clipboard history | What happens when I copy a new item? | Explain that supported copied text/URLs are saved as local content items rather than relying on a single clipboard slot. | Homepage + Clipboard page |
| Quick access | Can I reuse text without leaving the app I am using? | Explain the floating bubble’s Recent/Starred panel and one-tap copy. | Floating Bubble page |
| Setup | Why does the bubble need “Display over other apps”? | Explain that the Android overlay permission is required to render it over other apps. | Support FAQ |
| Android version | Why might I need to tap the bubble on Android 13+? | Explain Android background clipboard restrictions and the foreground focus interaction. | Support article |
| Links | Does every saved link get a preview? | State that available public-page metadata is resolved through fallbacks; login walls, private content, and blocking can produce partial results. | Link Previews page |
| Commerce | Which shopping links are supported? | List only the eight verified platforms and qualify product fields as “when available.” | Shopping Links page |
| Privacy | Are my copied clips uploaded to the cloud? | State that clips, folders, and previews stay local; account/entitlement metadata is separate. | Privacy page + FAQ |
| Encryption | How is locally stored content protected? | Describe AES-256 GCM encrypted storage and Android Keystore-backed key protection without absolute-security claims. | Privacy & Security page |
| Account | What is deleted if I remove my account? | Separate account identity/profile deletion from local app data behavior and Google Play subscription management. | Delete Account + FAQ |
| Subscription | Is the trial or plan available now? | Show only current, release-verified pricing/availability; do not publish a future-dated offer as active. | Pricing page |

## 6. K2Q Map — Concepts Converted to Natural Questions

| Concept | Natural question | Eligible page |
|---|---|---|
| Android clipboard manager | How can I save copied text and links on Android for later use? | `/features/clipboard-manager` |
| Floating Bubble | How can I copy a saved snippet while using another Android app? | `/features/floating-bubble` |
| Local storage | Does Mr. Copy upload my clipboard history to the cloud? | `/privacy` and `/faq` |
| Folder organization | How can I organize copied text, links, and references into folders? | `/features/clipboard-manager` |
| URL preview | What information can Mr. Copy show for a saved web link? | `/features/link-previews` |
| Public social links | Can Mr. Copy organize public YouTube, Instagram, and Facebook links? | `/features/link-previews` / FAQ |
| Shopping links | Which shopping links can Mr. Copy recognize? | `/use-cases/shopping-links` |
| Android permissions | Why does the floating bubble need permission to display over other apps? | `/help/floating-bubble-permission` |
| Android restrictions | How does clipboard access work on Android 13 and later? | `/help/android-clipboard-access` |
| Account removal | How do I delete my Mr. Copy account? | `/delete-account` |

## 7. Website Information Architecture

### 7.1 Recommended architecture

```text
Homepage  /
│
├── Features  /features
│   ├── Clipboard Manager  /features/clipboard-manager                 [PROPOSED]
│   ├── Floating Bubble  /features/floating-bubble                     [PROPOSED]
│   ├── Link Previews & Organization  /features/link-previews          [PROPOSED]
│   └── Local Privacy & Security  /features/privacy-security            [PROPOSED]
│
├── Use cases
│   ├── Organize Copied Text  /use-cases/organize-copied-text          [PROPOSED]
│   └── Save Shopping Links  /use-cases/shopping-links                 [PROPOSED]
│
├── Help
│   ├── Floating Bubble Permission  /help/floating-bubble-permission  [PROPOSED]
│   └── Android Clipboard Access  /help/android-clipboard-access      [PROPOSED]
│
├── Trust & account
│   ├── Privacy  /privacy                                              [EXISTS]
│   ├── Terms  /terms                                                  [EXISTS]
│   ├── Delete Account  /delete-account                                [EXISTS]
│   └── Contact  /contact                                              [EXISTS]
│
├── Commercial
│   └── Pricing  /pricing                                              [EXISTS; launch-gated]
│
└── FAQ  /faq                                                         [PROPOSED]
```

### 7.2 Page portfolio and prioritization

| Page | URL | Status | Primary entity | Intent | Primary query framing | Capability evidence | Information-gain opportunity | Priority |
|---|---|---|---|---|---|---|---|---|
| Home | `/` | Exists | Mr. Copy | Commercial investigation | Android clipboard manager | Clipboard capture, organization, overlay, local storage | Explain the complete product category in one accurate statement. | P0 |
| Features hub | `/features` | Exists | Mr. Copy feature set | Product evaluation | Mr. Copy features | All verified feature groups | Show grouped capability map without overwhelming the homepage. | P0 |
| Clipboard Manager | `/features/clipboard-manager` | **PROPOSED** | Clipboard history / `ContentItem` | Problem-solving | save copied text on Android | Capture, classification, folders, Starred, pins, Trash | Distinguish text/link history from a generic notes app. | P1 |
| Floating Bubble | `/features/floating-bubble` | **PROPOSED** | Floating Bubble | Problem-solving | floating clipboard Android | Native overlay, Recent/Starred panel, one-tap copy | Explain quick reuse and permission/Android-version realities. | P1 |
| Link Previews | `/features/link-previews` | **PROPOSED** | `UrlPreview` | Product evaluation | organize saved links Android | Six-stage preview pipeline; public platform support | Show what a useful saved link contains, plus graceful failure limits. | P1 |
| Privacy & Security | `/features/privacy-security` | **PROPOSED** | Local encryption and data boundary | Trust / evaluation | encrypted clipboard manager Android | AES-256 GCM, Keystore, local-only clips, root alerts | Explain exact data boundary; no unsupported compliance claims. | P1 |
| Organize copied text | `/use-cases/organize-copied-text` | **PROPOSED** | User workflow | Problem-solving | organize copied text Android | Folders, Starred, pinned items, Trash | Give a realistic workflow, not generic productivity promises. | P2 |
| Shopping links | `/use-cases/shopping-links` | **PROPOSED** | `ECommerceProduct` | Problem-solving | save shopping links with price Android | Eight supported commerce extractors | Explain reference-card outcome and target-site limitations. | P2 |
| Floating Bubble permission | `/help/floating-bubble-permission` | **PROPOSED** | Android overlay permission | Informational / support | display over other apps Mr. Copy | `SYSTEM_ALERT_WINDOW` requirement | Reduce setup friction and make permission use transparent. | P2 |
| Android clipboard access | `/help/android-clipboard-access` | **PROPOSED** | Android clipboard limitation | Informational / support | Android 13 clipboard manager | Bubble-tap foreground focus fallback | Explain platform limitation honestly, using non-technical language. | P2 |
| FAQ | `/faq` | **PROPOSED** | Product boundaries | Informational | Mr. Copy FAQ | Verified capability/limit inventory | Answer recurring permission, privacy, support, and account questions. | P2 |
| Pricing | `/pricing` | Exists | Subscription | Transactional / evaluation | Mr. Copy price | ₹49 target product and trial logic | Publish only current offer details that are verified for release. | P1 after public offer confirmation |
| Privacy | `/privacy` | Exists | Data processing | Trust / legal | Mr. Copy privacy | Local content vs. Firebase profile boundary | Make legal content match product data flow exactly. | P0 |
| Delete Account | `/delete-account` | Exists | Account deletion | Navigational | delete Mr. Copy account | Verified deletion flow | Maintain clear, visible ownership/deletion flow. | P0 |

### 7.3 Pages intentionally not proposed

Do not create standalone landing pages for each extractor (for example, `/instagram-downloader`, `/facebook-scraper`, `/youtube-downloader`, or `/cloud-sync`). They would encourage unsupported interpretations, create thin overlap, and conflict with the documented capabilities and limitations. Group supported public links under **Link Previews & Organization** and include platform-specific details only where they materially help users understand a supported workflow.

## 8. Topical Authority Map

| Cluster | Pillar | Supporting topics | Entities / attributes | Questions answered | Internal-link relationship |
|---|---|---|---|---|---|
| A. Android clipboard management | Clipboard Manager | folders, Starred, pinned items, Trash, share receiver | `ContentItem`, `ClipboardType`, folder, `isStarred`, `isPinned`, `isTrashed` | How are clips saved, organized, found, and removed? | Home → Clipboard Manager → Organize Copied Text → FAQ |
| B. Quick clipboard access | Floating Bubble | Recent/Starred panel, edge collapse, overlay permission, Android 13+ handling | Floating Bubble, `OverlayService`, `ClipboardReaderActivity` | How do I reuse text without switching apps? Why is permission needed? | Clipboard Manager → Floating Bubble → permission help → Android access help |
| C. Link intelligence | Link Previews & Organization | public social links, Maps information, Share Sheet | `UrlPreview`, title, image, author, hashtags, platform, status | What can a saved link contain? Why can a preview be partial? | Home → Link Previews → FAQ / Shopping Links |
| D. Shopping references | Save Shopping Links | eight supported stores, product fields, target-site restrictions | `ECommerceProduct`, price/MRP, rating, brand, availability | Which shopping links are supported and what can be saved? | Link Previews → Shopping Links → Privacy FAQ |
| E. Local privacy and account boundaries | Privacy & Security | encrypted Hive storage, Android Keystore, external metadata requests, profile metadata, deletion | AES-256 GCM, Keystore, Firebase profile, account deletion | Is clip content uploaded? What is encrypted? What is deleted? | Home → Privacy → Delete Account → FAQ |

## 9. Entity-to-Page Map

| Entity | Contextual home | Intent | Attributes to explain | Supporting entities |
|---|---|---|---|---|
| Mr. Copy | `/` | Product evaluation | Android-only, offline-first, clipboard and link organization | Clipboard history, Floating Bubble, privacy |
| `ContentItem` / clipboard history | `/features/clipboard-manager` | Problem-solving | text/link capture, folders, classification, Starred, pins, Trash | `ClipboardType`, folder, Recent |
| Floating Bubble | `/features/floating-bubble` | Problem-solving | overlay, quick panel, one-tap copy, edge collapse, permission | `OverlayService`, Android overlay permission |
| `ClipboardReaderActivity` | `/help/android-clipboard-access` | Informational | Android 13+ focus interaction, limitation | Floating Bubble |
| `UrlPreview` | `/features/link-previews` | Product evaluation | available title, image, description, author, hashtags, fallback status | YouTube, Instagram, Facebook, Maps |
| Google Maps URL | `/features/link-previews` + FAQ | Informational | place/address/coordinates/routes where present | `GoogleMapsUrlData` |
| `ECommerceProduct` | `/use-cases/shopping-links` | Problem-solving | supported stores, product fields, failure limits | `UrlPreview`, Commerce platform list |
| Local encrypted storage | `/features/privacy-security` and `/privacy` | Trust | AES-256 GCM, Keystore key protection, local boundary | Hive, `SecurityService` |
| Root/integrity checks | `/features/privacy-security` | Trust | warning-oriented root detection/signature checks | `SecurityBridge` |
| Google Sign-In / profile | `/privacy`, `/pricing`, `/delete-account` | Trust / navigational | identity and entitlement metadata only | Firebase Auth, `UserProfile` |
| Account deletion | `/delete-account` | Navigational | ownership, permanent account action, local-data distinction | Privacy, Google Play subscription management |
| Basic subscription | `/pricing` | Transactional | verified current price/availability only | Google Play Billing, trial state |

## 10. Homepage Semantic Architecture

### Page purpose

Establish Mr. Copy as an Android app for saving and reusing copied text, organizing links, and keeping saved content local. The homepage should not attempt to explain every supported platform or implementation detail.

| Element | Specification |
|---|---|
| Recommended H1 | **Android clipboard management for text, links, and useful references** |
| Core value proposition | Save copied text and public links, organize them locally, and reuse them quickly through Mr. Copy’s Android interface and Floating Bubble. |
| Primary entity | Mr. Copy, Android clipboard manager |
| Supporting entities | Clipboard history, folders, Floating Bubble, link previews, local encrypted storage |
| Primary CTA | **Get it on Google Play** |
| Secondary CTA | **Explore features** |
| Trust statement | Saved clips, folders, and previews stay on the device; account and entitlement metadata are separate. |

### Recommended visible sections

1. **Hero:** H1, Android-only descriptor, concise value statement, Google Play CTA, and the owner-provided real app screenshot.
2. **Capture and organize:** Explain copied text/URLs, folders, Starred items, pins, and Trash in user language.
3. **Quick access while using other apps:** Explain the Floating Bubble and link to its feature page; include the permission disclosure.
4. **Turn saved links into references:** Explain metadata/preview outcomes, named supported public platforms in a compact list, and a clear caveat about private/login-blocked pages.
5. **Keep saved content local:** Explain encrypted local storage, with a link to Privacy & Security and Privacy.
6. **Use-case cards:** “Reuse copied text,” “keep useful links,” and “save shopping references.”
7. **FAQ preview:** 4–5 concise questions; link to `/faq` once created.

### Homepage constraints

Do not call Mr. Copy a downloader, social-media scraper, password manager, cloud clipboard, multi-device sync tool, or iOS/desktop app. Do not use the phrase “always captures every clipboard item” without explaining Android system restrictions.

## 11. Feature Architecture

| Feature group | Recommended treatment | Page / section scope | Required limitation disclosure |
|---|---|---|---|
| Clipboard management | Dedicated feature page | Capture text/URLs, folder hierarchy, Starred, pin cap, Trash | Text/URLs only; Recent history and pinned-item caps; Android constraints apply. |
| Quick access | Dedicated feature page | Floating Bubble, panel, edge collapse, one-tap copy | Requires overlay permission; Android 13+ may require bubble interaction to read pending clipboard content. |
| Link intelligence | Dedicated feature page | URL metadata, public platform support, fallback status | Public metadata only; login walls, rate limits, and target-site blocking can produce partial results. |
| Shopping references | Use-case page, not a generic product-comparison page | Eight platform list, saved product-reference fields | Price/availability extraction is not guaranteed; no buying, checkout, or live-price guarantee. |
| Privacy/security | Dedicated trust feature page plus legal Privacy | Encryption at rest, Keystore, root/integrity alerts, local data boundary | Do not claim invulnerability, certification, or automatic masking of secrets. |
| Account/pricing | Existing legal/commercial pages | Google Sign-In, plan metadata, deletion, billing | Price/trial must be release-verified; do not claim clips sync with the account. |

## 12. High-Priority Page Specifications

### A. `/features/clipboard-manager` — **PROPOSED**

| Field | Specification |
|---|---|
| Purpose | Explain how Mr. Copy saves and organizes copied text and URLs on Android. |
| Primary entity / intent | Clipboard history / problem-solving. |
| Primary query | Android clipboard manager. |
| Secondary query framing | Save copied text on Android; organize clipboard history; clipboard folders Android. |
| Immediate answer | Mr. Copy saves supported copied text and URLs as local items, then lets users organize them into folders, Starred lists, pins, and Trash. |
| Recommended H1 | **Save and organize copied text on Android** |
| Recommended H2s | Capture copied text and links; Organize items with folders and Starred lists; Keep important items pinned; Recover before permanent removal; Android clipboard access limits. |
| Important entities | `ContentItem`, `ClipboardType`, folders, Recent, Starred, pinned items, Trash. |
| IQQI / K2Q | What gets saved? Can I organize clips? How long do deleted items remain? |
| Internal links | Floating Bubble, Link Previews, Privacy & Security, Android Clipboard Access, FAQ. |
| CTA | Get Mr. Copy on Google Play. |
| Metadata | Title: **Android Clipboard Manager for Saved Text & Links \| Mr. Copy**; Description: **Save copied text and links locally on Android. Organize useful items with folders, Starred lists, pins, and Trash in Mr. Copy.** |
| Schema | `WebPage` + `SoftwareApplication` reference; `BreadcrumbList` if nested feature route is implemented. |
| Restrictions | Do not claim image/file capture, unlimited history, automatic password masking, cloud sync, or full background capture on every Android version. |

### B. `/features/floating-bubble` — **PROPOSED**

| Field | Specification |
|---|---|
| Purpose | Explain quick access to saved Recent/Starred content while users work in another Android app. |
| Primary entity / intent | Floating Bubble / problem-solving. |
| Primary query | Floating clipboard Android. |
| Secondary query framing | Copy saved text over other apps; clipboard bubble Android. |
| Immediate answer | Mr. Copy’s Floating Bubble opens a compact panel of Recent and Starred items so users can copy saved text without repeatedly switching apps. |
| Recommended H1 | **Copy saved text without leaving the app you are using** |
| Recommended H2s | What the Floating Bubble does; Open Recent and Starred items quickly; One-tap copy; Collapse the handle to the edge; Permission and Android version requirements. |
| Important entities | Floating Bubble, `OverlayService`, Recent, Starred, `ClipboardReaderActivity`. |
| Evidence requirements | Show owner-supplied real overlay evidence only if available; otherwise use product screenshots without reconstructing the app UI. |
| Internal links | Clipboard Manager, Floating Bubble Permission, Android Clipboard Access, Privacy & Security. |
| CTA | Learn how to enable the bubble / Get on Google Play. |
| Metadata | Title: **Floating Clipboard Bubble for Android \| Mr. Copy**; Description: **Open Recent and Starred copied items over other Android apps, then copy them again in one tap with Mr. Copy’s Floating Bubble.** |
| Schema | `WebPage`, `SoftwareApplication`, and `BreadcrumbList`. |
| Restrictions | State that “Display over other apps” permission is required. Do not claim bypass of Android privacy protections or uninterrupted background clipboard access. |

### C. `/features/link-previews` — **PROPOSED**

| Field | Specification |
|---|---|
| Purpose | Explain how saved public links can become richer reference items. |
| Primary entity / intent | `UrlPreview` / product evaluation. |
| Primary query | Organize saved links Android. |
| Secondary query framing | Save links with preview; link metadata app Android; organize YouTube Instagram Facebook links. |
| Immediate answer | When a saved URL is publicly accessible, Mr. Copy can resolve available title, description, image, platform, author/date, hashtag, or product-reference information and keep the resulting reference locally. |
| Recommended H1 | **Turn saved links into useful Android references** |
| Recommended H2s | What a saved link can show; Available public-link support; Keep YouTube, Instagram, Facebook, and Maps references together; Understand partial previews; Save links from the Android Share Sheet. |
| Important entities | `UrlPreview`, YouTube URL, Instagram URL, Facebook URL, Google Maps URL, Share Sheet. |
| Internal links | Shopping Links, Clipboard Manager, Privacy, FAQ. |
| CTA | Explore supported links / Get on Google Play. |
| Metadata | Title: **Save Links with Previews on Android \| Mr. Copy**; Description: **Organize saved public links with available titles, descriptions, images, hashtags, and platform details in Mr. Copy for Android.** |
| Schema | `WebPage`, `SoftwareApplication`, `BreadcrumbList`. |
| Restrictions | No downloader language; no private-account, login-wall, or guaranteed extraction claim; disclose target-site blocking and partial results. |

### D. `/features/privacy-security` — **PROPOSED**

| Field | Specification |
|---|---|
| Purpose | Make the local-storage and account-data boundary understandable before installation. |
| Primary entity / intent | Local encrypted clipboard storage / trust. |
| Primary query | Encrypted clipboard manager Android. |
| Secondary query framing | Local clipboard history privacy; does clipboard manager upload data. |
| Immediate answer | Mr. Copy stores saved clips, folders, and URL previews locally in encrypted storage; Google/Firebase identity is used for account and entitlement metadata, not cloud clipboard synchronization. |
| Recommended H1 | **Keep saved clipboard content local to your Android device** |
| Recommended H2s | What stays on your device; How local encryption is used; When link metadata makes a network request; Account and entitlement metadata; Root and integrity alerts; Account deletion. |
| Important entities | AES-256 GCM, Android Keystore, Hive, Firebase Auth, `UserProfile`, root detection. |
| Internal links | Privacy, Delete Account, Link Previews, FAQ. |
| CTA | Read the Privacy Policy / Get on Google Play. |
| Metadata | Title: **Local Encrypted Clipboard Storage for Android \| Mr. Copy**; Description: **Mr. Copy keeps saved clips, folders, and previews local to your Android device with encrypted storage and clear account-data boundaries.** |
| Schema | `WebPage`, `SoftwareApplication`; do not add unsupported certification/compliance schema. |
| Restrictions | Never claim “unhackable,” end-to-end encryption, zero network use, automatic secret masking, or that root detection prevents every compromise. |

### E. `/use-cases/shopping-links` — **PROPOSED**

| Field | Specification |
|---|---|
| Purpose | Explain the narrow, real use case of keeping public product links more useful as saved references. |
| Primary entity / intent | `ECommerceProduct` / problem-solving. |
| Primary query | Save shopping links with price Android. |
| Secondary query framing | Organize Amazon and Flipkart links; save product links Android. |
| Immediate answer | Mr. Copy can save supported public shopping links and, when source-page data is available, preserve product-reference details such as title, price/MRP, rating, brand, and image. |
| Recommended H1 | **Keep shopping links and product details together on Android** |
| Recommended H2s | Save a product link from the Share Sheet; Supported shopping platforms; Details that may be available; Use folders for shopping research; Why some product data may be incomplete. |
| Platform list | Amazon India, Flipkart, Myntra, Meesho, Nykaa, TataCliq, JioMart, Shopsy. |
| Internal links | Link Previews, Clipboard Manager, Privacy, FAQ. |
| Metadata | Title: **Save Shopping Links and Product Details on Android \| Mr. Copy**; Description: **Save supported shopping links from India-focused stores and keep available product details with your local Android references in Mr. Copy.** |
| Schema | `WebPage`, `SoftwareApplication`; do **not** use `Product` schema for third-party products on this generic page. |
| Restrictions | No affiliate, marketplace, live-price, checkout, review, or price-comparison claim. Use “when available” for extracted fields. |

### F. `/help/floating-bubble-permission` — **PROPOSED**

| Field | Specification |
|---|---|
| Purpose | Reduce setup friction and make Android overlay permission use transparent. |
| Primary entity / intent | `SYSTEM_ALERT_WINDOW` / informational support. |
| Primary query | Display over other apps permission Mr. Copy. |
| Recommended H1 | **How to enable the Mr. Copy Floating Bubble on Android** |
| Required H2s | Why the permission is required; Enable “Display over other apps”; What the bubble can access; How to disable it; Troubleshooting. |
| Evidence | Native overlay uses Android’s overlay window type and foreground service. |
| CTA | Return to Floating Bubble feature / Get on Google Play. |
| Schema | `WebPage`; `FAQPage` only if the same visible question-and-answer content is displayed. |
| Restrictions | Do not imply the permission grants access to other apps’ private data. |

### G. `/faq` — **PROPOSED**

| Field | Specification |
|---|---|
| Purpose | Provide concise, evidence-backed answers and route users to detailed pages. |
| Recommended H1 | **Mr. Copy FAQ** |
| Required questions | What can Mr. Copy save?; Does it sync clipboard history?; Why does the bubble need permission?; Which links are supported?; Why is a preview partial?; Is Mr. Copy available on iPhone or desktop?; How do I delete my account?; Does deleting an account cancel Google Play billing? |
| Internal links | Every answer links to the relevant feature, support, privacy, pricing, or deletion page. |
| Schema | `FAQPage` only for questions and answers displayed visibly and matching the markup exactly.[4] |
| Restrictions | Keep answers short, factually exact, and date-sensitive where price/trial is mentioned. |

## 13. Internal Linking Graph

| Source page | Descriptive anchor concept | Destination page | Semantic relationship |
|---|---|---|---|
| `/` | “save copied text and links locally” | `/features/clipboard-manager` | Product overview → core workflow |
| `/` | “open saved items over other apps” | `/features/floating-bubble` | Product overview → quick access |
| `/` | “turn saved links into useful references” | `/features/link-previews` | Product overview → link intelligence |
| `/` | “learn how local data is handled” | `/features/privacy-security` | Product overview → trust boundary |
| `/features/clipboard-manager` | “copy saved content without switching apps” | `/features/floating-bubble` | Organization → retrieval |
| `/features/floating-bubble` | “enable Display over other apps” | `/help/floating-bubble-permission` | Feature → setup support |
| `/features/floating-bubble` | “Android clipboard access limitations” | `/help/android-clipboard-access` | Feature → compatibility support |
| `/features/link-previews` | “save supported product links” | `/use-cases/shopping-links` | Link intelligence → commerce use case |
| `/features/link-previews` | “what stays local on your device” | `/privacy` | External metadata → privacy boundary |
| `/features/privacy-security` | “delete your Mr. Copy account” | `/delete-account` | Trust → account control |
| `/privacy` | “account deletion process” | `/delete-account` | Legal data handling → action |
| `/pricing` | “what account data is used for entitlement” | `/privacy` | Commercial → trust |
| `/faq` | “supported public links and preview limits” | `/features/link-previews` | Answer → feature explanation |

Use canonical absolute URLs consistently in navigational links, `<link rel="canonical">`, and the XML sitemap. Google recommends using canonical URLs in sitemaps and self-referential canonical links in page HTML; sitemap inclusion is a supporting, not sole, canonical signal.[2] [3]

## 14. Metadata Strategy

### Metadata rules

1. Generate a unique title, description, H1, canonical, and Open Graph URL for every indexable route.
2. Preserve `https://mrcopy.pro` as the sole canonical production host in all metadata and the sitemap.
3. Do not place unverified price, review, user-count, award, compatibility, or extraction-success claims in metadata.
4. Keep platform names in metadata only when the page explains a real capability and limitation.

| Page | SEO title | Meta description | Canonical | Open Graph title |
|---|---|---|---|---|
| `/` | Mr. Copy — Android Clipboard Manager for Text & Links | Save copied text and public links locally on Android. Organize useful references and reuse them quickly with Mr. Copy. | `https://mrcopy.pro/` | Mr. Copy — Android Clipboard Manager |
| `/features` | Mr. Copy Features — Clipboard, Floating Bubble & Link Previews | Explore Mr. Copy’s Android clipboard history, Floating Bubble, link previews, local organization, and privacy-focused storage. | `https://mrcopy.pro/features` | Explore Mr. Copy Features |
| `/features/clipboard-manager` | Android Clipboard Manager for Saved Text & Links \| Mr. Copy | Save and organize copied text and links locally with folders, Starred lists, pins, and Trash. | `https://mrcopy.pro/features/clipboard-manager` | Save and Organize Copied Text |
| `/features/floating-bubble` | Floating Clipboard Bubble for Android \| Mr. Copy | Open Recent and Starred saved items over other Android apps and copy them again in one tap. | `https://mrcopy.pro/features/floating-bubble` | Floating Clipboard Access for Android |
| `/features/link-previews` | Save Links with Previews on Android \| Mr. Copy | Organize public links with available titles, descriptions, images, and platform details in Mr. Copy. | `https://mrcopy.pro/features/link-previews` | Turn Saved Links into References |
| `/features/privacy-security` | Local Encrypted Clipboard Storage for Android \| Mr. Copy | Learn how Mr. Copy keeps saved clips local with encrypted storage and clear account-data boundaries. | `https://mrcopy.pro/features/privacy-security` | Local Clipboard Privacy & Security |
| `/use-cases/shopping-links` | Save Shopping Links and Product Details on Android \| Mr. Copy | Save supported shopping links and keep available product reference details in your local Android library. | `https://mrcopy.pro/use-cases/shopping-links` | Save Shopping Links with Mr. Copy |
| `/privacy` | Mr. Copy Privacy — Local Clipboard Data & Account Information | See how Mr. Copy handles local clips, public-link metadata requests, account identity, and deletion. | `https://mrcopy.pro/privacy` | Mr. Copy Privacy |
| `/delete-account` | Delete Your Mr. Copy Account | Permanently delete your Mr. Copy account through the verified account-deletion process. | `https://mrcopy.pro/delete-account` | Delete Your Mr. Copy Account |
| `/faq` | Mr. Copy FAQ — Android Clipboard, Privacy & Link Support | Find answers about clipboard history, Floating Bubble permissions, local storage, supported public links, and account deletion. | `https://mrcopy.pro/faq` | Mr. Copy FAQ |

## 15. Schema Strategy

Schema is an aid to machine understanding, not a promise of enhanced search appearance. Markup must represent visible, current page content and must not include fabricated ratings, reviews, pricing, compatibility, or capabilities.[4]

| Page type | Recommended schema | Required conditions | Do not include |
|---|---|---|---|
| Homepage | `SoftwareApplication` + `WebSite` + `WebPage` | Visible Android app name, description, operating system, category, official app URL, and only current verified offer fields | Aggregate ratings, reviews, install counts, unsupported operating systems, stale offers. |
| Feature / use-case page | `WebPage` + `SoftwareApplication` reference | The page visibly describes the feature and names the app | `Product` for third-party shopping products; invisible feature claims. |
| Nested feature / support page | `BreadcrumbList` + `WebPage` | Breadcrumbs are visibly rendered or consistently represented in navigation | Breadcrumb paths that do not exist in the UI. |
| FAQ page | `FAQPage` | Every marked-up question and answer appears visibly, with the same wording | Promotional-only questions, duplicate hidden FAQs, invented answers. |
| Privacy / terms / deletion | `WebPage` | Visible legal/support content accurately matches markup | `FAQPage` unless a visible FAQ section exists. |
| Informational article, if created | `Article` + `BreadcrumbList` | Original, dated, visible editorial content exists | “Article” for thin feature landing pages. |

**Implementation note:** Use JSON-LD. Keep schema generation route-specific, validate it with the Rich Results Test, and ensure Googlebot can access the page.[4]

## 16. Unsupported Claims Firewall

### Permanent “Do Not Claim” list

| Do not claim | Why it is prohibited |
|---|---|
| Cloud clipboard synchronization or multi-device sync of clips | PI Report explicitly states saved clips, links, folders, and previews never sync to Firestore or another cloud database. |
| iOS, macOS, Windows, Linux, web, or desktop support | Native functional implementation is Android/Kotlin only. |
| Image, audio, file, or binary clipboard capture | Verified capture scope is text and URLs only. |
| Instagram/Facebook/private-account access or login bypass | Private, login-walled, and protected pages can only result in partial/fallback behavior. |
| Video, photo, reel, or media downloading | The app resolves available metadata; it is not a downloader. |
| Headless-browser scraping, Puppeteer, automated crawling, or full-web extraction | The PI Report limits metadata resolution to standard HTTP GET/HEAD approaches. |
| Guaranteed price, rating, stock, product availability, or product comparison accuracy | Target sites may block parsing and fields are available only when source data is accessible. |
| Automatic password, card-number, or secret masking | The PI Report explicitly says this is not implemented. |
| “Unhackable,” “100% secure,” “military-grade,” compliance certification, or guaranteed protection | Encryption and checks are verified; absolute protection and certifications are not. |
| Unlimited history or unlimited pinned items | Verified caps are 500 Recent non-pinned items and five pinned items. |
| Automatic background clipboard capture on every Android version/state | Android 10+ system restrictions and user interactions affect access. |
| Active trial/price availability before release confirmation | Trial eligibility is future-dated in the PI Report; public offer status must be independently confirmed. |
| Cloud-backup deletion when an account is deleted | There is no cloud backup of clips to delete. |

## 17. Content Roadmap

| Priority | Page / initiative | Intent | Entity | Business value | SEO value | Product evidence |
|---|---|---|---|---|---|---|
| P0 | Correct and expand `/` around category clarity | Commercial investigation | Mr. Copy | Explains the product before install | Establishes main topical entity | Clipboard, overlay, links, local data boundary. |
| P0 | Keep `/privacy`, `/delete-account`, and canonical/robots/sitemap aligned | Trust / navigational | Data boundary and account deletion | Reduces trust friction | Supports accurate crawl/index signals and trust queries | Local clips vs profile metadata; verified deletion flow. |
| P0 | Improve `/features` into a feature hub | Product evaluation | Feature groups | Routes visitors to detailed benefits | Builds topical architecture | All verified groups. |
| P1 | Add Clipboard Manager page | Problem-solving | `ContentItem` | Strong core-use-case explanation | Targets category and workflow intent | Capture, organization, Trash. |
| P1 | Add Floating Bubble page | Problem-solving | Floating Bubble | Explains primary differentiator | Captures quick-access intent | Native overlay, one-tap copy, edge collapse. |
| P1 | Add Link Previews page | Product evaluation | `UrlPreview` | Shows differentiation beyond history | Captures saved-link intent | URL preview pipeline and supported public links. |
| P1 | Add Privacy & Security page | Trust | Local encrypted storage | Clarifies sensitive-data handling | Captures privacy/evaluation intent | AES-256 GCM, Keystore, local-only clips. |
| P1 | Audit pricing content at launch | Transactional | Basic subscription | Converts qualified users only when offer is accurate | Supports branded pricing intent | ₹49 target product; date-gated trial logic. |
| P2 | Add Shopping Links use case | Problem-solving | `ECommerceProduct` | Describes a differentiated use case | Captures specific long-tail intent | Eight supported commerce platforms. |
| P2 | Add permission and Android-access help pages | Support | Overlay / Android restrictions | Reduces onboarding support burden | Captures setup intent | Overlay permission, Android 13+ focus fallback. |
| P2 | Add FAQ page | Informational | Boundaries/limitations | Addresses trust and setup concerns | Captures question-form queries | Verified FAQ answers. |
| P3 | Publish narrowly scoped, original workflow articles | Informational | Clipboard/link workflows | Support acquisition and education | Builds cluster depth without thin pages | Only code-backed workflows. |
| P4 | Add platform-specific FAQs inside Link Previews page | Informational | Supported public URLs | Clarifies support scope | Supports long-tail discovery without doorway pages | YouTube, Instagram, Facebook, Maps limits. |

## 18. WEB DEVELOPER IMPLEMENTATION BRIEF

### 18.1 Content requirements

| URL | Page type | H1 | Required content / entities | Internal links | CTA | Content restrictions |
|---|---|---|---|---|---|---|
| `/` | Existing homepage | Android clipboard management for text, links, and useful references | Mr. Copy, clipboard history, folders, Floating Bubble, link previews, local data boundary | Features, Privacy, Pricing, Google Play | Get it on Google Play | Keep headline product-category clear; do not list every platform. |
| `/features` | Existing feature hub | Explore Mr. Copy features for Android | Five group cards: clipboard, quick access, link intelligence, shopping references, privacy/security | Proposed feature pages + Privacy | Explore a feature / Google Play | Use verified screenshots only; avoid recreated UI. |
| `/features/clipboard-manager` | New feature page | Save and organize copied text on Android | Capture, ContentItem, folders, Starred, pins, Trash, caps/limits where relevant | Floating Bubble, Link Previews, Privacy | Google Play | No image/file/cloud-sync claims. |
| `/features/floating-bubble` | New feature page | Copy saved text without leaving the app you are using | Floating Bubble, Recent/Starred, one-tap copy, edge collapse, permission | Permission help, Android access help | Enable / Google Play | Explain overlay permission and platform limits. |
| `/features/link-previews` | New feature page | Turn saved links into useful Android references | `UrlPreview`, public links, metadata, Share Sheet, partial status | Shopping Links, Privacy, FAQ | Google Play | No downloader/private-access/scraper claim. |
| `/features/privacy-security` | New trust page | Keep saved clipboard content local to your Android device | Local-only clips, AES-256 GCM, Keystore, account/profile boundary, root alerts | Privacy, Delete Account | Privacy policy / Google Play | No absolute security, no “zero network” statement. |
| `/use-cases/shopping-links` | New use-case page | Keep shopping links and product details together on Android | Eight supported commerce platforms, available product-reference fields, Share Sheet | Link Previews, Clipboard Manager | Google Play | Use “when available”; no live-price/checkout/affiliate claim. |
| `/help/floating-bubble-permission` | New support page | How to enable the Mr. Copy Floating Bubble on Android | Permission reason, setup, disabling, troubleshooting | Floating Bubble, FAQ | Back to Floating Bubble | No claim of access to other apps’ private data. |
| `/help/android-clipboard-access` | New support page | How clipboard access works with Mr. Copy on Android | Android system restriction, bubble-tap behavior, user controls | Floating Bubble, FAQ | Back to features | Do not present workaround as bypassing Android privacy protections. |
| `/faq` | New FAQ page | Mr. Copy FAQ | Visible short Q&As for privacy, supported data, permissions, public links, account deletion | All relevant detail pages | Google Play / Contact | Mark up only visible Q&A content. |
| `/pricing` | Existing commercial page | Mr. Copy pricing | Current plan, billing, trial state, cancellation/deletion distinction | Privacy, Delete Account | Google Play | Release-gate all price and trial claims. |

### 18.2 Technical implementation requirements

| Workstream | Requirement |
|---|---|
| Routing | Register only approved proposed routes. Keep existing `/privacy`, `/terms`, `/delete-account`, and `/contact` intact. |
| Canonicals | Use `SITE_URL = https://mrcopy.pro`; render a self-referential absolute canonical URL per indexable route. Ensure OG URL matches it.[3] |
| Sitemap | Include only public, indexable canonical routes. Add a new route to `sitemap.xml` only when it is published with substantive content. Use absolute URLs.[2] |
| Robots | Keep `Sitemap: https://mrcopy.pro/sitemap.xml`; do not use `robots.txt` as a canonicalization method.[3] |
| Metadata | Implement route-specific title, description, canonical, Open Graph, and social title/description from the page specification. |
| Structured data | Generate JSON-LD from visible route content only. Use `SoftwareApplication` only for the actual app; use `FAQPage` only for visible FAQ content; validate with Rich Results Test.[4] |
| Internal linking | Add the graph links using descriptive anchor text. Do not add bare “click here” anchors. |
| Accessibility | Preserve heading order, visible link labels, contrast, focus states, and real-image alt text. |
| Evidence | Add a content-source note in page data or documentation mapping each feature claim to PI Report section/component. |
| Tests | Add tests confirming canonical host, sitemap inclusion, route metadata, and the absence of blocked claims (`cloud sync`, `iOS`, downloader language) in approved high-risk pages. |
| Release checks | Test the canonical URL, sitemap, robots, JSON-LD, and every new route in production before submitting the updated sitemap in Search Console. |

## 19. Final Priority Matrix

| Initiative | User value | SEO value | Implementation effort | Risk of unsupported claim | Decision |
|---|---:|---:|---:|---:|---|
| Correct canonical host / sitemap / robots | High | High | Low | Low | **Complete; maintain** |
| Homepage category clarity | High | High | Medium | Low | **P0** |
| Feature hub grouping | High | High | Medium | Low | **P0** |
| Clipboard Manager feature page | High | High | Medium | Low | **P1** |
| Floating Bubble feature page | High | High | Medium | Medium | **P1; disclose permission/limits** |
| Link Previews feature page | High | High | Medium | Medium | **P1; disclose public/partial limits** |
| Privacy & Security feature page | High | High | Medium | Medium | **P1; precise language only** |
| Pricing launch audit | High | Medium | Low | High if stale | **P1 only after offer confirmation** |
| Shopping Links use case | Medium | Medium | Medium | Medium | **P2** |
| Permission/access support pages | High | Medium | Low | Low | **P2** |
| FAQ page | Medium | Medium | Low | Low | **P2** |
| Platform-by-platform landing pages | Low | Low | High | High | **Do not create initially** |
| Generic SEO blog content | Low | Low | High | High | **Do not create until core pages are complete** |

## References

**[1]** Product Intelligence & Semantic Knowledge Extraction Report: *Mr. Copy*, owner-supplied factual source, reviewed 20 August 2026.  
**[2]** [Google Search Central — Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).  
**[3]** [Google Search Central — Specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).  
**[4]** [Google Search Central — General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).
