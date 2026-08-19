# Production Account-Deletion Backend Investigation

## Verified deployed state

- The live `https://mrcopy.pro/api/account-delete` route is served by the Cloudflare Worker. Safe probes return **405** for an unsupported method, **403** for a cross-origin request, and **401** for an invalid Firebase token sent with the expected origin headers.
- Cloudflare Worker Settings lists a secret named `FIREBASE_SERVICE_ACCOUNT` with an encrypted value. The dashboard does not expose its contents, so the secret value and private key have not been read or copied during this investigation.
- The Worker’s persisted observability logs and traces are currently disabled. The sandbox has no Cloudflare API token for non-persistent live tailing, so no historical trace exists for the reported valid-token backend failure.

## Current diagnosis boundary

- The frontend reaches the correct production Worker endpoint and receives a generic backend-failure response only after Firebase token verification has progressed past the public request guards.
- Exact runtime differentiation between a malformed service credential, failed service-account OAuth exchange, Firestore API failure, or Firebase Authentication API failure requires a narrowly scoped, non-destructive runtime credential check. No Firebase user, Firestore document, or subscription has been deleted during this investigation.
