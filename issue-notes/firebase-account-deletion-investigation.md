# Firebase Account Deletion Investigation

## Verified project access

- The signed-in Firebase Console exposes one project: **Mr-Copy** with project ID `mr-copy`.
- The project overview shows an Android application named **Mr Copy Android**.
- **Firebase Authentication** and **Cloud Firestore** are enabled project shortcuts.
- The project uses the Spark plan. The overview reported recent Firestore reads and writes, confirming that Firestore is active.

## Current website evidence

- The website source contains no Firebase configuration, Firebase SDK usage, callable-function invocation, or server-side Firebase Admin integration.
- The existing `/delete-account` page is explicitly a local request-template form; it does not submit a deletion request or delete an account.
- Further read-only inspection is required to identify the existing authentication methods, Firestore collections, rules, and any reusable Cloud Function before designing an external deletion mechanism.

## Authentication findings

- Firebase Authentication contains seven existing user accounts. Individual account identifiers are intentionally not recorded in this project note.
- The only enabled sign-in provider is **Google**. Email/password and email-link providers are not enabled.
- A safe external deletion mechanism therefore cannot rely on a generic email-only request or Firebase email-link sign-in without an architecture change. Any secure reuse must verify control of the Google-authenticated Firebase account, or an existing trusted backend function must supply an equivalent verification flow.

## Firestore findings

- The default Cloud Firestore database is hosted in `asia-south1`.
- The only visible top-level collection is `users`. Its documents are keyed by Firebase Authentication UID and include the account UID, display name, timestamps, agreement-acceptance data, and plan, trial, and subscription-state fields.
- The inspected user document showed no visible subcollections. This is evidence from one document only; it is not sufficient to conclude that no other per-user subcollections or backend-managed collections exist.
- Any future deletion implementation must target the authenticated UID, not an email address, and must coordinate Firebase Authentication deletion with the corresponding `users/{uid}` document deletion.

## Functions findings

- No deployed Firebase Functions are present. The console instead shows the Functions onboarding screen and states that Functions requires a billing-plan upgrade.
- There is therefore no existing Firebase Functions deletion endpoint to reuse, and the current Spark plan cannot host a new Firebase Functions implementation.

## Security-rules findings

- The deployed Firestore rules allow an authenticated user to read, create, and update only their own `users/{uid}` document, with plan and entitlement immutability constraints.
- The rules define no client-side `delete` permission. This correctly prevents a browser client from directly deleting a Firestore user document.
- A secure external deletion flow therefore requires an authenticated, privileged server-side operation for Firebase Authentication deletion and Firestore cleanup. It must not weaken these Firestore rules or expose Firebase Admin credentials to the browser.

## Android and policy findings

- The separate Android repository was inspected read-only. It is an offline Flutter application using Hive local storage; its declared dependencies and source contain no Firebase SDK, Firebase configuration, account-deletion routine, or Google Play Billing integration.
- No existing Android deletion flow or reusable Android-side Firebase deletion implementation was found in the checked repository. The repository must not be modified for this website task.
- The existing privacy policy correctly distinguishes cloud account records from local clipboard and saved content. It is inconsistent only in one narrow respect: its Contact section still says that no official support contact is configured, although the website now displays the official developer email.

## Current implementation blocker

- The project has Google-only Firebase Authentication and no existing deletion backend. The current static Cloudflare deployment has no secure server endpoint for a privileged Firebase Admin operation, and Firebase Functions are unavailable on the current Spark plan.
- A production-safe implementation therefore needs an approved secure backend deployment path plus Firebase Admin credentials injected only as server-side secrets. This cannot be replaced with an email-only form, a browser-side Admin credential, or relaxed Firestore rules.

## Authentication settings findings

- Firebase Authentication exposes an Authorized Domains settings area, but this read-only investigation has not changed it or confirmed that `mrcopy.pro` is currently authorized.
- Any future Google Sign-In verification flow must explicitly confirm that `mrcopy.pro` is an authorized Firebase Authentication domain before publication.

## Authorized-domain finding

- `mrcopy.pro` is **not** currently listed in Firebase Authentication Authorized Domains. The existing entries are Firebase-hosted defaults and localhost only.
- Adding `mrcopy.pro` is necessary for the requested Firebase Google Sign-In flow, but it is a production authentication-configuration change and requires the owner’s confirmation immediately before it is submitted.

## Completed Firebase configuration

- After owner confirmation, `mrcopy.pro` was added as a Firebase Authentication Authorized Domain. The existing Android application and Firestore security rules were not changed.
- Firebase project settings confirm that the project currently has one Android app registration and no existing web app registration.
- The owner-approved web registration is being created without Firebase Hosting, preserving the existing Cloudflare deployment and avoiding any unrelated hosting change.
- The Firebase web app registration named **Mr Copy Website** is complete. Firebase Hosting remains disabled; only the public web SDK configuration will be used by the website.

## Cloudflare account finding

- The signed-in Cloudflare account exposes the Workers & Pages configuration surface and the `mrcopy.pro` zone. The account dashboard reported zero Worker invocations in the previous 24 hours, consistent with the current static-assets-only deployment.
- The existing Worker configuration can be extended with a narrow `/api/*` handler while preserving SPA asset delivery. Cloudflare’s static-assets binding supports invoking Worker code first only for selected API paths, then delegating all other requests to the existing asset collection.

## Zero-cost feasibility conclusion

- A secure Cloudflare Worker implementation is technically feasible without upgrading Firebase or purchasing another service. The Worker can use Web Crypto to verify Firebase ID-token signatures and claims, and can use the Firebase/Google REST APIs instead of the Node-only Firebase Admin SDK.
- The required privileged operations are: Firebase Authentication `projects.accounts.delete` with a UID derived only from a verified ID token; then deletion of `users/{uid}` through the Firestore REST API. Both operations require a server-side OAuth credential backed by a service account with the necessary IAM permissions.
- Cloudflare Workers Free supports encrypted Worker secrets, selected dynamic routes alongside static SPA assets, 100,000 requests per day, 50 subrequests per invocation, and 10 ms CPU time per request. The proposed operation uses a small, bounded set of sequential network calls and Web Crypto operations, but production deployment still requires targeted runtime testing.

## Remaining required production prerequisites

- Add `mrcopy.pro` to Firebase Authentication Authorized Domains.
- Register a Firebase Web app in the existing project to obtain the public Firebase web configuration for Google Sign-In; the project currently has only an Android app registration.
- Create a dedicated service account/key or equivalent short-lived credential arrangement, constrained to Firebase user deletion and deletion of the matching Firestore document. Store only its private key material in Cloudflare Worker secrets, never in source control or browser code.
- Before any destructive end-to-end test, create or identify an explicitly disposable test account; do not use an existing user account.
