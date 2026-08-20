# Mr. Copy P6 Off-Page Opportunity Map and Google Play Readiness

**Status:** Planning only. No listing, outreach, account creation, contact, payment, or external submission was performed.

## Verified platform findings gathered

| Platform | Official source reviewed | Verified pathway | P6 implication |
| --- | --- | --- | --- |
| Product Hunt | [Product Hunt Launch Guide](https://www.producthunt.com/launch) | Product Hunt describes a maker community in which products are submitted or hunted by community members and can receive votes, comments, and sharing. | Potential maker-led launch only after the owner has a confirmed public Google Play URL and launch materials. |
| AlternativeTo | [AlternativeTo FAQ](https://alternativeto.net/faq/) | A user can use **Suggest new application**; the submission asks for platform, licence, description, tags, and is placed in a review backlog. The FAQ states that email verification is required before a new-app submission. | Strongest directory candidate because Android apps are directly represented and the process is documented. Use only accurate platform, official website, and commercial-status data. |

## Research guardrails

The P6 map will not assume acceptance, backlinks, traffic, follow links, placement, pricing, or editorial coverage. Any platform that requires payment, a review, or an account remains a future owner decision. The final submission package must use the confirmed Google Play URL; no placeholder or workaround URL will be used.

## First opportunity set — no outreach or submission performed

| Tier | Platform and URL | Relevance | Suggested target page and anchor | Acquisition method | Account requirement | Payment requirement | Risk | Recommended angle |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | [AlternativeTo](https://alternativeto.net/faq/) | Its documented new-application form includes Android platform, licensing, description, and tags; it is directly relevant to software discovery. | `https://mrcopy.pro/` — “Mr. Copy Android clipboard manager” | Owner submits one accurate new-app suggestion and awaits review. | Verified email is required by the FAQ. | Not stated in the official FAQ; do not commit to payment. | Moderate: community review, taxonomy fit, and acceptance are not guaranteed. | Frame Mr. Copy as an Android-only local clipboard manager for saved text, public links, and useful references; do not claim downloads, scraping, or sync. |
| B | [Product Hunt Launch Guide](https://www.producthunt.com/launch) | Product Hunt is a maker-product discovery community with a documented launch pathway. | `https://mrcopy.pro/` — “Mr. Copy for Android” | Owner-led launch after final store destination and launch material are ready. | A maker/community account is implied by the documented submission flow; confirm current requirements before action. | No payment commitment; do not infer a paid placement. | Moderate–high: launch quality and audience fit matter; it is not a substitute for a store listing. | A transparent maker launch around local-first clipboard organization and Android reference workflows, with one confirmed conversion destination. |
| C | [BetaList Submission Criteria](https://betalist.com/criteria) | It documents a technology-startup discovery workflow and requires a substantive landing page with an access path. | `https://mrcopy.pro/` — “Mr. Copy Android productivity reference tool” | Consider only if the app is recently launched and the confirmed Google Play URL gives visitors access. | The submission flow uses sign-in; confirm current account details at the time of action. | Not evaluated in the official criteria reviewed; do not assume a free or paid tier. | High: eligibility may not fit if the product is already established or lacks a public access destination. | Present only if launch timing and access requirements are factually met; otherwise skip rather than force a listing. |

No broad directory blast, paid-listing purchase, reciprocal-link scheme, comment posting, forum promotion, or automated outreach is recommended. No platform has been contacted.

## Existing pages suitable for future citations or editorial reference

| Existing page | Why it is link-worthy | Appropriate external context |
| --- | --- | --- |
| [`/features/clipboard-manager`](https://mrcopy.pro/features/clipboard-manager) | Specific Android workflow, local organization, folders, pins, Trash, and stated limits. | Android productivity or clipboard-manager comparisons that can accurately describe it. |
| [`/features/floating-bubble`](https://mrcopy.pro/features/floating-bubble) | Distinct quick-access feature with clear Android permissions and limitations. | Android utility or accessibility/productivity discussions where overlay workflow is genuinely relevant. |
| [`/features/link-previews`](https://mrcopy.pro/features/link-previews) | Consolidated public-link, Maps, shopping-reference, local-storage, and source-limit explanation. | Local-first reference or public URL organization discussions, not downloader/scraper lists. |
| [`/features/privacy-security`](https://mrcopy.pro/features/privacy-security) | Concrete local-first, AES-256 GCM, Android Keystore, and account-boundary explanation. | Privacy-focused Android productivity resources that need an evidence-backed local-data reference. |
| [`/faq`](https://mrcopy.pro/faq) | Concise answers with visible FAQ schema parity and detailed route exits. | Support or discovery contexts that benefit from a factual answer hub. |

## Google Play URL insertion readiness

The deferred store URL has one controlled source of truth: `siteConfig.playStoreUrl` in `client/src/lib/site.ts`. It is currently an empty string. `StoreCta` in `client/src/components/SiteShell.tsx` already changes from its safe non-navigation launch-state notice to a secure external link when this one value is supplied. No restructuring, duplicate URL editing, or placeholder route is needed.

| Surface | Existing integration point | Future action when owner provides the real URL |
| --- | --- | --- |
| Header, mobile navigation, and footer | `StoreCta` inside `SiteShell.tsx` | Update `siteConfig.playStoreUrl` once; shared CTA becomes a link everywhere. |
| Homepage | Existing `StoreCta` usage in `Home.tsx` | Automatically receives the confirmed URL from the shared component. |
| Feature and use-case pages | Existing `StoreCta` usage in Clipboard Manager, Floating Bubble, Link Previews, Privacy & Security, Shopping Links, Android Clipboard Access, and Floating Bubble Permission | Automatically receives the confirmed URL from the shared component. |
| FAQ and Pricing | Existing `StoreCta` usage in `FAQ.tsx` and `Pricing.tsx` | Automatically receives the confirmed URL from the shared component. |
| Contact and support | Contact already exposes verified email and deletion support; it does not need a redundant store CTA unless the owner explicitly requests it. | Leave unchanged by default. |

### Owner input required later

Only the literal official Google Play URL is required. P6 intentionally does not request or insert a price, plan, trial, currency, eligibility, date, entitlement, or promotional claim alongside it.
