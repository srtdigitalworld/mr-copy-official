# Mr. Copy P6 SEO Baseline and Prioritized Opportunity Map

**Audit date:** 20 August 2026  
**Scope:** 15 canonical public routes on `https://mrcopy.pro` after P5  
**Data sources:** Live DOM snapshots, canonical and variant HTTP checks, sitemap and robots inspection, current source/schema review, mobile Lighthouse baseline, and connector availability inspection.

## Search-performance data availability

Google Search Console is **not configured for this task**. Consequently, impressions, clicks, CTR, average position, query, landing-page, and query/page-mismatch data are unavailable and are not estimated or invented. P6 priorities therefore use only verified on-site crawl, metadata, schema, page-experience, entity, and internal-link evidence.

| Data source | Status | P6 use |
| --- | --- | --- |
| Google Search Console | Unavailable; no connector configured | No search-performance claim or query prioritization is made. |
| Live canonical-route DOM | Available | Metadata, schema, heading, internal-link, and indexability baseline. |
| Live HTTP variant checks | Available | Protocol, host, trailing-slash, query-parameter, sitemap, and robots findings. |
| Mobile Lighthouse lab run | Available | Material page-experience signals only; not a field-performance substitute. |

## Current SEO baseline

All 15 canonical routes returned a unique rendered title, a `WebPage` node, and no `noindex` marker. Feature, use-case, help, and FAQ relationships remain non-duplicative after P5. The 15-route sitemap contains only `mrcopy.pro` canonical URLs, while robots permits crawling and declares the canonical sitemap. The Homepage, Features hub, detailed features, help pages, use case, FAQ, privacy, legal, account, and support pages continue to cover distinct intents; no content consolidation is justified.

| Baseline area | Verified result | Assessment |
| --- | --- | --- |
| Entity coverage | Clipboard Manager, Floating Bubble, Link Previews, shopping links, Android permissions/access, local storage, encryption, Firebase account data, privacy, and deletion each have existing relevant coverage. | No entity requires a new page. |
| Search intent | Product discovery, feature evaluation, use case, permission help, Android limitation help, FAQ support, legal policy, account action, and support contact remain distinct. | No competing route pair identified. |
| Metadata and schema | Canonicals, Open Graph URLs, H1s, and `WebPage` schema are consistent across the canonical inventory. FAQPage remains limited to visible FAQ content. | No content-schema expansion required. |
| Internal links | P5 created an intentional product → feature/help/trust and sitewide FAQ path. | No additional high-value link is justified without repetition. |
| Indexability | Canonical routes are crawlable; no `noindex`; sitemap includes 15 routes. | Healthy canonical-route baseline. |
| Page experience | Mobile Lighthouse: Performance 89, Accessibility 95, Best Practices 100, SEO 92. FCP/LCP measured 3.0 s, TBT 0 ms, CLS 0. | Investigate technical findings; do not mistake one lab run for field data. |

## Crawl-health findings

| Test | Observed result | Impact | P6 disposition |
| --- | --- | --- | --- |
| `http://mrcopy.pro/` | Serves `200 OK` instead of redirecting to HTTPS | Allows a protocol duplicate even though in-page canonical is HTTPS. | **Must Fix:** minimal Worker HTTPS redirect. |
| Static root head | Static fallback uses trailing-slash canonical/OG URL while runtime canonical is slashless `https://mrcopy.pro` | Produces a small root-URL consistency risk for non-JavaScript parsers. | **Must Fix:** make static fallback root canonical and OG URL slashless. |
| `https://www.mrcopy.pro/` | Cloudflare 522 | Host alias is not configured. | **Do Not Implement Yet:** fixing requires domain/DNS/Cloudflare configuration, which P6 must not alter. |
| Trailing-slash/query variants | Return 200 from SPA; rendered route metadata retains slashless canonical URLs | Canonical signal exists; no aggressive redirect is justified without route-level evidence. | Monitor; do not add redirect rules. |
| Sitemap and robots | 15 canonical entries; crawl allowed; sitemap declared | Healthy scope, no mass expansion. | Keep unchanged. |

