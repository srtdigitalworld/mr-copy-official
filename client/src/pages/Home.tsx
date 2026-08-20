/** Design philosophy: Field Notes Utility — a bold, spare Hero headline leads into authentic, unchanged product evidence. */

import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import ClipboardCheck from "lucide-react/dist/esm/icons/clipboard-check";
import Copy from "lucide-react/dist/esm/icons/copy";
import FolderTree from "lucide-react/dist/esm/icons/folder-tree";
import Hash from "lucide-react/dist/esm/icons/hash";
import Link2 from "lucide-react/dist/esm/icons/link-2";
import LockKeyhole from "lucide-react/dist/esm/icons/lock-keyhole";
import MapPinned from "lucide-react/dist/esm/icons/map-pinned";
import Search from "lucide-react/dist/esm/icons/search";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import Star from "lucide-react/dist/esm/icons/star";
import { Link } from "wouter";
import AndroidPhoneFrame from "@/components/AndroidPhoneFrame";
import SectionHeading from "@/components/SectionHeading";
import { StoreCta } from "@/components/SiteShell";
import { appIconAsset, floatingIconAsset, heroContentListScreenshotAsset, supportedPublicPlatforms, supportedShoppingPlatforms, trashScreenshotAsset } from "@/lib/site";
import { p0Schemas } from "@/lib/seo";
import { usePageMeta } from "@/hooks/usePageMeta";

type Benefit = { icon: typeof Copy; title: string; body: string; href?: string; linkLabel?: string };

const benefits: Benefit[] = [
  { icon: Copy, title: "Save copied text and links", body: "Keep supported copied text and public links ready to reuse instead of relying on a single clipboard slot." },
  { icon: FolderTree, title: "Organize useful items", body: "Use Recent, Starred, pinned items, folders, search, and Trash to find a saved reference again." },
  { icon: Sparkles, title: "Open quick access", body: "Use the Floating Bubble to open Recent and Starred items over another Android app after you enable its overlay permission.", href: "/features/floating-bubble", linkLabel: "See how Floating Bubble quick access works" },
  { icon: LockKeyhole, title: "Keep saved content local", body: "Saved clips, folders, and previews stay on your device in encrypted local storage." },
];

const featureSnapshot = [
  { icon: ClipboardCheck, title: "Clipboard history", body: "Keep copied text and links as local items you can return to later.", meta: "Text · local" },
  { icon: Link2, title: "Public link references", body: "Keep available titles, descriptions, images, and metadata with a saved public URL.", meta: "Public URL · metadata" },
  { icon: MapPinned, title: "Location and shopping references", body: "Keep available place details and supported product-link information with useful saved references.", meta: "Public · when available" },
  { icon: FolderTree, title: "Folders and local search", body: "Use Recent, Starred, pinned items, folders, and search to find saved content.", meta: "On-device · organized" },
];

