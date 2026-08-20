# P1 Production QA Notes

## Clipboard Manager — live route review

The deployed `https://mrcopy.pro/features/clipboard-manager` page returned the expected title **“Android Clipboard Manager for Saved Text & Links | Mr. Copy”**. The live page displayed a visible Home → Features → Clipboard Manager breadcrumb, the approved H1, the text/URL local-item workflow, folders, Recent, Starred, pins, local search, the five-pin limit, and the 30-day Trash recovery boundary.

The route’s contextual call to action points to the existing published Floating Bubble page, and the visible content does not introduce cloud sync, image/file capture, iOS/desktop, downloader, or unlimited-history positioning.

## Floating Bubble — live route review

The deployed `https://mrcopy.pro/features/floating-bubble` page returned the expected title **“Floating Clipboard Bubble for Android | Mr. Copy”**. The live page displayed a visible Home → Features → Floating Bubble breadcrumb, the approved H1, the Recent/Starred quick-access workflow, one-tap copy, draggable/edge-collapse behavior, and links to the published Clipboard Manager and Privacy pages.

The visible permission section accurately states that **Display over other apps** must be granted in Android settings. It also explains that Android 13 and later can require a bubble tap for the foreground interaction used to read pending clipboard content, without presenting that interaction as a privacy bypass.

## Direct mobile production capture — initial pass

The live Floating Bubble route rendered at 375×812 with readable breadcrumb, H1, description, CTA labels, and mobile navigation; no horizontal overflow was observed in the captured viewport.

The first direct Chromium request for the Clipboard Manager mobile capture timed out at the network layer despite the route returning HTTP 200 in the production route check. This was treated as an inconclusive capture rather than a layout result, and the route was queued for a retry before responsive QA can be marked complete.

The retry succeeded at 375×812. Clipboard Manager now has direct live mobile evidence showing a readable breadcrumb, H1, description, CTA labels, and the start of the Clipboard Workflow section without observed horizontal overflow. Together with the Floating Bubble capture, both P1 mobile routes have direct production responsive evidence.

## Direct tablet production capture

At 768×1024, both live P1 pages rendered readable Home → Features breadcrumbs, H1s, descriptions, CTA pairs, and two-column workflow-card layouts. The Clipboard Manager and Floating Bubble captures showed no observed clipping or horizontal overflow in the tablet viewport.

## Accessibility verification — Clipboard Manager

The live page exposes one page-topic H1 followed by logical workflow and supporting H2 sections. Visible breadcrumb anchors, contextual route links, and CTAs have descriptive labels. The real screenshot has a specific alternative description rather than a generic filename. Keyboard testing showed that the first Tab press reaches and visibly reveals the shared **Skip to main content** link, confirming a focusable route into the page’s main content.

## Accessibility verification — Floating Bubble

The live Floating Bubble page exposes a single feature-topic H1 followed by logical workflow and supporting H2 sections. Its Home/Features breadcrumb, Clipboard Manager and Privacy destination links, and CTAs have descriptive labels. The owner-supplied screenshot and floating icon carry specific alternative text. Keyboard testing again showed a visible **Skip to main content** focus target on the first Tab press, confirming that keyboard users receive the same main-content entry path.
