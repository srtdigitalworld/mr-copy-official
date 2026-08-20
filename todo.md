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
