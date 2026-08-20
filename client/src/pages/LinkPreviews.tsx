/** Evidence basis: PI Report UrlPreview model, public-link pipeline, supported extractors, Maps parser, e-commerce parsers, and limits. */

import { Clock3, FileText, Image, Link2, MapPinned, Play, ShieldAlert, ShoppingBag, Tags } from "lucide-react";
import { Link } from "wouter";
import AndroidPhoneFrame from "@/components/AndroidPhoneFrame";
import SectionHeading from "@/components/SectionHeading";
import { StoreCta } from "@/components/SiteShell";
import { usePageMeta } from "@/hooks/usePageMeta";
import { p2Schemas } from "@/lib/seo";
import { createContentScreenshotAsset, supportedPublicPlatforms, supportedShoppingPlatforms } from "@/lib/site";

const previewDetails = [
  { icon: FileText, title: "Readable link details", body: "When a public page exposes them, Mr. Copy can keep a title, description, author, published date, domain, and favicon with the saved link." },
  { icon: Image, title: "Available visual context", body: "A preview can include an available image or thumbnail, helping a saved link remain recognizable in a local reference library." },
  { icon: Tags, title: "More than an unlabelled URL", body: "The saved link becomes a reference with available context instead of a bare string that you must open again to understand." },
];

export default function LinkPreviews() {
  usePageMeta({
    title: "Save Links with Previews on Android",
    description: "Organize public links with available titles, descriptions, images, and platform details in Mr. Copy.",
    path: "/features/link-previews",
    schema: p2Schemas.linkPreviews,
  });

  return <div className="features-page feature-detail-page">
    <section className="page-hero"><div className="shell page-hero-ledger"><aside className="hero-ledger-rail" aria-hidden="true"><span>03</span><i /></aside><div className="page-hero-copy"><nav aria-label="Breadcrumb" className="eyebrow"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/features">Features</Link><span aria-hidden="true"> / </span><span>Link Previews</span></nav><h1>Turn saved links into useful Android references</h1><p>Mr. Copy can attach available public-link details to a saved reference, so a URL can keep useful context such as a title, description, image, or platform detail.</p><div className="hero-actions"><StoreCta /><Link href="/features/clipboard-manager" className="button button-secondary">Organize saved text and links <Link2 size={17} aria-hidden="true" /></Link></div></div></div></section>

    <section className="section"><div className="shell"><SectionHeading index="04" eyebrow="URL preview workflow" title="Save the link. Keep the available context." body="A public URL can be resolved into a local UrlPreview record and kept alongside the copied text or link you saved." /><div className="feature-catalog">{previewDetails.map((detail, index) => { const Icon = detail.icon; return <article className="catalog-card" key={detail.title}><div className="catalog-card-head"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={19} aria-hidden="true" /></div><h2>{detail.title}</h2><p>{detail.body}</p></article>; })}</div></div></section>

    <section className="section feature-image-section"><div className="shell visual-feature-grid real-screenshot-feature-grid"><AndroidPhoneFrame src={createContentScreenshotAsset} alt="Real Mr. Copy Android screen with Create Content and Create Folder actions for saved local references" className="feature-real-phone" /><div><p className="eyebrow">A saved reference, not a downloader</p><h2>Use a public link as a starting point for the details you want to remember.</h2><p>Mr. Copy works with public URLs and the metadata that a target page makes available. It does not download videos, photos, reels, or other media from the link.</p><div className="feature-note"><Link2 size={19} aria-hidden="true" /><span>The owner-supplied app screen is shown unchanged inside a website-only Android device frame.</span></div></div></div></section>

    <section className="section organization-band"><div className="shell visual-feature-grid reverse"><div><p className="eyebrow">Supported public social links</p><h2>Keep available details from the public links you share.</h2><p>Mr. Copy includes verified handling for public YouTube, Instagram, and Facebook links. Available results depend on the URL and the metadata the source makes accessible at the time of the request.</p><ul className="check-list"><li><span><Play size={15} aria-hidden="true" /></span>Public YouTube links can keep available video-reference details and thumbnails.</li><li><span><Link2 size={15} aria-hidden="true" /></span>Public Instagram and Facebook links can return available preview information.</li><li><span><ShieldAlert size={15} aria-hidden="true" /></span>Private accounts, private groups, login-required pages, rate limits, and blocked pages can produce partial or fallback results.</li></ul></div><div className="platform-chip-board">{supportedPublicPlatforms.slice(0, 3).map((platform) => <span key={platform}>{platform}</span>)}<span>Public URLs only</span><span>When available</span></div></div></section>

    <section className="section"><div className="shell support-section"><div><p className="eyebrow">Google Maps links</p><h2>Keep a place reference with the useful parts of a Maps URL.</h2><p>For supported Google Maps links, Mr. Copy can identify available place names, coordinates, Place IDs, and route information. The result is a saved location reference, not a live navigation, booking, or mapping service.</p><Link href="/features/clipboard-manager" className="text-link">Save a Maps link alongside your other local references <MapPinned size={16} aria-hidden="true" /></Link></div><div className="platform-chip-board"><span>Place name</span><span>Coordinates</span><span>Place ID</span><span>Route details</span></div></div></section>

    <section className="section organization-band"><div className="shell visual-feature-grid"><div><p className="eyebrow">Shopping product links</p><h2>Keep available product reference details with a supported public store link.</h2><p>Mr. Copy has dedicated parsers for supported public shopping links. When source data is available, a saved reference can include a product title, price or MRP, brand, image, ratings, and specifications.</p><p className="muted-note">These details are reference information only. They are not a guarantee of current price, stock, ratings, or product availability.</p></div><div className="platform-chip-board">{supportedShoppingPlatforms.map((platform) => <span key={platform}>{platform}</span>)}</div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">Public requests and local storage</p><h2>Preview data has a clear boundary.</h2><p>To resolve a public link, Mr. Copy may make a standard request to the public target site or metadata endpoint. Saved link previews remain part of the local reference library rather than a cloud clipboard.</p><p className="muted-note">Preview resolution uses a limited request budget, so a URL can return partial information when a source is slow, blocks requests, or exposes less metadata.</p><Link href="/features/privacy-security" className="text-link">See how local storage and public-link requests are separated</Link><Link href="/privacy" className="text-link">Read the full privacy policy and account boundary</Link></div><div className="privacy-asset-panel"><Clock3 size={42} aria-hidden="true" /><span>Available metadata</span><small>Public-link details can vary by source and access conditions.</small></div></div></section>
  </div>;
}