export default function Home() {
  usePageMeta({ title: "Mr. Copy — Android Clipboard Manager for Text & Links", description: "Save copied text and public links locally on Android. Organize useful references and reuse them quickly with Mr. Copy.", schema: p0Schemas.home });

  return <div>
    <section className="hero-section official-hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="hero-marker"><span>01</span><i aria-hidden="true" /><small>Capture · organize · reuse</small></div>
          <p className="eyebrow">Mr. Copy for Android</p>
          <h1>Android clipboard management for text, links, and useful references.</h1>
          <p className="hero-slogan">One Tap Copy.</p>
          <p className="hero-description">Save copied text and public links locally, organize useful references, and reuse them quickly through the Mr. Copy Android interface and Floating Bubble.</p>
          <div className="hero-actions"><StoreCta /><Link href="/features" className="button button-secondary">Explore features <ArrowRight size={17} aria-hidden="true" /></Link></div>
          <div className="hero-reassurance"><LockKeyhole size={15} aria-hidden="true" /><span>Your clipboard content stays on your device.</span></div>
        </div>
        <div className="official-hero-visual real-screenshot-hero" aria-label="Real Mr. Copy app screenshot in Android phone frame">
          <AndroidPhoneFrame src={heroContentListScreenshotAsset} alt="Real Mr. Copy Android content-list home screen with saved copy categories" className="hero-real-phone" priority />
          <img className="official-hero-floating-icon" src={floatingIconAsset} alt="Official Mr. Copy floating icon" />
          <div className="hero-token token-one"><Copy size={14} aria-hidden="true" /> One-Tap Copy</div>
          <div className="hero-token token-two"><Star size={14} aria-hidden="true" /> Saved reference</div>
        </div>
      </div>
    </section>

    <section className="section section-benefits"><div className="shell"><SectionHeading index="02" eyebrow="Designed for useful information" title={<>Save the fragment.<br />Keep the context.</>} body="Mr. Copy helps Android users keep copied information from becoming the end of finding it again." /><div className="benefit-grid">{benefits.map((benefit, index) => { const Icon = benefit.icon; return <article className="benefit-card" key={benefit.title}><div className="benefit-number">0{index + 1}</div><Icon size={21} aria-hidden="true" /><h3>{benefit.title}</h3><p>{benefit.body}</p>{benefit.href && benefit.linkLabel ? <Link href={benefit.href} className="text-link mt-4">{benefit.linkLabel} <ArrowRight size={16} aria-hidden="true" /></Link> : null}</article>; })}</div></div></section>

    <section className="section organized-section"><div className="shell split-showcase"><div className="showcase-real-phone"><AndroidPhoneFrame src={trashScreenshotAsset} alt="Real Mr. Copy Android screen showing the Moved to Trash message and Undo action" /></div><div className="showcase-copy"><p className="eyebrow">Keep the useful part</p><h2>Organize references around the way you work.</h2><p>Keep copied text, links, product details, places, and hashtags together without turning your clipboard into a dead end.</p><ul className="check-list"><li><span><Star size={15} aria-hidden="true" /></span>Mark important items as starred or pinned.</li><li><span><FolderTree size={15} aria-hidden="true" /></span>Build custom folders for reusable context.</li><li><span><Search size={15} aria-hidden="true" /></span>Search saved local content when you need it again.</li></ul><Link href="/features" className="text-link">Explore clipboard, link, and quick-access features <ArrowRight size={16} aria-hidden="true" /></Link></div></div></section>

    <section className="section feature-index-section"><div className="shell"><SectionHeading index="03" eyebrow="Reference, not clutter" title="One place for the details worth keeping." body="A lightweight system for captured content, preview information, and the small details that make a saved item useful later." /><div className="feature-index-grid official-index-grid"><div className="official-icon-panel"><img src={appIconAsset} alt="Official Mr. Copy app icon" /><span>Quick access to recent clips</span><small>Official Mr. Copy Android identity</small></div><div className="feature-index-list">{featureSnapshot.map((feature, index) => { const Icon = feature.icon; return <article key={feature.title} className="index-row"><span>0{index + 1}</span><div><Icon size={19} aria-hidden="true" /><h3>{feature.title}</h3><p>{feature.body}</p><em>{feature.meta}</em></div></article>; })}</div></div></div></section>

    <section className="section platform-section"><div className="shell platform-layout"><div><p className="eyebrow">Supported public links</p><h2>Turn public links into useful reference information.</h2><p>For supported public URLs, Mr. Copy can keep available titles, descriptions, thumbnails, hashtags, location details, and product information with a saved reference. Private, login-walled, rate-limited, or blocked pages can return partial preview information.</p><Link href="/features/link-previews" className="text-link">Explore saved public-link previews and source limits <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="platform-chips">{[...supportedPublicPlatforms, ...supportedShoppingPlatforms].map((platform) => <span key={platform}>{platform}</span>)}</div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">A precise privacy boundary</p><h2>Keep saved content local to your device.</h2><p>Mr. Copy stores saved clips, folders, and URL previews on your Android device in encrypted local storage. Google/Firebase account data is used separately for identity and entitlement records, not cloud clipboard synchronization.</p><p className="muted-note">When you save a public URL, the app may make a request to that public target website or a metadata endpoint to retrieve preview information.</p><Link href="/privacy" className="text-link">Learn how local data is handled <ArrowRight size={16} aria-hidden="true" /></Link><Link href="/features/privacy-security" className="text-link">See how encrypted local storage and account data are separated <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><img src={appIconAsset} alt="Official Mr. Copy app icon" /><span>Local clipboard content</span><small>Public URLs may be requested for preview metadata.</small></div></div></section>

    <section className="section final-cta-section"><div className="shell final-cta"><div><p className="eyebrow">Make room for what matters</p><h2>Copy it once. Find it when you need it.</h2><p>Mr. Copy is built for Android users who want a clearer way to save, organize, and reuse useful information.</p></div><StoreCta label="Get Mr. Copy on Google Play" /></div></section>
  </div>;
}
