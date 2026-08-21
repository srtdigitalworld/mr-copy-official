/** Design philosophy: Field Notes Utility — factual, publisher-useful product context inside the existing Mr. Copy shell. */

import { ClipboardCheck, FileText, Link2, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SectionHeading from "@/components/SectionHeading";
import { StoreCta } from "@/components/SiteShell";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ownedAssetSchemas } from "@/lib/seo";
import { appIconAsset, siteConfig } from "@/lib/site";

const facts = [
  { label: "Product", value: "Mr. Copy / One Tap Copy" },
  { label: "Category", value: "Android clipboard and reference management" },
  { label: "Primary use", value: "Save supported copied text and public links locally" },
  { label: "Organization", value: "Recent, Starred, pinned items, folders, search, and Trash" },
  { label: "Quick reuse", value: "Floating Bubble and supported Android sharing workflows" },
  { label: "Availability", value: "Pre-launch — no public Google Play listing is confirmed" },
];

export default function Press() {
  usePageMeta({
    title: "Mr. Copy Press & Media Resources",
    description: "Product facts, verified capabilities, media contact details, and useful references for Mr. Copy — an Android clipboard and reference manager.",
    path: "/press",
    schema: ownedAssetSchemas.press,
  });

  return <div className="features-page feature-detail-page">
    <section className="page-hero"><div className="shell page-hero-ledger"><aside className="hero-ledger-rail" aria-hidden="true"><span>16</span><i /></aside><div className="page-hero-copy"><nav aria-label="Breadcrumb" className="eyebrow"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>Press & Media</span></nav><h1>Useful information for coverage, reviews, and references.</h1><p>Mr. Copy is an Android clipboard and reference manager for saving copied text and public links locally, organizing useful fragments, and reusing them through supported workflows.</p><div className="hero-actions"><a className="button button-primary" href={`mailto:${siteConfig.supportEmail}`}><span>Contact Mr. Copy media</span><Mail size={17} aria-hidden="true" /></a><StoreCta /></div></div></div></section>

    <section className="section"><div className="shell"><SectionHeading index="17" eyebrow="Product facts" title="A concise product record, without unverified launch claims." body="The following points describe the currently documented product scope. Release dates, pricing, reviews, downloads, awards, funding, partnerships, and Google Play availability are not included because they are not publicly confirmed here." /><div className="feature-catalog">{facts.map((fact, index) => <article className="catalog-card" key={fact.label}><div className="catalog-card-head"><span>{String(index + 1).padStart(2, "0")}</span><FileText size={19} aria-hidden="true" /></div><h2>{fact.label}</h2><p>{fact.value}</p></article>)}</div></div></section>

    <section className="section organization-band"><div className="shell visual-feature-grid reverse"><div><p className="eyebrow">What Mr. Copy is designed to do</p><h2>Save the fragment. Keep the context.</h2><p>Mr. Copy helps Android users keep useful copied text and public links from becoming the end of finding them again. Supported references can be organized locally and returned to through search, folders, Starred items, pins, and Trash.</p><Link href="/features/clipboard-manager" className="text-link">Read about the clipboard manager <ClipboardCheck size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><img src={appIconAsset} width="54" height="54" alt="" aria-hidden="true" /><span>Local reference workflow</span><small>Saved local references are distinct from public URL preview requests.</small></div></div></section>

    <section className="section"><div className="shell support-section"><div><p className="eyebrow">Privacy and public-link boundaries</p><h2>Local saved content and public URL metadata are separate concepts.</h2><p>Mr. Copy documents saved clips, folders, and previews as local device content. When a user saves a supported public URL, the product may request the public target site or metadata endpoint to retrieve available preview information. Private, login-walled, rate-limited, or blocked pages may return partial preview information.</p><Link href="/features/privacy-security" className="text-link">Read the privacy and security overview <ShieldCheck size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><Link2 size={42} aria-hidden="true" /><span>Public link context</span><small>Public URLs can provide available metadata; Mr. Copy does not claim private-account extraction.</small></div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">Resources and media contact</p><h2>Use a relevant resource when it helps your audience.</h2><p>For feature context, see the clipboard manager, Floating Bubble, public link previews, privacy overview, and Android clipboard access help. The product is currently pre-launch; a Google Play installation link will appear only after public availability is verified.</p><a href={`mailto:${siteConfig.supportEmail}`} className="text-link">Email {siteConfig.supportEmail}</a><Link href="/features/floating-bubble" className="text-link">See the Floating Bubble workflow</Link><Link href="/features/link-previews" className="text-link">See how public link previews work</Link></div><div className="privacy-asset-panel"><Sparkles size={42} aria-hidden="true" /><span>Media resource</span><small>Factual product context for journalists, reviewers, creators, and publishers.</small></div></div></section>
  </div>;
}
