/** Design philosophy: Field Notes Utility — transparent support status is presented as a practical configuration record. */

import { ClipboardCheck, Mail, Wrench } from "lucide-react";
import { Link } from "wouter";
import { siteConfig } from "@/lib/site";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Contact() {
  usePageMeta({ title: "Contact", description: "Official Mr. Copy developer and support contact information.", path: "/contact" });
  return <div className="contact-page"><section className="page-hero contact-hero"><div className="shell page-hero-ledger"><aside className="hero-ledger-rail" aria-hidden="true"><span>07</span><i /></aside><div className="page-hero-copy"><p className="eyebrow">Contact record</p><h1>Official Mr. Copy contact details.</h1><p>Contact the Mr. Copy developer or use the account-request route for support-related requests.</p></div></div></section><section className="section"><div className="shell contact-grid"><article className="contact-status-card"><div className="contact-icon"><Mail size={22} aria-hidden="true" /></div><p className="eyebrow">Support email</p><h2><a className="contact-title-link" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></h2><p>For Mr. Copy support, email the official developer contact directly.</p></article><article className="contact-status-card"><div className="contact-icon"><Wrench size={22} aria-hidden="true" /></div><p className="eyebrow">Account requests</p><h2>Use the request-preparation page</h2><p>Account-deletion requests are prepared locally and are never presented as automatically completed.</p><Link className="text-link" href="/delete-account">Prepare an account request</Link></article><article className="contact-status-card"><div className="contact-icon"><ClipboardCheck size={22} aria-hidden="true" /></div><p className="eyebrow">Developer</p><h2>{siteConfig.developer.name}</h2><p>Official developer for Mr. Copy on Google Play.</p><a className="text-link" href={siteConfig.developer.instagramUrl} target="_blank" rel="noreferrer">Instagram: {siteConfig.developer.instagramHandle}</a></article></div></section></div>;
}
