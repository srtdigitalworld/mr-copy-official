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
import { appIconAsset, floatingIconAsset, heroContentListScreenshotAsset, supportedPlatforms, trashScreenshotAsset } from "@/lib/site";
import { usePageMeta } from "@/hooks/usePageMeta";

const benefits = [
  { icon: Copy, title: "One-Tap Copy", body: "Copy saved content back to your clipboard instantly." },
  { icon: Sparkles, title: "Floating Bubble", body: "Access recent clips without leaving the app you are currently using." },
  { icon: Hash, title: "Smart Hashtag Extraction", body: "Separate useful captions and hashtag information from supported content." },
  { icon: LockKeyhole, title: "Privacy-First Local Storage", body: "Clipboard items and saved local content remain on the device." },
];

const featureSnapshot = [
  { icon: ClipboardCheck, title: "Offline clipboard manager", body: "Keep useful text and references ready to reuse.", meta: "Text · local" },
  { icon: Link2, title: "Rich URL preview", body: "Save titles, descriptions, thumbnails, and metadata as a reference.", meta: "Public URL · metadata" },
  { icon: MapPinned, title: "Location references", body: "Keep practical business and location details within reach.", meta: "Location · reference" },
  { icon: FolderTree, title: "Folders & local search", body: "Use Recent, Starred, Pinned, folders, and search to find saved content.", meta: "Pinned · on-device" },
];

export default function Home() {
  usePageMeta({ title: "Mr. Copy — One Tap Copy", description: "Mr. Copy is a lightweight Android clipboard manager and content reference tool for copying, organizing, searching, and reusing useful information." });

  return <div>
    <section className="hero-section official-hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="hero-marker"><span>01</span><i aria-hidden="true" /><small>Capture · organize · reuse</small></div>
          <p className="eyebrow">Mr. Copy for Android</p>
          <h1>One Tap Copy</h1>
          <p className="hero-slogan">Auto-Save Copy.</p>
          <p className="hero-description">Extract, clean, organize, and copy useful text, hashtags, product details, and link previews with one tap.</p>
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

    <section className="section section-benefits"><div className="shell"><SectionHeading index="02" eyebrow="Designed for useful information" title={<>Small actions.<br />Useful context.</>} body="Mr. Copy keeps the pieces that matter close, so copying something useful does not become the end of finding it again." /><div className="benefit-grid">{benefits.map((benefit, index) => { const Icon = benefit.icon; return <article className="benefit-card" key={benefit.title}><div className="benefit-number">0{index + 1}</div><Icon size={21} aria-hidden="true" /><h3>{benefit.title}</h3><p>{benefit.body}</p></article>; })}</div></div></section>

    <section className="section organized-section"><div className="shell split-showcase"><div className="showcase-real-phone"><AndroidPhoneFrame src={trashScreenshotAsset} alt="Real Mr. Copy Android screen showing the Moved to Trash message and Undo action" /></div><div className="showcase-copy"><p className="eyebrow">Keep the useful part</p><h2>Organize references around the way you work.</h2><p>Keep copied text, links, product details, places, and hashtags together without turning your clipboard into a dead end.</p><ul className="check-list"><li><span><Star size={15} aria-hidden="true" /></span>Mark important items as starred or pinned.</li><li><span><FolderTree size={15} aria-hidden="true" /></span>Build custom folders for reusable context.</li><li><span><Search size={15} aria-hidden="true" /></span>Search saved local content when you need it again.</li></ul><Link href="/features" className="text-link">See the full feature set <ArrowRight size={16} aria-hidden="true" /></Link></div></div></section>

    <section className="section feature-index-section"><div className="shell"><SectionHeading index="03" eyebrow="Reference, not clutter" title="One place for the details worth keeping." body="A lightweight system for captured content, preview information, and the small details that make a saved item useful later." /><div className="feature-index-grid official-index-grid"><div className="official-icon-panel"><img src={appIconAsset} alt="Official Mr. Copy app icon" /><span>Quick access to recent clips</span><small>Official Mr. Copy Android identity</small></div><div className="feature-index-list">{featureSnapshot.map((feature, index) => { const Icon = feature.icon; return <article key={feature.title} className="index-row"><span>0{index + 1}</span><div><Icon size={19} aria-hidden="true" /><h3>{feature.title}</h3><p>{feature.body}</p><em>{feature.meta}</em></div></article>; })}</div></div></div></section>

    <section className="section platform-section"><div className="shell platform-layout"><div><p className="eyebrow">Supported URLs</p><h2>Turn public links into useful reference information.</h2><p>For supported public URLs, Mr. Copy can help organize preview information such as titles, descriptions, thumbnails, hashtags, location details, and product information. The application may request a public target website or metadata endpoint to retrieve that preview information.</p></div><div className="platform-chips">{supportedPlatforms.slice(0, 8).map((platform) => <span key={platform}>{platform}</span>)}</div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">A precise privacy promise</p><h2>Private where it counts.</h2><p>Mr. Copy does not upload your clipboard history to the cloud. Clipboard items, folders, and other saved local content remain on your device.</p><p className="muted-note">When you save a public URL, the app may make a request to that public target website or a metadata endpoint to retrieve preview information.</p><Link href="/privacy" className="text-link">Read our privacy policy <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><img src={appIconAsset} alt="Official Mr. Copy app icon" /><span>Local clipboard content</span><small>Public URLs may be requested for preview metadata.</small></div></div></section>

    <section className="section final-cta-section"><div className="shell final-cta"><div><p className="eyebrow">Make room for what matters</p><h2>Copy it once. Find it when you need it.</h2><p>Mr. Copy is built for Android users who want a cleaner way to keep useful information close.</p></div><StoreCta label="Get Mr. Copy on Google Play" /></div></section>
  </div>;
}
