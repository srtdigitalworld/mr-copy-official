# Mr. Copy P2 Semantic SEO Implementation Map

## Consolidation decision

| Candidate topic | Search intent and product relationship | Decision |
|---|---|---|
| URL Preview & Metadata | A user wants to turn a saved public link into a useful local reference. The verified primary entity is `UrlPreview`, nested inside a saved `ContentItem`. | Consolidate into `/features/link-previews`. |
| YouTube, Instagram, and Facebook public links | These are concrete public-link inputs for the same preview-and-reference workflow. A separate page for each platform would repeat the same intent and limitations. | Cover as a factual social-link section inside `/features/link-previews`. |
| Google Maps links | A public-link subtype with distinct verified output: place name, coordinates, Place ID, and route details. It remains part of the same saved-link workflow. | Cover as a factual maps-link section inside `/features/link-previews`. |
| Shopping product links | A public-link subtype with platform-specific parsers and available product-reference fields. The shopper’s task is still to save one public link with useful context. | Cover as a factual shopping-link section inside `/features/link-previews`; do not create a thin per-store or shopping route. |
| Privacy & Security / Local-First Architecture | A distinct trust/evaluation intent with unique data-boundary, encryption, account, public-request, and deletion content. | Create `/features/privacy-security`. |

## Approved P2 routes

| Route | Primary entity | Search intent | Verified visible scope | Internal links |
|---|---|---|---|---|
| `/features/link-previews` | `UrlPreview` | Save public links with useful available reference details. | URL title, description, image/thumbnail, domain/favicon, author/published date when exposed; public YouTube/Instagram/Facebook links; Maps place/coordinate/Place ID/route details; eight supported shopping platforms; partial-result and private/login/rate-limit boundaries. | `/features`, `/features/clipboard-manager`, `/features/floating-bubble`, `/features/privacy`, `/features/privacy-security` after it exists. |
| `/features/privacy-security` | Local encrypted clipboard storage | Understand how saved content, account data, public-link requests, encryption, and deletion relate. | AES-256 GCM Hive storage; Android Keystore-backed key material; local clips/folders/search indexes/previews/preferences; Firebase identity and entitlement metadata only; no cloud clipboard sync; public URL metadata requests; deletion relationship; no absolute guarantee. | `/features`, `/privacy`, `/delete-account`, `/features/clipboard-manager`, `/features/link-previews`. |

## Semantic questions visible on-page

### Link Previews

**IQQI:** What information can Mr. Copy keep with a saved public link? How does a URL preview become part of a saved reference? When can a link return only partial information?

**K2Q:** Can Mr. Copy save information from a public YouTube, Instagram, or Facebook link? What can it keep from a Google Maps link? Which shopping sites are supported? Can it access private or login-required pages?

### Privacy & Security

**IQQI:** Where do saved clips and previews live? What does local-first mean in Mr. Copy? What account data is separate from saved clipboard content?

**K2Q:** Does Google sign-in sync my saved clips? What happens when a public URL is saved? Is local storage encrypted? What does account deletion remove?

## Permanent P2 exclusions

The implementation must not claim cloud clipboard sync, cross-device sync, iOS/macOS/Windows support, private social-account access, downloader behavior, headless scraping, image/audio/file clipboard capture, guaranteed preview data, guaranteed security, public price/trial availability, or a feature route that does not exist.
