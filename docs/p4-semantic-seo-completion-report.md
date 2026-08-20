# Mr. Copy P4 Semantic SEO Completion Report

**Release:** P4.1 Substantive FAQ Route and P4.2 Link Previews FAQ Content  
**Production domain:** `https://mrcopy.pro`  
**Published implementation checkpoint:** `100b8e8d`  
**Status:** Completed and validated in production

## Approved scope and stopping point

P4 adds a single substantive sitewide FAQ route and a dedicated FAQ section inside the existing Link Previews page. Both surfaces use the Product Intelligence evidence and the approved semantic SEO blueprint as the factual boundary.[1] Every structured FAQ question and answer is visibly rendered from the same shared data object that creates the JSON-LD.

> **P5 has not been started.** No additional routes, keyword-variation pages, commercial terms, or unsupported capabilities were added.

| Work item | Route | Primary entity | Search intent | FAQ content |
| --- | --- | --- | --- | --- |
| P4.1 | [`/faq`](https://mrcopy.pro/faq) | Mr. Copy product boundaries | Informational and navigational support | 13 evidence-backed sitewide questions |
| P4.2 | [`/features/link-previews`](https://mrcopy.pro/features/link-previews) | `UrlPreview` | Product evaluation and informational support | 7 evidence-backed Link Previews questions |

## Pages created and modified

### P4.1 — Mr. Copy FAQ

The new FAQ route gives users concise, accurate answers and routes them to the existing detail page where a workflow, limitation, privacy boundary, or account-control action needs fuller context. It is deliberately organized into three substantive groups rather than a keyword list: saving and reusing, public links and references, and local data and account control.

| Group | Questions added |
| --- | --- |
| Clipboard and quick access | What can Mr. Copy save?; What does the Floating Bubble do?; How does clipboard access work on Android 13 and later?; Why does the Floating Bubble need Display over other apps? |
| Public links and references | Which public links can Mr. Copy organize?; Which shopping links are supported?; Why can a link preview be partial? |
| Privacy and account control | Does Mr. Copy sync clipboard history to the cloud?; How is saved local content protected?; What account data is separate from saved clipboard content?; What is deleted when I remove my Mr. Copy account?; Does deleting my account cancel Google Play billing?; Is Mr. Copy available on iPhone or desktop? |

### P4.2 — Link Previews FAQ

The existing Link Previews route now has a visible “Link preview questions” section that explains the public-URL workflow without claiming unrestricted web access. It answers: What is a link preview in Mr. Copy?; What information can a saved URL include?; How does URL metadata enrichment work from my perspective?; What happens when a URL cannot be resolved?; Which link-preview information stays local?; What network requests are involved in a public link preview?; and How do Link Previews relate to Clipboard Manager?

## Entities, intent, IQQI, and K2Q coverage

The sitewide FAQ’s primary entity is the current Mr. Copy Android product surface. Its secondary entities are Clipboard Manager, Floating Bubble, Android overlay permission, Android clipboard access, public URL previews, Google Maps references, shopping references, local encryption, Firebase account data, and the account-deletion flow. The Link Previews FAQ’s primary entity is the local `UrlPreview` reference, with public metadata, source availability, local storage, network requests, and Clipboard Manager as secondary entities.

The IQQI coverage addresses users’ underlying questions about what can be saved, why Android may require foreground interaction, why the overlay permission exists, what a public URL may reveal, why a preview may be incomplete, what remains local, and what deletion does or does not remove. The K2Q coverage uses natural questions such as *How does clipboard access work on Android 13 and later?*, *Which shopping links are supported?*, *What happens when a URL cannot be resolved?*, and *What network requests are involved in a public link preview?* The answer structure preserves clear subject → predicate → object relationships and links each answer to a relevant existing page.

## Internal links

| Source | Descriptive linked destinations |
| --- | --- |
| `/faq` | Clipboard Manager, Floating Bubble, Android Clipboard Access, Floating Bubble Permission, Link Previews, Shopping Links, Privacy & Security, Privacy, Delete Account, and Features |
| `/features/link-previews` FAQ | Clipboard Manager, Privacy & Security, Privacy, and the sitewide FAQ |
| Existing Link Previews page | Retains Shopping Links, Clipboard Manager, Privacy & Security, Privacy, and Delete Account destinations |

All destinations are existing public routes. No placeholder, future, or artificial keyword links were introduced.

## Metadata, schema, sitemap, and indexability

The new FAQ route has a unique title, description, self-referential canonical, Open Graph title/description/URL/type, Twitter metadata, visible Home → FAQ breadcrumb, and a canonical sitemap entry. The Link Previews page retains its own route-specific metadata and canonical URL.

| Route | Live title | Structured data | Visible/structured FAQ parity |
| --- | --- | --- | --- |
| `/faq` | `Mr. Copy FAQ — Android Clipboard, Links & Privacy` | `WebPage`, `BreadcrumbList`, `FAQPage` | 13 visible questions = 13 structured questions in the same order |
| `/features/link-previews` | `Save Links with Previews on Android` | `WebPage`, `BreadcrumbList`, `FAQPage` | 7 visible questions = 7 structured questions in the same order |

`client/public/sitemap.xml` includes both canonical URLs. The live `robots.txt` allows crawling and points to `https://mrcopy.pro/sitemap.xml`. Both production DOM snapshots have no `noindex` marker.

## Files created and changed

| File | Change |
| --- | --- |
| `client/src/pages/FAQ.tsx` | New substantive sitewide FAQ route using the supplied accessible Accordion component |
| `client/src/lib/faq.ts` | Single factual source for the 13 sitewide and 7 Link Previews FAQ question-and-answer objects |
| `client/src/faq.css` | Responsive FAQ grouping, answer, and accordion presentation styles |
| `client/src/index.css` | Imports FAQ styles into the existing design system |
| `client/src/pages/LinkPreviews.tsx` | Adds the visible Link Previews FAQ section and a contextual sitewide FAQ link |
| `client/src/lib/seo.ts` | Adds exact-match `FAQPage` generation and P4 WebPage/BreadcrumbList/FAQPage schema |
| `client/src/App.tsx` | Registers `/faq` as a lazy-loaded public route |
| `client/public/sitemap.xml` | Adds `https://mrcopy.pro/faq` |
| `client/src/lib/seo.test.ts` | Replaces stale deferred-FAQ assertions with P4 positive route, metadata, schema, link, parity, and claims-firewall coverage |
| `docs/p4-semantic-seo-implementation-map.md` | Records evidence, entities, intent, IQQI/K2Q, link graph, and claims decisions |
| `docs/p4-production-qa-notes.md` | Records local and live production QA evidence |

## Verified claims and excluded claims

| Topic | Verified claims published | Excluded claims |
| --- | --- | --- |
| Clipboard and Floating Bubble | Local saved text/URLs, folders, Starred items, pins, Trash, Recent/Starred overlay access, Android 13+ foreground interaction, user-controlled overlay permission | Always-on capture, privacy bypass, private-app-data access, unsupported automation |
| Public links and shopping | Public YouTube, Instagram, Facebook, supported Google Maps links, eight named public shopping platforms, available metadata, partial-result conditions | Private-account access, login-wall bypass, downloader, unrestricted scraping, current-price/stock guarantee, checkout, affiliate or marketplace service |
| Local data and security | Local saved library, AES-256 GCM, Android Keystore-backed key protection, public-request/local-storage distinction | Cloud clipboard synchronization, guaranteed security, certification, unhackable claim, automatic password/card masking |
| Firebase and deletion | Separate identity/entitlement records, authenticated Firebase account plus matching Firestore account-record deletion, local-device data limit, separate Google Play billing management | Remote deletion of local device content, price/trial/plan details, Google Play URL, entitlement or commercial-benefit claims |
| Platform scope | Current Android product scope | iPhone or desktop support claim |

## Validation results

| Validation area | Result |
| --- | --- |
| Cloudflare Workers build | Successful |
| Live P4 routes | `/faq` and `/features/link-previews` both returned HTTP 200 |
| Metadata, canonical, Open Graph, Twitter | Present and route-specific in the live DOM |
| Structured data | `WebPage`, `BreadcrumbList`, and exact-match `FAQPage` verified on both routes |
| FAQ schema parity | 13/13 FAQ questions on `/faq`; 7/7 on Link Previews; each structured list matches visible order |
| Sitemap, robots, and indexability | Canonical URLs present; robots permits crawling and names sitemap; no `noindex` found |
| Internal links | Required descriptive destinations confirmed from the production DOM |
| Desktop responsive QA | Passed on the two live browser routes |
| Tablet responsive QA | Passed at `768×1024` on both live routes |
| Mobile responsive QA | Passed at `375×812` on both live routes |
| Accessibility QA | Shared semantic headings and breadcrumbs retained; Accordion uses accessible triggers; first `Tab` shows Skip to main content at `top: 16px` on both routes |
| Console and network QA | Live browser probe recorded zero console errors and zero failed network requests on both routes |
| Regression tests | 47 passing tests across 6 files |
| TypeScript | Passed with no errors |
| Production build | Passed; FAQ and Link Previews are lazy-loaded chunks |

The established non-blocking advisory that the shared main JavaScript bundle exceeds 500 kB after minification remains. It predates P4 and was not caused by the FAQ page chunks.

## Remaining opportunities

The Google Play Store URL and all public price, plan, trial, currency, eligibility, date, and entitlement-benefit details remain intentionally unpublished until owner confirmation. P5 is not started. Any additional topic expansion, FAQ refinement, or commercial content must receive explicit owner approval first.

## Reference

[1]: ./mr-copy-semantic-seo-blueprint.md "Mr. Copy Semantic SEO Blueprint"
