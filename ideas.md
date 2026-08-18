# Mr. Copy Website Design Exploration

## Three Directions Considered

### 1. Field Notes Utility
**Very Brief Intro:** A calm, editorial productivity space inspired by a well-kept reference notebook. Strong information hierarchy, quiet tactile surfaces, and a confident violet signal make the product feel dependable rather than promotional.

**Probability:** 0.06

### 2. Soft System
**Very Brief Intro:** A bright, airy interface composed of layered cards, diffused lines, and generous white space. The feel is technical but human, as though the brand is a carefully tuned native application expanded into a web presence.

**Probability:** 0.08

### 3. Midnight Index
**Very Brief Intro:** A dark archival workspace with luminous metadata chips and high-contrast product views. This would create a compact, focused atmosphere for collecting useful information.

**Probability:** 0.03

## Chosen Direction — Field Notes Utility

### Design Movement
**Contemporary Swiss editorial utility.** The website borrows the clarity, restraint, typographic hierarchy, and thin ruled dividers of refined editorial systems, then grounds them in familiar Android-material cards and controls. It should look like a calm, considered product manual that happens to be interactive.

### Core Principles
1. **Quiet confidence over conversion noise.** Each page introduces the product with plain, verifiable language and avoids hype, fake signals, or visual spectacle.
2. **Information is the visual material.** Small labels, timestamps, metadata rows, and compact card examples communicate the product purpose more directly than decorative illustration.
3. **Native app continuity.** Mr. Copy violet, soft neutral surfaces, 14px cards, and compact control density echo the Android product without shrinking a mobile app into a browser.
4. **Useful at every scale.** The desktop composition is asymmetrical and spacious; mobile becomes a single clear reading path without orphaning actions or shrinking core information.

### Color Philosophy
The light interface uses near-paper **#F8F9FA** as a breathable field, with white cards and pale grey containers to establish calm layers. The exact Mr. Copy primary **#5C56E1** appears deliberately on actions, emphasis, UI samples, and status details—not as decoration. Charcoal **#111827** carries the reading experience, while soft slate secondary text gives support without visual competition. Dark mode shifts to deep slate **#0F172A**, maintaining the same structure with violet **#818CF8** as a clear interaction signal.

### Layout Paradigm
Pages follow a **ledger-and-canvas** model: a narrow editorial rail carries section markers, microcopy, and visual rhythm, while a wider content field carries message, interface examples, and product cards. Rather than repeated centered blocks, the home page alternates edge-aligned product demonstrations, staggered two-column narratives, and horizontal content bands. On mobile, the rail becomes an overline above each section and the canvas becomes a focused vertical sequence.

### Signature Elements
1. **Ledger rules:** Thin, subtly inset horizontal dividers and compact uppercase section coordinates organize major areas.
2. **Copy tokens:** Tiny pill-like reference tokens—URL, hashtag, pin, star, and local labels—recur in mockups and content descriptions.
3. **Violet registration line:** A precise 3px accent rule or bracket signals headings, selected navigation, and key product actions.

### Interaction Philosophy
Interactions should feel immediately understandable and pleasantly tactile. Buttons acknowledge a press with a short scale response, cards lift by only a few pixels on hover, and theme and mobile navigation controls preserve visible focus treatment. No action claims a real Google Play or support endpoint while those details remain unconfigured; those controls transparently explain their status.

### Animation
Motion remains optional and restrained. Sections may enter with a 180–240ms opacity and small upward transform, product cards use a 160ms hover transition, and the mobile sheet enters with a 220ms ease-out. All nonessential movement is disabled under `prefers-reduced-motion`. There is no parallax, auto-rotating content, or persistent animation.

### Typography System
Use **Roboto** for the main reading system, respecting the established application-family typography, with **Manrope** as an assertive but friendly display voice for H1 and important feature headings. Display headings use 700–800 weight and tight tracking; labels use 600–700 uppercase with measured letter spacing; body content uses Roboto 400–500 at a comfortable 1.5 line height. The result balances product-native practicality with a distinct editorial web hierarchy.

### Brand Essence
**Mr. Copy is the offline-first Android companion for turning useful fragments into reusable references, without losing the context that makes them useful.**

**Personality:** composed, precise, protective.

### Brand Voice
Headlines are factual and economical; CTAs are specific to their outcome; microcopy makes conditions and boundaries explicit rather than hiding them.

> “Keep the useful part within reach.”

> “Your clipboard stays on your device.”

### Wordmark & Logo
The mark is a compact **overlapping copy-sheet symbol** with a violet registration line—two softly rounded, offset sheets suggesting capture and reuse without implying extraction. The wordmark pairs the mark with a semi-bold Roboto label, with the period in “Mr.” aligned to the symbol’s small violet detail. The icon is used prominently in the header and as the favicon.

### Signature Brand Color
**Mr. Copy Violet — #5C56E1.** This is the unmistakable action and recognition color across light mode.

## Style Decisions

- Every page hero uses an explicit editorial coordinate and a ruled rail beside a wider information canvas; symmetrical centered landing-page composition is reserved only for the smallest supporting messages.
- Feature and pricing surfaces display a concrete reference artifact, such as a local-data marker, content token, metadata label, or plan status, rather than relying only on an icon and paragraph.
- Mr. Copy Violet remains a precise registration and action color. Broad decorative glow is avoided in favour of thin rules, selected states, tokens, and primary actions.
