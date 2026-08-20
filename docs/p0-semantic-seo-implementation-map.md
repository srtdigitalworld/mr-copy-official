# Mr. Copy P0 Semantic SEO Implementation Map

This map translates the approved Semantic SEO Website Blueprint into the current Mr. Copy React application. It intentionally excludes all P1 routes and supporting topical pages.

| Blueprint requirement | Existing file or component | P0 action | Priority |
|---|---|---|---|
| Homepage category H1, value proposition, local-data trust context, and verified internal links | `client/src/pages/Home.tsx` | Modify existing semantic sections; preserve owner-supplied screenshots and visual layout. | P0 |
| Homepage title, description, canonical, Open Graph URL, and application schema | `client/src/hooks/usePageMeta.ts`, `client/index.html` | Extend existing metadata hook with route-backed JSON-LD; align static home defaults. | P0 |
| Homepage and P0 page schema builders | No existing schema component | Add a small typed SEO utility; no new dependency or tracking service. | P0 |
| Features semantic hierarchy | `client/src/pages/Features.tsx`, `client/src/components/SectionHeading.tsx`, `client/src/index.css` | Reorganize existing catalog into verified feature groups, add clear limits, retain real screenshots. | P0 |
| Privacy data boundary | `client/src/pages/Privacy.tsx`, `client/src/components/LegalLayout.tsx` | Refine legal-page copy in place; preserve legal layout and route. | P0 |
| Pricing audit | `client/src/pages/Pricing.tsx`, `client/src/lib/site.ts` | Remove unconfirmed public price, trial, date, and entitlement-benefit claims; retain Google Play billing context. | P0 |
| P0 internal links | `Home.tsx`, `Features.tsx`, `Privacy.tsx`, `Pricing.tsx` | Link only to existing relevant routes: Features, Privacy, Delete Account, Contact, and Pricing. | P0 |
| Canonical production host and crawl files | `client/src/lib/site.ts`, `client/public/sitemap.xml`, `client/public/robots.txt` | Preserve the completed `https://mrcopy.pro` canonical setup; do not add proposed P1 URLs. | P0 |
| Regression coverage | `client/src/lib/site.test.ts` plus a new SEO test | Extend Node-based Vitest checks for schema, metadata configuration, claims boundaries, and published P0 content. | P0 |

## Explicit P0 boundaries

No new `/features/*`, `/use-cases/*`, `/help/*`, FAQ, blog, or topical pages are added. The existing navigation, Android screenshots, Cloudflare deployment setup, Firebase account-deletion flow, and Google Play URL configuration are not refactored as part of this work.
