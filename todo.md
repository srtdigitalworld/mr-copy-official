# Official Asset Update Checklist

- [x] Upload the owner-supplied app icon, floating icon, and wordmark as managed website assets.
- [x] Replace the generated placeholder mark in the header, footer, favicon, and brand lockups.
- [x] Remove generated Mr. Copy product visuals and invented phone-interface representations.
- [x] Recompose hero and feature areas around the approved official assets and neutral interface patterns.
- [x] Validate desktop and mobile visual fidelity, required routes, and the production build.

## Real Screenshot Integration

- [x] Upload the two owner-supplied real app screenshots as managed website assets.
- [x] Build responsive Android phone frames that display each screenshot unchanged.
- [x] Replace neutral product-interface visual stand-ins with the authentic screenshots.
- [x] Validate the real screenshots on desktop and mobile without distortion or cropping.

## Hero Screenshot Update

- [x] Upload the new owner-supplied content-list screenshot as a managed asset.
- [x] Use that exact screenshot, unchanged, in the primary Hero Android phone mockup.
- [x] Validate the revised Hero at desktop and mobile sizes.

## Hero Copy Refinement

- [x] Make “One Tap Copy” the dominant Hero headline.
- [x] Place “Auto-Save Copy.” directly beneath the headline as the supporting slogan.
- [x] Preserve the unchanged real app screenshot inside the Hero phone mockup and validate both breakpoints.

## Lighthouse Performance Optimization

- [x] Establish clean mobile and desktop Lighthouse baselines without extension interference.
- [x] Reduce critical rendering-path costs, image weight, font work, and initial JavaScript.
- [x] Eliminate avoidable layout shifts and defer non-critical page work.
- [x] Re-audit mobile and desktop Lighthouse results and preserve visual fidelity.

## Full-Stack File Storage

- [x] Upgrade the static Mr. Copy project to the managed full-stack foundation.
- [x] Add a user-owned file metadata model and apply the database migration.
- [x] Implement authenticated server-side uploads using managed file storage.
- [x] Add a user-facing file library with loading, empty, error, and upload states.
- [x] Validate protected access, file persistence, routes, and the production build.

## Authenticated Storage Verification

- [x] Verify a signed-in user can upload a supported file, persist its metadata, and open the managed storage URL.
- [x] Verify the authenticated library retains uploaded metadata after reload and removes it from the user’s index on delete.

## Cloudflare Workers Builds Configuration

- [x] Inspect the existing build output and deployment configuration constraints.
- [x] Add a minimal valid `wrangler.jsonc` pointing static assets to `./dist/public` with SPA fallback support.
- [x] Validate the unchanged build output and Wrangler configuration.
- [x] Commit and push only the Cloudflare deployment configuration change to the connected repository.

## Cloudflare Production Image Delivery Repair

- [x] Inventory every landing-page image reference and test the corresponding mrcopy.pro URLs.
- [x] Trace the Worker static-assets build output and identify the packaging or path-resolution root cause.
- [x] Apply the minimal image asset packaging or URL-resolution fix without changing the UI.
- [x] Deploy the corrected Worker build and verify all production images return valid image content.

## Newly Reported Production Issue

- [x] Review the attached evidence and identify the specific remaining production defect.
- [x] Apply the minimal targeted repair without changing unrelated UI or deployment behavior.
- [x] Verify the repair in production and relevant local checks.

## Remaining Lighthouse Accessibility Verification

- [x] Ensure both brand lockups expose visible label text through their accessible names.
- [x] Resolve the mobile feature-index metadata contrast audit under the evaluated color-scheme condition.
- [x] Rerun production Lighthouse and confirm the remaining accessibility audits pass.
- [x] Record the exact confirmed PDF and production audit findings in the issue notes.

## Official Developer Information

- [x] Add Mr Pro Abdul, clickable email, and clickable Instagram profile to the existing footer without altering its layout.
- [x] Surface the same official developer details within the existing contact page without redundant information.
- [x] Verify desktop and mobile layout, contact-link destinations, and the production build.

## My Files Investigation Only

