# Mr. Copy P4 Semantic SEO FAQ Implementation Map

## Approved scope and stopping point

P4 contains only two connected changes: the substantive `/faq` route and a visible FAQ section on the existing `/features/link-previews` page. All questions must be directly supported by the Product Intelligence evidence or approved visible website content. Questions about unconfirmed pricing, trial terms, Google Play availability URL, or unsupported capabilities are excluded. P5 remains out of scope.

| Work item | Primary entity | Search intent | Page purpose |
| --- | --- | --- | --- |
| P4.1 `/faq` | Mr. Copy product boundaries | Informational and navigational support | Give concise, evidence-backed answers and route each user to the detailed existing page. |
| P4.2 Link Previews FAQ | `UrlPreview` | Product evaluation and informational support | Explain the public-link workflow, available data, fallback behavior, local storage, public requests, and Clipboard Manager relationship. |

## P4.1 question set

The questions below were selected because each adds unique user value and has a verified detailed destination. Near-duplicate questions were consolidated rather than expanded for keyword variation.

| Visible question | IQQI / K2Q covered | Evidence-bound answer direction | Contextual destination |
| --- | --- | --- | --- |
| What can Mr. Copy save? | What happens to copied text and links? / How can I save copied text and links on Android? | Supported copied text and URLs can become local saved items, organized with folders, Starred items, pins, and Trash. | Clipboard Manager |
| How does clipboard access work on Android 13 and later? | Why might a bubble tap be needed? / Android 13 clipboard-manager limitations | Android may restrict background clipboard access; a Floating Bubble tap can bring the required foreground interaction into focus. | Android Clipboard Access |
| What does the Floating Bubble do? | Can I reuse saved text without app switching? / Floating clipboard Android | It can surface saved Recent and Starred items over another app and copy a selected saved item back to the Android clipboard. | Floating Bubble |
| Why does the Floating Bubble need Display over other apps? | Why is overlay permission requested? / Display over other apps Mr. Copy | Android requires the user-controlled overlay permission to render the bubble; it does not grant private-app-data access. | Floating Bubble Permission |
| Does Mr. Copy sync clipboard history to the cloud? | Are saved clips uploaded? / Local clipboard storage Android | Saved clips, folders, previews, indexes, and preferences stay in the encrypted local Android library; account data is separate. | Privacy & Security |
| How is saved local content protected? | How is local storage protected? / Encrypted clipboard manager Android | AES-256 GCM protects the local Hive database; key material uses Android Keystore-backed storage; no absolute security claim. | Privacy & Security |
| What account data is separate from saved clipboard content? | What does Firebase hold? / Mr. Copy account profile data | Google/Firebase supports identity and entitlement records, not a cloud clipboard or saved clip/folder/link-preview library. | Privacy |
| Which public links can Mr. Copy organize? | Do public social and Maps links work? / Organize public links Android | Public YouTube, Instagram, Facebook, and supported Google Maps links can provide available reference details; private/login-blocked sources may be partial. | Link Previews |
| Which shopping links are supported? | Which stores can be recognized? / Save shopping links with price Android | Only the eight verified public store platforms are listed; source-dependent product fields are reference information, not a current-price or stock guarantee. | Shopping Links |
| Why can a link preview be partial? | Does every URL get a preview? / Why is a URL preview incomplete? | Public source availability, privacy, login requirements, rate limits, blocking, slowness, or limited exposed metadata can produce a partial result. | Link Previews |
| What is deleted when I remove my Mr. Copy account? | What does account deletion remove? / Delete Mr. Copy account | The authenticated Firebase account and matching Firestore account record are deleted; local device content is not remotely erased. | Delete Account |
| Does deleting my account cancel Google Play billing? | What happens to billing after deletion? / Mr. Copy account deletion subscription | No. Google Play subscription management is separate from the account-deletion flow. No plan, price, trial, or availability terms are stated. | Delete Account |
| Is Mr. Copy available on iPhone or desktop? | What platforms are supported? / Mr. Copy supported platforms | The approved public product scope is Android. The site makes no iPhone or desktop support claim. | Features |

## P4.2 Link Previews FAQ set

| Visible question | IQQI / K2Q covered | Evidence-bound answer direction | Contextual destination |
| --- | --- | --- | --- |
| What is a link preview in Mr. Copy? | What is a saved link preview? / Save links with preview Android | A locally saved reference built from a public URL and available context, not an unlabelled raw URL. | Clipboard Manager |
| What information can a saved URL include? | What can a URL preview show? / URL metadata app Android | Available title, description, author, date, domain, favicon, image or thumbnail, and platform-specific public details. | Privacy & Security |
| How does link enrichment work from my perspective? | How does Mr. Copy turn a URL into a reference? / Organize saved links Android | Save or share a public URL; Mr. Copy may resolve available public metadata and retain the result in its local reference library. | Clipboard Manager |
| What happens when a URL cannot be resolved? | Does every saved link get a preview? / Why is a URL preview partial? | It can return partial or fallback information when the source is private, login-required, blocked, slow, rate-limited, or exposes less metadata. | Privacy |
| Which link-preview information stays local? | Where are previews stored? / Local link-preview storage Android | Saved previews remain in the local library with saved clips, folders, and preferences; they are not cloud-synced clipboard data. | Privacy & Security |
| What network requests are involved in a public link preview? | Does resolving a URL contact a website? / Public URL metadata request | Mr. Copy may make a standard request to a public target site or metadata endpoint; this is separate from local preview storage. | Privacy |
| How do Link Previews relate to Clipboard Manager? | Can I organize a preview with saved text? / Clipboard Manager links Android | A preview is kept alongside copied text or a saved link as part of the local reference library, then can be organized with existing clipboard-management tools. | Clipboard Manager |

## Claims firewall

The P4 pages must not use downloader, scraper, private-account, login-wall bypass, unrestricted-web, cloud-sync, iOS/desktop support, price/trial, current-price, guaranteed-security, automatic secret-masking, or unsupported automation language. Link preview answers must retain the public-source, available-data, and partial-result conditions. The sitewide FAQ must not publish questions that cannot be answered from verified product evidence.

## Schema and metadata plan

Both FAQ surfaces will visibly render their questions and answers in the DOM through the supplied accessible Accordion component. `FAQPage` JSON-LD will be generated from the same shared question-and-answer objects used to render the visible content. `/faq` will also carry `WebPage` and a Home → FAQ `BreadcrumbList`; Link Previews will retain its existing `WebPage` and Features breadcrumb and receive a matching `FAQPage` node. The FAQ route will use a route-specific title, description, canonical, Open Graph, Twitter fields, and canonical sitemap entry.
