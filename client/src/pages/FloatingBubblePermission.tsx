/** Evidence basis: PI Report OverlayService, Android overlay window type, foreground service, user-controlled SYSTEM_ALERT_WINDOW permission, and Floating Bubble limits. */

import { EyeOff, ListChecks, Settings2, ShieldCheck, Sparkles, Undo2 } from "lucide-react";
import { Link } from "wouter";
import SectionHeading from "@/components/SectionHeading";
import { StoreCta } from "@/components/SiteShell";
import { usePageMeta } from "@/hooks/usePageMeta";
import { p3Schemas } from "@/lib/seo";

const setupSteps = [
  { icon: Settings2, title: "Open the Android permission control", body: "Open the Android system setting for Mr. Copy and look for the control labeled Display over other apps. The exact settings path can vary by Android device." },
  { icon: ShieldCheck, title: "Choose whether to allow the overlay", body: "Turn on Display over other apps only if you want Mr. Copy’s Floating Bubble to appear over the app currently on screen." },
  { icon: Sparkles, title: "Return to Mr. Copy", body: "After Android allows the overlay, Mr. Copy can render the Floating Bubble so its panel can surface saved Recent and Starred references." },
];

export default function FloatingBubblePermission() {
  usePageMeta({
    title: "Enable Floating Bubble Permission on Android",
    description: "Learn why Mr. Copy needs Display over other apps and how to enable or disable the Floating Bubble permission in Android settings.",
    path: "/help/floating-bubble-permission",
    schema: p3Schemas.floatingBubblePermission,
  });

  return <div className="features-page feature-detail-page">
    <section className="page-hero"><div className="shell page-hero-ledger"><aside className="hero-ledger-rail" aria-hidden="true"><span>06</span><i /></aside><div className="page-hero-copy"><nav aria-label="Breadcrumb" className="eyebrow"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/features/floating-bubble">Floating Bubble</Link><span aria-hidden="true"> / </span><span>Permission</span></nav><h1>How to enable the Mr. Copy Floating Bubble on Android</h1><p>Mr. Copy needs Android’s Display over other apps permission before it can show its Floating Bubble over another app. You stay in control of that setting.</p><div className="hero-actions"><Link href="/features/floating-bubble" className="button button-primary">Return to Floating Bubble <Sparkles size={17} aria-hidden="true" /></Link><StoreCta /></div></div></div></section>

    <section className="section"><div className="shell"><SectionHeading index="07" eyebrow="Overlay permission setup" title="Enable Display over other apps only when you want quick access." body="The Floating Bubble is an Android overlay. This permission lets Mr. Copy place its small saved-content panel above the app you are currently using." /><div className="feature-catalog">{setupSteps.map((step, index) => { const Icon = step.icon; return <article className="catalog-card" key={step.title}><div className="catalog-card-head"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={19} aria-hidden="true" /></div><h2>{step.title}</h2><p>{step.body}</p></article>; })}</div></div></section>

    <section className="section organization-band"><div className="shell visual-feature-grid reverse"><div><p className="eyebrow">What the bubble can access</p><h2>Open saved local references, not another app’s private data.</h2><p>The Floating Bubble is designed to surface Mr. Copy’s saved Recent and Starred items, then copy a selected saved item back to the Android clipboard. The overlay permission does not give Mr. Copy access to another app’s private information.</p><Link href="/features/floating-bubble" className="text-link">See how Recent and Starred quick access works <ListChecks size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><ShieldCheck size={42} aria-hidden="true" /><span>Permission stays under your control</span><small>An overlay is for quick access to saved local content.</small></div></div></section>

    <section className="section"><div className="shell support-section"><div><p className="eyebrow">Turn it off again</p><h2>Disable the overlay whenever you no longer want it on screen.</h2><p>Return to the same Android setting for Mr. Copy and turn off Display over other apps. The Floating Bubble will no longer be able to render above other apps until you choose to enable that setting again.</p><Link href="/features/privacy-security" className="text-link">Read the local-data and account-data boundary <EyeOff size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><Undo2 size={42} aria-hidden="true" /><span>Easy to reverse</span><small>Android settings controls whether the overlay can appear.</small></div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">Troubleshooting with clear limits</p><h2>If the bubble is not visible, check the Android setting first.</h2><p>Confirm that Display over other apps is enabled for Mr. Copy, then return to the app. Device makers can label or arrange Android settings differently, so the permission control may not appear in the same place on every phone.</p><p className="muted-note">Android clipboard protections still apply. Allowing the overlay does not bypass Android privacy protections or promise uninterrupted background clipboard access.</p><Link href="/help/android-clipboard-access" className="text-link">Understand Android clipboard access limitations</Link><Link href="/features/clipboard-manager" className="text-link">See how supported copied text and links are stored</Link><Link href="/privacy" className="text-link">Read the privacy policy and data boundary</Link></div><div className="privacy-asset-panel"><Settings2 size={42} aria-hidden="true" /><span>Check the Android control</span><small>Permission labels and paths can vary by device.</small></div></div></section>
  </div>;
}