- [x] Trace the My Files navigation item, route, backend connections, storage behavior, and code history without changing implementation.
- [x] Report why it exists, what it currently does, and whether it should be kept or removed; await the owner’s decision before any implementation.

## My Files Complete Removal

- [x] Verify all My Files client code, server procedures, storage helpers, tests, and dependencies are exclusive before removal.
- [x] Inspect stored_files data and defer destructive database cleanup if any real user records remain.
- [x] Remove the My Files navigation, route, page, and exclusive application logic without touching shared infrastructure.
- [x] Validate the remaining website routes, source references, tests, production build, and desktop/mobile navigation.

## External Account Deletion

- [x] Inspect the existing Firebase authentication, data, functions, rules, and deletion workflow without modifying the Android app.
- [x] Confirm privacy-policy alignment and identify a reusable secure deletion mechanism or an integration blocker.
- [x] Implement only a verified Google/Firebase-identity-controlled, server-side external deletion flow at /delete-account.
- [x] Validate unauthorized, duplicate, expired, invalid, backend-failure, data-targeting, and responsive user flows before publication.

## Free Cloudflare Worker Account Deletion Feasibility

- [x] Prove or reject a zero-additional-cost Cloudflare Worker architecture for Firebase ID-token verification, Firebase Authentication deletion, and Firestore cleanup.
- [x] Confirm mrcopy.pro Firebase authorization, Worker-compatible secret handling, request limits, CORS, abuse controls, and exact UID-associated data scope without changing Firebase settings.
- [x] Implement Google-authenticated external deletion only if verified as secure, feasible, and free; otherwise report the limitation without an insecure workaround.

## Owner-Confirmed Secure Deletion Configuration

- [x] Add mrcopy.pro to Firebase Authorized Domains and register the minimum required Firebase Web app without changing Android configuration.
- [x] Create a dedicated least-privilege Firebase service account for the Worker and place its sensitive material only in Cloudflare Worker secrets.

## Deployed Account Deletion Backend Repair

- [x] Identify the deployed diagnostic failure using request evidence and logs without deleting real user data; historical valid-token traces predated log persistence and cannot be reconstructed, while the observed probe 400 was isolated to Firestore’s reserved document-ID validation.
- [x] Verify the deployed Worker secret binding, credential shape, token path, Firebase Authentication API access, Firestore API access, origin boundary, and production route through a successful read-only/no-op live probe.
- [x] Apply only the minimal backend repair and run non-destructive live verification before publishing.
- [x] Exercise the actual `/api/account-delete` endpoint using a user-controlled disposable Google/Firebase test account, with temporary stage evidence and no real-user action.
- [x] If that actual deletion flow fails, apply the smallest targeted repair and rerun the disposable-account verification.
- [x] Record final production evidence for the actual endpoint separately from the no-op service-permission probe.
- [x] Inspect the persisted Cloudflare trace for the newly reproduced disposable-account deletion failure and isolate the exact operation, HTTP status, and safe error context.
- [x] Confirm the existing persisted trace supplied sufficient non-sensitive evidence; add no further actual-flow observability beyond the targeted `InvalidCharacterError` diagnosis.
- [x] Remove the temporary public backend health probe after real-endpoint production verification to eliminate the diagnostic-only surface.
- [x] Publish the diagnostic-route removal and verify in production that `/api/account-delete/health` no longer resolves while the guarded `/api/account-delete` route remains available.

## Production Sitemap Canonical-Domain Repair

- [x] Locate the sitemap source and confirm every intended public canonical route.
- [x] Replace obsolete `mrcopy.app` sitemap URLs with canonical `mrcopy.pro` URLs without changing page design or routes.
- [x] Add a regression test or deterministic check to prevent an obsolete domain from returning in the sitemap.
- [x] Publish and verify `https://mrcopy.pro/sitemap.xml` returns valid sitemap content using only canonical production URLs.

## Semantic SEO Website Blueprint

- [x] Obtain the actual Product Intelligence Report or equivalent verified Android-code evidence required as the factual source of truth.
- [x] Build the product semantic model, entity graph, intent maps, and claims/limitations firewall from verified evidence only.
- [x] Produce the complete Semantic SEO Website Blueprint, including information architecture, page specifications, metadata, schema, internal links, roadmap, and developer handoff.