## Page-experience findings

The mobile lab run identifies the homepage H1 as the largest contentful element at approximately 3.0 seconds. It reports zero total blocking time and zero cumulative layout shift, so there is no evidence for an interaction or layout-stability fix. It estimates 56 KiB of responsive-image savings across the unchanged official screenshots and app icon, and about 100 ms of potential render-blocking CSS savings.

These image findings are **not selected for P6 implementation**. Producing new responsive derivatives would create asset-management work around owner-supplied visuals for a modest estimated saving; the original performance optimization already protects visual fidelity. The CSS estimate is also modest and does not demonstrate a user-visible regression. They remain optional, evidence-tracked opportunities for a separately approved performance scope.

## Prioritized opportunity table

| Priority | Opportunity | Existing page/artifact | Evidence | Search intent or technical benefit | Impact | Effort | P6 action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Must Fix | Redirect HTTP requests to canonical HTTPS | Cloudflare Worker | HTTP root returned 200 rather than redirecting | Consolidates protocol signals and prevents duplicate access | High | Low | Implement a minimal 308 HTTPS redirect before route handling. |
| Must Fix | Align static root canonical and Open Graph URL with live canonical | `client/index.html` | Static root head ended in `/`; live runtime canonical does not | Removes a fallback-parser consistency gap | Medium | Low | Use slashless `https://mrcopy.pro` in static canonical and OG URL. |
| High-Value Improvement | Re-evaluate page experience after canonical repairs | Homepage | Mobile lab Performance 89, FCP/LCP 3.0 s | Establishes whether a reproducible user-facing issue remains | Medium | Low | Re-run audit after implementation; do not change screenshots in P6. |
| Optional | Create responsibly managed responsive screenshot derivatives | Shared Android-frame images | Estimated 56 KiB responsive-image savings | May reduce mobile transfer cost | Low–Medium | Medium | Do not implement without a dedicated asset-performance scope. |
| Optional | Investigate critical CSS strategy | Shared CSS | Estimated 100 ms render-blocking saving | May improve lab FCP | Low | Medium | Do not implement; avoid design/build risk for a modest lab estimate. |
| Do Not Implement Yet | Configure `www` host | Cloudflare/domain configuration | `www` returned 522 | May improve host canonicalization only if `www` is intentionally supported | Unknown | External configuration | Flag for owner; do not alter DNS/domain configuration. |
| Do Not Implement Yet | Add new content pages or generic articles | Entire content architecture | No distinct intent, entity, or information-gain gap found | Would inflate footprint and risk duplicate intent | Negative | High | Do not create pages. |
| Do Not Implement Yet | Add prices, trial, plan benefits, or Play URL | Pricing/CTAs | Owner has not supplied confirmed commercial data | Prevents inaccurate commercial claims | High risk | Low later | Keep deferred. |

## Information-gain and entity-consistency conclusions

No P6 content addition is selected. Existing pages already answer the verified Clipboard Manager, Floating Bubble, public link, shopping-link, Android limitation, local-storage, privacy, and account-deletion questions in their correct contexts. The terminology review found the established entity names consistently preserved: **Mr. Copy**, **Clipboard Manager**, **Floating Bubble**, **Link Previews**, **Shopping Links**, **Android Clipboard Access**, **local storage**, **Firebase account data**, and **Privacy & Security**. “Supported extractors” is not adopted as a public product term because it risks implying unsupported scraping; the approved language remains public-link preview and available metadata.

## Consolidation conclusion

No consolidation is recommended. The existing page groups retain differentiated intents: Privacy versus Privacy & Security, Floating Bubble versus permission and Android-access help, Link Previews versus Shopping Links, and the sitewide FAQ versus Link Previews FAQ. No redirects, deletion, or route merge should occur automatically.

## P6 implementation boundary

Only the two selected technical canonical improvements should be implemented. They do not create a page, alter website design, change DNS, publish commercial information, modify Android code, or introduce unsupported product claims.
