/** Evidence basis: PI Report OverlayService, Recent/Starred panel, one-tap copy, edge collapse, overlay permission, and Android clipboard limits. */

import { ChevronLeft, ClipboardList, Copy, GripVertical, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "wouter";
import AndroidPhoneFrame from "@/components/AndroidPhoneFrame";
import SectionHeading from "@/components/SectionHeading";
import { StoreCta } from "@/components/SiteShell";
import { usePageMeta } from "@/hooks/usePageMeta";
import { p1Schemas } from "@/lib/seo";
import { createContentScreenshotAsset, floatingIconAsset } from "@/lib/site";

const bubbleSteps = [
  { icon: Sparkles, title: "Open quick access", body: "The Floating Bubble is a draggable Android overlay that opens a compact panel above the app you are using." },
  { icon: Star, title: "Choose a saved item", body: "The panel is designed around Recent and Starred items, so a saved reference can be reached without repeatedly navigating through the main app." },
  { icon: Copy, title: "Copy in one tap", body: "Choose a saved item and copy it back to the system clipboard when you need to paste the same text again." },
];

export default function FloatingBubble() {
  usePageMeta({
    title: "Floating Clipboard Bubble for Android",
    description: "Open Recent and Starred saved items over other Android apps and copy them again in one tap.",
    path: "/features/floating-bubble",
    schema: p1Schemas.floatingBubble,
  });

  return <div className="features-page feature-detail-page">
    <section className="page-hero"><div className="shell page-hero-ledger"><aside className="hero-ledger-rail" aria-hidden="true"><span>02</span><i /></aside><div className="page-hero-copy"><nav aria-label="Breadcrumb" className="eyebrow"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/features">Features</Link><span aria-hidden="true"> / </span><span>Floating Bubble</span></nav><h1>Copy saved text without leaving the app you are using</h1><p>Mr. Copy’s Floating Bubble opens a compact panel of Recent and Starred items so you can copy a saved reference again without repeatedly switching apps.</p><div className="hero-actions"><StoreCta /><Link href="/features/clipboard-manager" className="button button-secondary">Explore the clipboard library <ClipboardList size={17} aria-hidden="true" /></Link></div></div></div></section>

    <section className="section"><div className="shell"><SectionHeading index="03" eyebrow="Quick access workflow" title="Keep a useful saved item close while you work." body="The bubble is for retrieval and reuse: open it, choose from your local Recent or Starred items, then copy the item you need." /><div className="feature-catalog">{bubbleSteps.map((step, index) => { const Icon = step.icon; return <article className="catalog-card" key={step.title}><div className="catalog-card-head"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={19} aria-hidden="true" /></div><h2>{step.title}</h2><p>{step.body}</p></article>; })}</div></div></section>

    <section className="section feature-image-section"><div className="shell visual-feature-grid real-screenshot-feature-grid"><AndroidPhoneFrame src={createContentScreenshotAsset} alt="Real Mr. Copy Android screen showing its floating bubble beside the app interface" className="feature-real-phone" /><div><p className="eyebrow">A real product detail</p><h2>Use a compact bubble instead of another full-screen detour.</h2><p>The bubble appears over other Android apps after you enable the required overlay setting. Its panel is built around saved content, not around access to another app’s private information.</p><div className="feature-note"><img src={floatingIconAsset} alt="Official Mr. Copy floating icon" width="28" height="28" /><span>The owner-supplied app screen is shown unchanged inside a website-only Android device frame.</span></div></div></div></section>

    <section className="section organization-band"><div className="shell visual-feature-grid reverse"><div><p className="eyebrow">Less screen obstruction</p><h2>Move the handle, then collapse it to the edge.</h2><p>The Floating Bubble can be dragged and collapsed to the edge of the screen so it can stay available without occupying more space than necessary.</p><ul className="check-list"><li><span><GripVertical size={15} aria-hidden="true" /></span>Drag the bubble to a practical position on screen.</li><li><span><ChevronLeft size={15} aria-hidden="true" /></span>Collapse the handle to the edge when you want less obstruction.</li><li><span><Copy size={15} aria-hidden="true" /></span>Open it again when a Recent or Starred reference is needed.</li></ul></div><div className="privacy-asset-panel"><img src={floatingIconAsset} alt="Official Mr. Copy floating icon" /><span>Recent and Starred</span><small>Quick access to saved local content.</small></div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">Permission and Android requirements</p><h2>Why the bubble needs Display over other apps.</h2><p>Android requires the <strong>Display over other apps</strong> permission before Mr. Copy can render its Floating Bubble above another app. You choose whether to grant that permission in Android system settings.</p><p className="muted-note">Android clipboard protections can restrict background access. On Android 13 and later, you may need to tap the bubble so Mr. Copy can bring the required foreground interaction into focus before reading pending clipboard content.</p><Link href="/features/clipboard-manager" className="text-link">See how saved clipboard items are organized <ClipboardList size={16} aria-hidden="true" /></Link><Link href="/privacy" className="text-link">Read the local-data and account-data boundary</Link></div><div className="privacy-asset-panel"><ShieldCheck size={42} aria-hidden="true" /><span>Permission stays under your control</span><small>The bubble does not bypass Android privacy protections.</small></div></div></section>
  </div>;
}