## P0 Semantic SEO Implementation

- [x] Map the approved P0 homepage, features, privacy, pricing-audit, metadata, canonical, schema, and internal-link requirements to existing components without creating P1 pages.
- [x] Implement P0 homepage content and metadata improvements using only verified clipboard-management, link-organization, floating-access, and local-data-boundary claims.
- [x] Implement the P0 feature hierarchy and feature-page metadata without creating separate P1 feature routes.
- [x] Align the existing Privacy page with the verified local-data, cloud-profile, external-metadata-request, and account-deletion boundaries without altering legal meaning.
- [x] Audit Pricing content and withhold unconfirmed price, trial, date, and entitlement-benefit claims.
- [x] Add accurate visible-content-backed structured data, page-specific canonical metadata, and approved internal links for P0 pages.
- [x] Add and run regression tests for P0 SEO metadata, schema, links, claims boundaries, build, responsive rendering, and accessibility.
- [x] Deliver the P0 completion report and stop for approval before P1 routes or topical pages.
- [x] Remove or correct the unsupported website-analytics statement in the Privacy page using only verified implementation evidence.
- [x] Add and verify the approved existing-route `/pricing` to `/privacy` internal link about account and entitlement data handling.

## P0 Finalization and Production QA

- [x] Keep the Google Play URL, price, currency, billing period, plan, trial, eligibility, date, and benefit claims withheld until explicit commercial confirmation is supplied.
- [x] Run final production QA for Homepage, Features, Privacy, and Pricing covering rendered metadata, schema, canonical, robots, sitemap, semantic content, and internal links.
- [x] Run final production technical QA covering routes, tests, TypeScript, build, console state, accessibility, and mobile/tablet/desktop rendering.
- [x] Document the final P0 QA findings, commercial verification status, and explicit P1 stop condition without starting P1.
- [x] Capture mobile and tablet responsive evidence from the live `https://mrcopy.pro` P0 pages and add the result to the final QA report.
- [x] Re-read and deterministically verify that the final P0 QA report contains the completed live production mobile and tablet responsive findings.

## P1 Semantic SEO Pages

- [x] Map the approved Clipboard Manager and Floating Bubble Blueprint specifications to verified Product Intelligence Report evidence, current site architecture, and existing design patterns.
- [x] Implement the `/features/clipboard-manager` page with verified clipboard workflow, content hierarchy, internal links, canonical metadata, Open Graph, JSON-LD, and accessible responsive layout.
- [x] Implement the `/features/floating-bubble` page with verified overlay permission, Recent/Starred quick access, one-tap copy workflow, internal links, canonical metadata, Open Graph, JSON-LD, and accessible responsive layout.
- [x] Update only necessary existing P0 navigation, Features links, sitemap, and shared SEO support for the two real P1 routes; do not modify unrelated pages or commercial claims.
- [x] Add regression coverage for P1 routes, metadata, JSON-LD, links, claims boundaries, and no-P2-route constraints.
- [x] Extend P1 regression coverage to prove deferred P2 routes are absent from routing and the sitemap.
- [x] Run P1 production and responsive QA across desktop, tablet, and mobile; verify routes, crawl files, schema, accessibility, tests, TypeScript, build, and console state.
- [x] Deliver the detailed P1 implementation report and stop before P2 pending explicit approval.
- [x] Run and record explicit accessibility verification for both P1 pages, including heading order, descriptive links, image alt text, and keyboard/focus behavior.
- [x] Verify the detailed P1 implementation report exists and covers files, pages, entities, internal links, metadata/schema, tests, build, responsive results, unresolved items, P2 recommendations, and the P2 stop condition.

## P2 Semantic SEO Feature Ecosystem

