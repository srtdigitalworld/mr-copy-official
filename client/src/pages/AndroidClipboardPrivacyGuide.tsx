/** Design philosophy: Field Notes Utility — practical Android education with general platform guidance clearly separated from verified Mr. Copy context. */

import { ClipboardCheck, Link2, LockKeyhole, ShieldAlert, Smartphone } from "lucide-react";
import { Link } from "wouter";
import SectionHeading from "@/components/SectionHeading";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ownedAssetSchemas } from "@/lib/seo";

const questions = [
  { icon: LockKeyhole, title: "Where is saved content kept?", body: "Look for a clear explanation of local storage, account data, and any network-dependent processing." },
  { icon: Link2, title: "How are public URLs treated?", body: "A product should distinguish a saved reference from any request used to retrieve available public preview metadata." },
  { icon: ClipboardCheck, title: "What Android controls apply?", body: "Clipboard availability and access can vary by Android version and platform protections." },
];

export default function AndroidClipboardPrivacyGuide() {
  usePageMeta({
    title: "Android Clipboard Privacy Guide",
    description: "A practical guide to Android clipboard privacy, local storage considerations, and questions to ask when choosing a clipboard manager.",
    path: "/guides/android-clipboard-privacy",
    schema: ownedAssetSchemas.androidClipboardPrivacy,
  });

  return <div className="features-page feature-detail-page">
    <section className="page-hero"><div className="shell page-hero-ledger"><aside className="hero-ledger-rail" aria-hidden="true"><span>17</span><i /></aside><div className="page-hero-copy"><nav aria-label="Breadcrumb" className="eyebrow"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>Android Clipboard Privacy Guide</span></nav><h1>Understand what happens after you copy.</h1><p>A practical guide to Android clipboard privacy, local storage considerations, and the questions worth asking before relying on a clipboard manager.</p></div></div></section>

    <section className="section"><div className="shell"><SectionHeading index="18" eyebrow="General Android information" title="Clipboard data can be useful and sensitive at the same time." body="Android’s clipboard framework can hold text, URLs, and other supported data. The privacy implications depend on the content, Android version, the app involved, and platform-level controls — not on a single universal rule." /><div className="feature-catalog">{questions.map((question, index) => { const Icon = question.icon; return <article className="catalog-card" key={question.title}><div className="catalog-card-head"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={19} aria-hidden="true" /></div><h2>{question.title}</h2><p>{question.body}</p></article>; })}</div></div></section>

    <section className="section organization-band"><div className="shell visual-feature-grid reverse"><div><p className="eyebrow">General privacy considerations</p><h2>Platform protections do not remove the need for careful choices.</h2><p>A copied fragment may contain a temporary note, verification code, address, payment detail, password, private message, or public link. Before copying sensitive information, consider whether it must be copied, where it may be reused, and whether an app explains its storage and access boundaries clearly.</p><a href="https://developer.android.com/privacy-and-security/risks/secure-clipboard-handling" target="_blank" rel="noreferrer" className="text-link">Read Android Developers’ secure clipboard handling guidance <ShieldAlert size={16} aria-hidden="true" /></a></div><div className="privacy-asset-panel"><ShieldAlert size={42} aria-hidden="true" /><span>Android stays in control</span><small>Clipboard access is governed by Android’s own protections and version-specific behavior.</small></div></div></section>

    <section className="section"><div className="shell support-section"><div><p className="eyebrow">Mr. Copy-specific context</p><h2>Saved local references and public URL previews have different boundaries.</h2><p>Mr. Copy describes saved clips, folders, and previews as stored on the Android device in encrypted local storage. It distinguishes account identity and entitlement information from cloud clipboard synchronization, which is not a documented Mr. Copy feature.</p><p>For a supported public URL, Mr. Copy may request the public target website or a metadata endpoint to retrieve available preview information. Private, login-walled, rate-limited, or blocked pages may return partial preview information.</p><Link href="/features/privacy-security" className="text-link">Read the Mr. Copy privacy and security overview <LockKeyhole size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><Smartphone size={42} aria-hidden="true" /><span>Scoped product context</span><small>Mr. Copy does not claim absolute security, privacy bypasses, or private-data extraction.</small></div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">Useful next steps</p><h2>Choose clarity over broad promises.</h2><p>Before using any clipboard manager, review what it saves, how it describes local storage, whether it separates public-link processing from saved content, and what Android settings or limitations can affect the workflow.</p><Link href="/help/android-clipboard-access" className="text-link">Read how Android clipboard access works with Mr. Copy</Link><Link href="/faq" className="text-link">See Mr. Copy’s frequently asked questions</Link></div><div className="privacy-asset-panel"><ClipboardCheck size={42} aria-hidden="true" /><span>Reader-first guide</span><small>This information remains useful even if you never install Mr. Copy.</small></div></div></section>
  </div>;
}
