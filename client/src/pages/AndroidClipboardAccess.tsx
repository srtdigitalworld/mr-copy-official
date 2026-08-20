/** Evidence basis: PI Report ClipboardReaderActivity, Android 10+ clipboard restrictions, Android 13+ bubble-tap foreground focus fallback, saved local references, and text/URL capture scope. */

import { ClipboardCheck, Copy, Eye, ShieldAlert, Sparkles, Smartphone } from "lucide-react";
import { Link } from "wouter";
import SectionHeading from "@/components/SectionHeading";
import { StoreCta } from "@/components/SiteShell";
import { usePageMeta } from "@/hooks/usePageMeta";
import { p3Schemas } from "@/lib/seo";

const accessSteps = [
  { icon: Copy, title: "Copy supported text or a URL", body: "Mr. Copy is designed around supported copied text and URLs. Android decides when an app can read new clipboard content based on its own privacy protections." },
  { icon: Sparkles, title: "Tap the Floating Bubble when needed", body: "On Android 13 and later, tapping the Floating Bubble can bring Mr. Copy’s required foreground interaction into focus before it reads pending clipboard content." },
  { icon: ClipboardCheck, title: "Reuse saved local references", body: "The bubble can also open saved Recent and Starred items so you can copy an existing local reference again without repeatedly switching apps." },
];

export default function AndroidClipboardAccess() {
  usePageMeta({
    title: "How Clipboard Access Works on Android",
    description: "Learn how Android clipboard protections affect Mr. Copy and why tapping the Floating Bubble can help on Android 13 and later.",
    path: "/help/android-clipboard-access",
    schema: p3Schemas.androidClipboardAccess,
  });

  return <div className="features-page feature-detail-page">
    <section className="page-hero"><div className="shell page-hero-ledger"><aside className="hero-ledger-rail" aria-hidden="true"><span>07</span><i /></aside><div className="page-hero-copy"><nav aria-label="Breadcrumb" className="eyebrow"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/features/floating-bubble">Floating Bubble</Link><span aria-hidden="true"> / </span><span>Android Clipboard Access</span></nav><h1>How clipboard access works with Mr. Copy on Android</h1><p>Android privacy protections can limit clipboard access while an app is in the background. Mr. Copy explains that boundary clearly and uses a foreground interaction when Android requires it.</p><div className="hero-actions"><Link href="/features/floating-bubble" className="button button-primary">Return to Floating Bubble <Sparkles size={17} aria-hidden="true" /></Link><StoreCta /></div></div></div></section>

    <section className="section"><div className="shell"><SectionHeading index="08" eyebrow="Android clipboard boundary" title="Android controls access to newly copied content." body="Clipboard protections are part of Android’s privacy model. Mr. Copy does not promise that it can read every clipboard event in every Android version or background state." /><div className="feature-catalog">{accessSteps.map((step, index) => { const Icon = step.icon; return <article className="catalog-card" key={step.title}><div className="catalog-card-head"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={19} aria-hidden="true" /></div><h2>{step.title}</h2><p>{step.body}</p></article>; })}</div></div></section>

    <section className="section organization-band"><div className="shell visual-feature-grid reverse"><div><p className="eyebrow">Android 13 and later</p><h2>A bubble tap is a foreground interaction, not a privacy bypass.</h2><p>On Android 13 and later, a tap on the Floating Bubble can bring the required Mr. Copy interaction into focus before reading pending clipboard content. This follows Android’s user-interaction boundary; it does not bypass Android privacy protections.</p><Link href="/help/floating-bubble-permission" className="text-link">Learn why the Floating Bubble needs Display over other apps <Eye size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><Smartphone size={42} aria-hidden="true" /><span>Android stays in control</span><small>Foreground interaction can be required for new clipboard access.</small></div></div></section>

    <section className="section"><div className="shell support-section"><div><p className="eyebrow">When a new item is not available</p><h2>Use the bubble as a clear next step, then keep useful items locally.</h2><p>If a new copied item is not immediately available, tap the Floating Bubble and follow Android’s foreground interaction. Saved local Recent and Starred references remain available for reuse independently of a new clipboard event.</p><Link href="/features/clipboard-manager" className="text-link">See how supported copied text and URLs are saved locally <ClipboardCheck size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><ClipboardCheck size={42} aria-hidden="true" /><span>Saved local references</span><small>Recent and Starred items remain part of the local library.</small></div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">Clear limits and user controls</p><h2>Mr. Copy works with Android’s protections rather than around them.</h2><p>The Floating Bubble is optional and its overlay permission remains under your control in Android settings. Mr. Copy does not use that permission to access private data in another app, and it does not claim uninterrupted background clipboard access.</p><p className="muted-note">Saved clips, folders, and previews remain local to the Android device. Account identity and entitlement metadata serve a separate purpose from saved clipboard content.</p><Link href="/features/privacy-security" className="text-link">See how local storage and account data are separated</Link><Link href="/privacy" className="text-link">Read the full privacy policy and data boundary</Link></div><div className="privacy-asset-panel"><ShieldAlert size={42} aria-hidden="true" /><span>Privacy boundary respected</span><small>The overlay does not grant access to another app’s private content.</small></div></div></section>
  </div>;
}
