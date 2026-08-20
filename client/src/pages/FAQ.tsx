/** Evidence basis: approved P0–P3 feature, support, privacy, shopping, and account-deletion pages. */

import { ArrowRight, CircleHelp } from "lucide-react";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";
import { StoreCta } from "@/components/SiteShell";
import { siteFaqGroups } from "@/lib/faq";
import { usePageMeta } from "@/hooks/usePageMeta";
import { p4Schemas } from "@/lib/seo";

export default function FAQ() {
  usePageMeta({
    title: "Mr. Copy FAQ — Android Clipboard, Links & Privacy",
    description: "Get evidence-backed answers about Mr. Copy’s Android clipboard management, Floating Bubble, public link previews, local storage, account data, and deletion.",
    path: "/faq",
    schema: p4Schemas.siteFaq,
  });

  return <div className="features-page faq-page">
    <section className="page-hero"><div className="shell page-hero-ledger"><aside className="hero-ledger-rail" aria-hidden="true"><span>08</span><i /></aside><div className="page-hero-copy"><nav aria-label="Breadcrumb" className="eyebrow"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>FAQ</span></nav><h1>Mr. Copy FAQ</h1><p>Clear answers about Android clipboard management, saved public links, Floating Bubble access, local storage, account information, and deletion—each connected to the detailed page when you need more context.</p><div className="hero-actions"><StoreCta /><Link href="/features" className="button button-secondary">Explore Mr. Copy features <ArrowRight size={17} aria-hidden="true" /></Link></div></div></div></section>

    <section className="section"><div className="shell"><SectionHeading index="09" eyebrow="Evidence-backed answers" title="Find the boundary, then follow the relevant workflow." body="These answers summarize only verified current behavior. Each response points to the existing page with the full feature, support, privacy, or account context." /><div className="faq-groups">{siteFaqGroups.map((group) => <section className="faq-group" key={group.title}><div className="faq-group-heading"><p className="eyebrow">{group.eyebrow}</p><h2>{group.title}</h2></div><Accordion type="multiple" defaultValue={group.items.map((item) => item.id)} className="faq-accordion">{group.items.map((item) => <AccordionItem value={item.id} key={item.id}><AccordionTrigger className="faq-question">{item.question}</AccordionTrigger><AccordionContent className="faq-answer"><p>{item.answer}</p><Link href={item.href} className="text-link">{item.linkLabel} <ArrowRight size={16} aria-hidden="true" /></Link></AccordionContent></AccordionItem>)}</Accordion></section>)}</div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">A concise answer, with a detailed path</p><h2>Use the detailed page when you need a setup step or data boundary.</h2><p>The FAQ is a guide to the verified product surface, not a substitute for the feature, privacy, or account-deletion pages. It does not add unconfirmed pricing, trial, or platform claims.</p><Link href="/features/link-previews" className="text-link">See public-link previews and their source limits <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><CircleHelp size={42} aria-hidden="true" /><span>Verified answers only</span><small>Each answer matches a visible current product boundary.</small></div></div></section>
  </div>;
}
