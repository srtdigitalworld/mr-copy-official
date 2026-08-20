/** Evidence basis: PI Report commerce extractors, UrlPreview/ECommerceProduct fields, Android Share Sheet, local folders, and public-source limits. */

import { FolderTree, Image, IndianRupee, Share2, ShieldAlert, ShoppingBag, Tags } from "lucide-react";
import { Link } from "wouter";
import SectionHeading from "@/components/SectionHeading";
import { StoreCta } from "@/components/SiteShell";
import { usePageMeta } from "@/hooks/usePageMeta";
import { p3Schemas } from "@/lib/seo";
import { supportedShoppingPlatforms } from "@/lib/site";

const referenceDetails = [
  { icon: Tags, title: "Recognizable product details", body: "When a supported public store page exposes them, a saved reference can keep a product title, brand, and specifications alongside the link." },
  { icon: IndianRupee, title: "Available price or MRP", body: "A product reference can include a price or MRP when that public source field is available at the time the link is resolved." },
  { icon: Image, title: "Useful visual context", body: "An available image and rating detail can make a saved product link easier to recognize in your local reference library." },
];

export default function ShoppingLinks() {
  usePageMeta({
    title: "Save Shopping Links and Product Details on Android",
    description: "Save supported shopping links from India-focused stores and keep available product details with your local Android references in Mr. Copy.",
    path: "/use-cases/shopping-links",
    schema: p3Schemas.shoppingLinks,
  });

  return <div className="features-page feature-detail-page">
    <section className="page-hero"><div className="shell page-hero-ledger"><aside className="hero-ledger-rail" aria-hidden="true"><span>05</span><i /></aside><div className="page-hero-copy"><nav aria-label="Breadcrumb" className="eyebrow"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/features/link-previews">Link Previews</Link><span aria-hidden="true"> / </span><span>Shopping Links</span></nav><h1>Keep shopping links and product details together on Android</h1><p>Mr. Copy can keep supported public shopping links as local references, with available product details that help you recognize a useful item later.</p><div className="hero-actions"><StoreCta /><Link href="/features/link-previews" className="button button-secondary">Explore public link previews <ShoppingBag size={17} aria-hidden="true" /></Link></div></div></div></section>

    <section className="section"><div className="shell"><SectionHeading index="06" eyebrow="Shopping-link workflow" title="Share a public product link, then keep the useful context." body="When you send a supported public product URL to Mr. Copy, the saved local reference can retain source details that are available from that page." /><div className="feature-catalog"><article className="catalog-card"><div className="catalog-card-head"><span>01</span><Share2 size={19} aria-hidden="true" /></div><h2>Send a link from Android</h2><p>Use the Android Share Sheet to send supported public text or a URL to Mr. Copy when you want to keep it with your other saved references.</p></article>{referenceDetails.map((detail, index) => { const Icon = detail.icon; return <article className="catalog-card" key={detail.title}><div className="catalog-card-head"><span>{String(index + 2).padStart(2, "0")}</span><Icon size={19} aria-hidden="true" /></div><h2>{detail.title}</h2><p>{detail.body}</p></article>; })}</div></div></section>

    <section className="section organization-band"><div className="shell support-section"><div><p className="eyebrow">Supported public store links</p><h2>Keep references from the stores you already use.</h2><p>Mr. Copy has dedicated handling for the supported public shopping platforms below. A result depends on the public URL and the product information that the source page makes available.</p><p className="muted-note">A saved product reference is not a marketplace listing, checkout, affiliate service, or guarantee of current price, stock, ratings, or availability.</p></div><div className="platform-chip-board">{supportedShoppingPlatforms.map((platform) => <span key={platform}>{platform}</span>)}<span>Public URLs only</span><span>When available</span></div></div></section>

    <section className="section"><div className="shell visual-feature-grid reverse"><div><p className="eyebrow">Keep research organized</p><h2>Use local folders for the shopping links you may return to.</h2><p>Once a link is saved, it remains part of the local Mr. Copy library. Folders, Starred items, pins, and search can help you keep product references alongside the text and links you already reuse.</p><Link href="/features/clipboard-manager" className="text-link">See how folders and saved references are organized <FolderTree size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><FolderTree size={42} aria-hidden="true" /><span>Local reference library</span><small>Product links stay with your other saved local items.</small></div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">Source limits and local storage</p><h2>Some product information can be incomplete.</h2><p>Mr. Copy can only keep details that a supported public product page exposes. A private, blocked, slow, changed, or rate-limited source can return partial details or no usable product reference information.</p><p className="muted-note">Resolving a public product link can make a standard request to the public source or metadata endpoint. The resulting saved reference remains in the local Android library, not a cloud clipboard.</p><Link href="/features/privacy-security" className="text-link">See how local storage and public-link requests are separated</Link><Link href="/privacy" className="text-link">Read the full privacy policy and account boundary</Link></div><div className="privacy-asset-panel"><ShieldAlert size={42} aria-hidden="true" /><span>Available source details</span><small>Product-reference fields can vary by public source and access conditions.</small></div></div></section>
  </div>;
}