- [x] Consolidate the approved URL preview, supported social/public-link, Google Maps, and shopping-link topics into substantive verified routes without thin keyword-variation pages.
- [x] Map P2 entities, intents, attributes, semantic relationships, questions, evidence boundaries, and existing-route internal links from the Product Intelligence Report and Blueprint.
- [x] Implement the substantive URL Preview and supported public-link feature page with verified YouTube, Instagram, Facebook, Google Maps, and shopping-reference boundaries.
- [x] Implement the substantive Local-First Privacy and Security feature page with verified encrypted storage, Android Keystore, local-content/account-data boundary, and no-security-guarantee language.
- [x] Update only necessary shared P0/P1 feature-hub links, sitemap entries, route schemas, and regression coverage; preserve existing P0/P1 content unless a verified issue requires a correction.
- [x] Run P2 production QA for routes, internal links, metadata, canonical, Open Graph, JSON-LD, sitemap, robots, indexability, desktop/tablet/mobile layout, keyboard accessibility, tests, TypeScript, build, console state, and claims firewall.
- [x] Capture live production tablet and mobile evidence for both P2 routes at the required breakpoints.
- [x] Perform explicit live keyboard and console/network QA for both P2 routes, then record evidence-backed findings only.
- [x] Verify the detailed P2 implementation report contains the completed live QA evidence, then stop before P3 pending explicit approval.

## P3 Semantic SEO Support and Use-Case Pages

- [x] Map the approved P3.1 Shopping Links, P3.2 Floating Bubble Permission, and P3.3 Android Clipboard Access page specifications to verified Product Intelligence evidence, existing components, design patterns, intent, entities, IQQI/K2Q questions, and claims boundaries.
- [x] Implement P3.1 at `/use-cases/shopping-links` with verified supported-store reference fields, availability limits, contextual links, metadata, schema, sitemap entry, and regression coverage.
- [x] Implement P3.2 at `/help/floating-bubble-permission` with verified Android overlay-permission purpose, setup, disable path, troubleshooting boundaries, contextual links, metadata, schema, sitemap entry, and regression coverage.
- [x] Implement P3.3 at `/help/android-clipboard-access` with verified Android clipboard restrictions, bubble-tap behavior, user controls, contextual links, metadata, schema, sitemap entry, and regression coverage.
- [x] Run P3 production QA for routes, internal links, metadata, canonical, Open Graph, JSON-LD, sitemap, robots, indexability, desktop/tablet/mobile layout, keyboard accessibility, tests, TypeScript, build, console/network state, and claims firewall.
- [x] Deliver the detailed P3 report and stop before P4 pending explicit approval.

## P4 Semantic SEO FAQ Layer

- [x] Map P4.1 and P4.2 FAQ candidates to verified Product Intelligence evidence, existing approved pages, entities, intent, IQQI/K2Q questions, semantic relationships, contextual destinations, and claims boundaries; exclude unverified or duplicative questions.
- [x] Implement P4.1 at `/faq` as a substantive evidence-backed FAQ route covering only verified Mr. Copy questions with visible answer content, descriptive existing-route links, metadata, valid FAQPage/WebPage/BreadcrumbList schema where eligible, sitemap entry, and regression coverage.
- [x] Implement P4.2 as a substantive Link Previews FAQ section covering only verified URL-preview workflow, available metadata, fallback, local-storage, public-request, and Clipboard Manager relationship questions, with contextual links and regression coverage.
- [x] Run P4 production QA for all FAQ content and routes: claims evidence, internal links, metadata, canonical, Open Graph, JSON-LD parity with visible FAQs, sitemap, robots, indexability, desktop/tablet/mobile layout, keyboard accessibility, tests, TypeScript, build, console/network state, and no thin-keyword pages.
- [x] Deliver the detailed P4 report and stop before P5 pending explicit approval.

## P5 Semantic SEO Optimization and Topical Authority

- [x] Audit all live P0–P4 routes for primary/supporting entities, search intent, IQQI/K2Q coverage, metadata, H1, schema, breadcrumbs, indexability, internal links, content depth, terminology consistency, duplication, and orphan or weakly connected pages without making site changes first.
- [x] Produce the evidence-bound P5 semantic map, entity coverage audit, intent-gap analysis, internal-link map, content-consolidation findings, and a prioritized existing-page-only recommendation set; exclude unsupported or low-information proposals.
- [x] Implement only the audit-proven, evidence-backed P5 existing-page improvements to entity relationships, contextual links, content depth, metadata, and structured-data consistency; do not create new pages, delete or redirect routes, or publish commercial claims.
- [x] Run P5 production QA for every modified route and shared SEO artifact: claims evidence, internal links, metadata, canonical, Open Graph, JSON-LD, sitemap, robots, indexability, desktop/tablet/mobile layout, keyboard accessibility, tests, TypeScript, build, console/network state, and no mass-page expansion.
- [x] Deliver the detailed P5 audit and optimization report and stop before P6 pending explicit approval.

