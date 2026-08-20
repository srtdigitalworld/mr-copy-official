# P9 Full Project Gap Matrix and Priority Decision Record

**Audit basis:** Verified Product Intelligence Report through the Semantic SEO Blueprint, current source and static route registries, P0–P8 reports, production route inspections, responsive captures, baseline tests/build, and the newly connected but still immature Search Console property.[1] [2] [3]

## Executive decision

The 15-route Mr. Copy site is structurally complete: its page portfolio, metadata, initial HTML, canonicalization, true 404 handling, JSON-LD, sitemap/robots, public-link boundaries, privacy/account paths, and FAQ architecture are already evidence-backed. No Critical defect, new page, route consolidation, broad schema expansion, GSC-led change, commercial claim, Google Play URL, DNS action, Android change, or external submission is justified.

P9 selects three **High** existing-site improvements. They improve a deferred-availability conversion path, complete a verified Link Previews workflow, and explain a verified trust attribute that is currently absent from the public page. All other candidates are intentionally deferred or rejected.

## Complete gap matrix

| Area | Current state | Missing element or finding | Evidence | Recommended action | Priority |
| --- | --- | --- | --- | --- | --- |
| Product entities | Mr. Copy, clipboard management, Floating Bubble, public-link references, Maps, shopping references, local storage, account data, deletion, and privacy have distinct homes. | No missing core entity that needs a new route. | Route/entity map, current page source, and P0–P8 completion records.[1] [2] | **No action.** Retain current 15-route information architecture. | None |
| Entity attributes | Clipboard/links, overlay permission, Android limits, public-source fallback, local encryption, Firebase separation, and deletion boundaries are explained. | Root/integrity checks are verified in the Blueprint but not explained on the Privacy & Security feature page. | The Blueprint maps root/integrity checks to Privacy & Security; the current page covers local storage, encryption, account boundary, requests, and deletion but not the warning-oriented integrity attribute.[1] | Add a compact, factual Integrity & device-risk section to the existing Privacy & Security page. State it can surface a warning for modified/rooted environments and does not guarantee protection or prevent every compromise. | **High** |
| User questions / IQQI / K2Q | Feature, support, privacy, deletion, and FAQ questions are substantive and non-duplicative. | The direct “How do I save a link from another Android app?” workflow is not explained on the Link Previews page, despite the verified Android Share Sheet relationship. | Blueprint explicitly assigns Android Share Sheet `ACTION_SEND` text/URL support and requires the Link Previews page to explain saving links from the Share Sheet; current route mentions link context but not the workflow.[1] | Add a concise three-step Share Sheet workflow to Link Previews, with its verified text/URL scope and source-boundary reminder. | **High** |
| Feature explanations | Clipboard, bubble, previews, shopping, privacy, help, and account flows use specific feature pages. | No additional missing feature explanation meets the distinct-intent test. | Current source and P5/P6 semantic assessment.[2] | **No new pages.** | None |
| Use cases / help | Shopping, overlay permission, and Android clipboard restrictions are distinct and documented. | Blueprint’s unbuilt Organize Copied Text candidate overlaps Clipboard Manager, Home, Features, and FAQ. | P6/P8 found no information-gain or mature GSC evidence to justify it.[3] | **Defer.** Reconsider only with a verified distinct workflow and mature actual demand evidence. | Deferred |
| Trust / privacy | Privacy policy, feature-level privacy, terms, account deletion, and contact are accurate and linked. | Integrity warning behavior is the one verified trust detail not yet explained in the feature-level trust page. | Blueprint entity allocation and current Privacy & Security source.[1] | Implement the selected Integrity & device-risk section only. | **High** |
| Internal linking | P5 completed the parent → feature/help/trust → FAQ graph; FAQ answers contain contextual deep links; footer includes FAQ. | The default CTA dead-ends in a browser alert while Play URL is deferred. This is a CTA relationship and conversion-path weakness, not a link-count gap. | Shared `StoreCta` renders a button that alerts “official Google Play URL will be added before launch” whenever the URL is empty; CTA appears in header, hero, footer, and feature pages.[4] | Replace the unavailable primary CTA with an explicit internal availability path (`/pricing#availability`) and make the Pricing page’s pending state non-actionable/informational. Keep one shared configuration switch for the future literal Play URL. | **High** |
| Duplicate intent / thin content | Current pages have distinct product, help, legal, account, and FAQ roles. | No consolidation is warranted. | P5/P6 audit and source review.[2] | **No action.** | None |
| Metadata / canonical / Open Graph / initial HTML | Unique initial title, description, canonical, OG URL, H1, and route-backed schema are delivered on every canonical page. | No gap. | P7 live and deterministic build validation.[5] | **No action.** Protect P7 shared manifest/parity. | None |
| JSON-LD / breadcrumbs | Route-level WebPage, BreadcrumbList, FAQPage, and SoftwareApplication uses are visible-content-backed. | No legitimate new type. | P7/P8 validation and current registry.[5] [3] | **No action.** Do not add Offer, Product, Review, AggregateRating, Article, or hidden FAQ schema. | None |
| Sitemap / robots / HTTP/HTTPS / 404 | Canonical sitemap and robots are correct; public routes return 200, HTTP redirects 308, unknown documents/assets return 404/noindex. | No gap. | P7 and P8 live validation.[5] [3] | **No action.** | None |
| Technical rendering | Static prerendering gives all canonical routes initial H1, metadata, and JSON-LD. | Shared bundle retains a pre-existing >500 kB minified advisory; content-visibility deliberately reduces later-section rendering work. | P9 pre-change build; P7 records the advisory as non-blocking; P8 has no field Core Web Vitals data.[5] [3] | **Defer performance work.** Do not optimize by assumption or risk official visual fidelity without field evidence. | Deferred |
| Accessibility | Skip link, landmarks, semantic H1s, responsive navigation, focus styles, form states, and friendly 404 recovery are present. | No critical accessibility failure observed. | P7 QA, source audit, desktop route capture, current semantic controls.[5] | Preserve current controls; revalidate after selected changes. | None |
| Responsive UX | Desktop audit found consistent owner-supplied visuals and route hierarchy; live Link Previews inspection confirmed later content is present. | Full-page capture compression made later sections appear blank; no actual content omission was found. | P9 live production scroll and source inspection; global content-visibility is intentional.[4] | **No change.** Treat as capture behavior, not a UX defect. | None |
| Conversion communication | Product purpose, Android scope, capability, local-data boundary, and setup/deletion paths are clear. | The current unavailable “Get it on Google Play” button gives a generic alert rather than a useful internal next step while availability remains deferred. | Shared CTA source and Pricing page source.[4] | Implement the selected availability-path CTA behavior; make no price, trial, or listing claim. | **High** |
| Google Play / commercial | Shared `siteConfig.playStoreUrl` remains empty and centralized. Pricing clearly says terms are pending. | No confirmed literal URL or commercial term. | Owner constraints and current config.[4] | **Defer.** Future URL should still require one config value plus QA. | Deferred |
| GSC-driven work | Property is newly connected. Performance, Pages, HTTPS reports are processing; Core Web Vitals lacks data; representative valid routes are currently fetchable/indexable. | No mature query, CTR, ranking, field-performance, or index-coverage data supports optimization. | P8 report.[3] | **Defer all GSC-driven decisions.** | Deferred |
| Off-page authority | Existing Clipboard Manager, Floating Bubble, Link Previews, Privacy & Security, and FAQ are substantive reference candidates. | No public Play listing or approved external action. | P6 off-page map.[6] | Prepare a refreshed non-executed reference map only; no outreach, submission, payment, account creation, or link acquisition. | Medium preparation only |

