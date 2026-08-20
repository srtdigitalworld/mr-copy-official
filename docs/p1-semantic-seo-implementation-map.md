# Mr. Copy P1 Semantic SEO Implementation Map

## Approved routes

| Route | Purpose and primary intent | Verified entities and attributes | Required visible limits | Existing-route links only |
|---|---|---|---|---|
| `/features/clipboard-manager` | Explain how an Android user saves and organizes copied text and URLs. | Clipboard history, `ContentItem`, folders, Recent, Starred, pins, Trash, local search. | Text and URLs only; five pinned items; Recent auto-caps non-pinned items at 500; Trash has a 30-day recovery period; no cloud sync. | `/features`, `/features/floating-bubble`, `/privacy` |
| `/features/floating-bubble` | Explain quick reuse of saved content while working in another Android app. | Floating Bubble, overlay service, Recent, Starred, one-tap copy, edge collapse. | “Display over other apps” permission is required; Android system clipboard restrictions can require a bubble tap; no bypass or uninterrupted background-capture claim. | `/features`, `/features/clipboard-manager`, `/privacy` |

## Shared technical implementation

| Requirement | Implementation location |
|---|---|
| Lazy route registration | `client/src/App.tsx` |
| Visible breadcrumbs and matching breadcrumb schema | New P1 pages plus `client/src/lib/seo.ts` |
| Title, meta description, Open Graph URL, canonical, and JSON-LD | Existing `usePageMeta` hook supplied with route-specific P1 metadata/schema. |
| Crawl discovery | `client/public/sitemap.xml` receives only these two substantive published routes. |
| Contextual feature-hub links | `client/src/pages/Features.tsx`; no fake P2 links. |
| Claim and route regression coverage | `client/src/lib/seo.test.ts` |

## Explicit exclusions

The implementation does not create Link Previews, Privacy & Security, shopping, permission-help, Android-access-help, FAQ, pricing, or any P2 route. It does not add a Play Store URL, price, trial, plan, iOS/desktop, cloud-sync, downloader, scraper, image/file capture, unlimited-history, or security-guarantee claim.