## P6 Focused Semantic SEO Growth and Search Visibility

- [x] Audit the complete post-P5 live site for SEO baseline, search-performance-data availability, entity and intent gaps, page depth, terminology consistency, internal links, duplicate intent, schema, crawl/indexation health, redirects, duplicate URL variants, mobile usability, accessibility, page experience, and link-worthy existing resources without changing the site first.
- [x] Produce the P6 prioritized opportunity table with Must Fix, High-Value Improvement, Optional, and Do Not Implement Yet categories; identify evidence, intent, impact, effort, and existing-page-only action, clearly marking unavailable Search Console data and any consolidation recommendation.
- [x] Implement only the selected high-confidence P6 improvements to existing pages, technical SEO, internal links, content depth, or page experience; do not create new pages, refactor unrelated code, publish commercial terms, or introduce unsupported claims.
- [x] Correct the P6 production asset-routing behavior so the tested HTTPS canonical redirect and static-root head are served by the live Worker for public pages, then revalidate the deployed behavior.
- [x] Prepare a non-executed backlink opportunity map and Google Play URL insertion readiness inventory using existing pages and verified integration locations only; do not submit, contact, pay, or publish anything externally.
- [x] Run P6 production QA for every modified route and shared artifact: claims evidence, internal links, metadata, canonical, Open Graph, JSON-LD, sitemap, robots, indexability, crawl variants, desktop/tablet/mobile layout, keyboard accessibility, tests, TypeScript, build, console/network state, and no mass-page expansion.
- [x] Deliver the detailed P6 baseline, opportunity, implementation, readiness, and QA report and stop before P7 pending explicit approval.

- [x] Prepare a planning-only P7 Scope & Priority Proposal grounded in verified product, blueprint, P0–P6, and current architecture evidence; explicitly defer insufficient Google Search Console data, Google Play URL, and commercial terms; do not implement, publish, or submit anything without separate approval.

## P7 Initial-HTML Metadata Parity and Genuine 404 Handling

- [x] Map the 15 canonical routes to their approved initial-response title, description, canonical, Open Graph, H1, and visible-content-backed JSON-LD requirements; preserve all P0–P6 content and claim boundaries.
- [x] Implement initial server-delivered metadata and schema parity for the 15 existing canonical routes without relying on client-side execution or creating duplicate/conflicting elements after React renders.
- [x] Implement a genuine HTTP 404 response for unknown document routes while preserving HTTP 200 for every valid route, static assets, HTTP→HTTPS redirect behavior, and `/api/account-delete`.
- [x] Run P7 local and production QA for all route/status/head/schema/sitemap/robots requirements, responsive design, keyboard access, console/network state, tests, TypeScript, and production build.
- [x] Deliver the P7 completion report and stop before P8 pending explicit owner approval.

## P8 Scope and Priority Planning Only

- [x] Prepare a tightly prioritized planning-only P8 Scope & Priority Proposal using verified product, blueprint, P0–P7, current architecture, and only sufficiently mature real Search Console evidence if available; defer unconfirmed Play/commercial data, do not create pages for keywords, and do not implement, publish, submit, or outreach without separate approval.

## P8 Read-Only Search Console and Technical Validation

- [x] Record Google Search Console access and data maturity; use actual data only when available and explicitly document insufficient-history limitations without inference.
- [x] Validate the approved representative valid routes and one test-only unknown route through Google URL Inspection, including indexability, robots/noindex, canonical, rendered output/resources, and existing enhancements.
- [x] Review Search Console sitemap, HTTPS/crawl, existing structured-data, and field Core Web Vitals reports without changing website behavior.
- [x] Deliver an evidence-only P8 validation report with route-specific findings, no-action outcomes, and any narrow fixes requiring separate approval; stop before implementation.
