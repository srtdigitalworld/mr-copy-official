# Production Account-Deletion Backend Investigation

## Verified deployed state

- The live `https://mrcopy.pro/api/account-delete` route is served by the Cloudflare Worker. Safe probes return **405** for an unsupported method, **403** for a cross-origin request, and **401** for an invalid Firebase token sent with the expected origin headers.
- Cloudflare Worker Settings lists a secret named `FIREBASE_SERVICE_ACCOUNT` with an encrypted value. The dashboard does not expose its contents, so the secret value and private key have not been read or copied during this investigation.
- Persisted Cloudflare Worker invocation logs are enabled. The sandbox has no Cloudflare API token for non-persistent live tailing, but the authenticated Cloudflare dashboard now provides per-request diagnostic evidence.

## Historical diagnosis boundary

- The reported valid-token backend failure occurred before persisted Worker logs were enabled. Its exact historical backend stage therefore cannot be reconstructed from unavailable historical execution data. No credential problem should be inferred from that missing trace.

## Completed non-destructive production verification

The Cloudflare build for the final Worker revision completed successfully. A production `POST https://mrcopy.pro/api/account-delete/health` request with the exact approved origin returned **HTTP 200** and `{ "ready": true }`.

| Boundary | Verified production behavior | Data safety |
|---|---|---|
| Worker route and origin guard | The production route accepted the approved origin and returned the health response. Earlier safe negative checks confirmed method, origin, and invalid-token guards. | No account action occurred. |
| Encrypted Worker secret and service-account OAuth | The Worker exchanged the encrypted service-account secret for an access token. | The secret and private key were never read, logged, or copied. |
| Firestore read and deletion permission | The Worker read and issued a delete request for a fresh cryptographically random nonuser ID. | The ID does not identify a user; no Firestore record was created, read as user data, or deleted. |
| Firebase Authentication lookup and deletion permission | The Worker issued lookup and deletion requests for the same fresh nonuser ID. | The ID does not identify a user; no Firebase Authentication account was deleted. |

### Diagnostic correction made

The first temporary probe used an identifier matching Firestore’s reserved `__.*__` pattern and received HTTP 400 before it could exercise authorization. That was a probe-validation defect, not a service-account or permission failure. The final probe uses a fresh valid nonuser identifier and accepts Firebase Authentication’s valid empty-user lookup response. It now verifies the same access-token, Firestore, and Firebase Authentication boundaries used by the real deletion route without targeting a real account.

No Android application code, DNS setting, Firebase client secret, real Firebase account, Firestore user document, or subscription was modified during this repair.