## Entity-to-question coverage decision

| Entity | User question | Existing answer | P9 outcome |
| --- | --- | --- | --- |
| Clipboard management | How do I save and organize copied text and links? | Homepage, Features, Clipboard Manager, FAQ. | Complete; no new page. |
| Floating Bubble | How can I reuse saved text without leaving another Android app? | Floating Bubble feature and two support pages. | Complete; no duplicate FAQ. |
| Android clipboard access | Why might Android require an extra interaction? | Android Clipboard Access help and FAQ. | Complete. |
| Public link previews | What can a saved public link show? | Link Previews and FAQ. | Complete. |
| Android Share Sheet | How can I send a link/text from another Android app to Mr. Copy? | Named on Feature hub but not explained as a workflow on Link Previews. | **Implement existing-page workflow.** |
| Shopping references | Which shopping links can be saved and what data can be kept? | Shopping Links, Link Previews, FAQ. | Complete; no store-variation pages. |
| Local encryption | Does saved content stay on my device? | Privacy & Security, Privacy, Homepage, FAQ. | Complete. |
| Integrity alerts | What does the app do on a modified/rooted environment? | Verified by blueprint but no public explanatory section. | **Implement existing-page trust explanation.** |
| Account data/deletion | What is stored separately and what deletion covers? | Privacy, Delete Account, FAQ, Contact. | Complete. |
| Price / trial / Play availability | What does it cost and where can I install it? | Pricing deliberately withholds unconfirmed information. | **Defer.** No value can be added truthfully now. |

## Final internal-link graph decision

The current graph already supplies Homepage → Features → detailed Feature/Use Case/Help → FAQ/Privacy/Account paths. The selected CTA repair improves a legitimate product-state relationship: every unavailable shared Store CTA will lead to the existing Availability record instead of a modal-style browser alert. The new Share Sheet section will link only to established Clipboard Manager and Privacy/Link Previews contexts where useful; no keyword-only links will be created.

## Selected implementation scope

1. **Shared availability CTA repair.** When `siteConfig.playStoreUrl` is empty, send visitors to the existing availability page and make the pricing-page pending control informational, not an alert. When the confirmed URL is later supplied, preserve the existing direct external Play link behavior automatically.
2. **Link Previews: Android Share Sheet workflow.** Add an evidence-bound, useful workflow section about sharing supported text or a public URL to Mr. Copy, saving it as a local reference, and reviewing available source metadata.
3. **Privacy & Security: Integrity & device-risk explanation.** Add the verified warning-oriented root/integrity behavior with explicit non-guarantee language and existing privacy/deletion contextual paths.

No new public page is selected.

## References

[1]: ./mr-copy-semantic-seo-blueprint.md "Mr. Copy Semantic SEO Blueprint"

[2]: ./p5-semantic-audit-and-optimization-map.md "P5 Semantic Audit and Optimization Map"

[3]: ./p8-search-console-validation-report.md "P8 Read-Only Search Console Validation Report"

[4]: ../client/src/components/SiteShell.tsx "Shared CTA shell"; ../client/src/pages/Pricing.tsx "Availability page"; ../client/src/official-assets.css "Deferred section rendering"

[5]: ./p7-initial-html-and-404-completion-report.md "P7 Initial HTML and 404 Completion Report"

[6]: ./p6-off-page-and-play-readiness.md "P6 Off-Page Opportunity Map and Play Readiness"
