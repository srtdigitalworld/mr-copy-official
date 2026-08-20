# P0 Production QA Notes

## Live homepage — 20 August 2026

The deployed `https://mrcopy.pro/` page returned the P0 title **“Mr. Copy — Android Clipboard Manager for Text & Links | Mr. Copy”** and the approved H1 **“Android clipboard management for text, links, and useful references.”**

The rendered page displayed the approved primary entity, local-content boundary, Floating Bubble qualification, and internal link to the existing Features page. The real owner-supplied hero screenshot initially appeared blank while the browser loaded the asset, then rendered correctly on the subsequent live page view. Direct production requests for the hero screenshot and floating icon each returned HTTP 200 with `image/webp` content.

## Live Features page — 20 August 2026

The deployed `https://mrcopy.pro/features` page returned the P0 title **“Mr. Copy Features — Clipboard, Floating Bubble & Link Previews | Mr. Copy”** and displayed the approved Clipboard Management, Floating Access, Link Intelligence, Shopping References, and Local Privacy and Security grouping.

The live content included the public-preview limitation for private, login-walled, rate-limited, and blocked pages. Its visible internal link directs users to the existing Privacy page for the relationship between public URL requests and local data handling. No proposed P1 route appeared as a live destination.

## Live Privacy page — 20 August 2026

The deployed `https://mrcopy.pro/privacy` page returned the P0 title **“Mr. Copy Privacy — Local Clipboard Data & Account Information | Mr. Copy”** and rendered the approved local-data, AES-256 GCM/Keystore, public-URL request, Firebase identity/entitlement, Firestore boundary, and account-deletion disclosures.

The page visibly links to the existing account-deletion flow and does not contain the removed, unsupported statement about an existing website analytics configuration.

## Live Pricing page — 20 August 2026

The deployed `https://mrcopy.pro/pricing` page returned the P0 title **“Mr. Copy Pricing and Availability | Mr. Copy”**. It visibly withholds price, trial, plan, product ID, and release-date claims pending commercial confirmation.

The page renders the approved existing-route link to Privacy for identity and entitlement data context. Its Google Play CTA remains in the intentional “link coming soon” state because no final production Play Store URL has been supplied.

## Live responsive capture — initial mobile pass

The live homepage captured correctly at 375×812: mobile navigation controls, the long approved H1, CTAs, local-content reassurance, and the real app screenshot all remained visible without horizontal overflow.

The first direct Chromium capture of the lazy-loaded Features route recorded only the shared shell before route content completed. The responsive QA procedure was therefore repeated with a virtual-time rendering allowance for all lazy P0 routes before conclusions were recorded.

## Live responsive capture — completed mobile pass

After the rendering allowance, the live Features page at 375×812 displayed its approved H1, group hierarchy, and descriptive content without observed horizontal overflow. The live Pricing page at the same viewport displayed the commercial-hold H1 and availability explanation with readable line wrapping and intact mobile navigation.

The live Privacy page at 375×812 retained its policy heading, introductory data-boundary explanation, last-updated record, and the first visible policy section without observed clipping or horizontal overflow.

## Live responsive capture — tablet pass

At 768×1024, the live homepage retained a readable approved H1, visible CTA pair, local-content reassurance, and unchanged real Android screenshot. The live Features page retained its group hierarchy and two-card tablet catalog layout without observed overflow or clipped content.

At the same tablet viewport, the live Privacy page kept its policy hierarchy, callout, and local-data disclosures legible. The live Pricing page retained readable commercial-hold messaging and its availability card without observed clipping or horizontal overflow.
