/** Evidence basis: PI Report clipboard capture, ContentItem, folders, pins, Trash, limits, and Android constraints. */

import { ArchiveRestore, ClipboardList, Copy, FolderTree, Pin, Search, Star } from "lucide-react";
import { Link } from "wouter";
import AndroidPhoneFrame from "@/components/AndroidPhoneFrame";
import SectionHeading from "@/components/SectionHeading";
import { StoreCta } from "@/components/SiteShell";
import { usePageMeta } from "@/hooks/usePageMeta";
import { p1Schemas } from "@/lib/seo";
import { createContentScreenshotAsset, trashScreenshotAsset } from "@/lib/site";

const workflowCards = [
  { icon: ClipboardList, title: "Save copied text and links", body: "Mr. Copy saves supported copied text and URLs as local items, so useful fragments do not have to disappear when the next item reaches the system clipboard.", tags: ["Text", "URLs"] },
  { icon: FolderTree, title: "Give each item useful context", body: "Use folders, Recent, Starred, pins, and local search to keep reusable information easy to find again instead of leaving it in one long list.", tags: ["Folders", "Find again"] },
  { icon: ArchiveRestore, title: "Recover before removal", body: "Move an item to Trash when it is no longer useful and recover it during the 30-day cleanup period if you need it again.", tags: ["Trash", "30-day recovery"] },
];

export default function ClipboardManager() {
  usePageMeta({
    title: "Android Clipboard Manager for Saved Text & Links",
    description: "Save and organize copied text and links locally with folders, Starred lists, pins, and Trash.",
    path: "/features/clipboard-manager",
    schema: p1Schemas.clipboardManager,
  });

  return <div className="features-page feature-detail-page">
    <section className="page-hero">
      <div className="shell page-hero-ledger">
        <aside className="hero-ledger-rail" aria-hidden="true"><span>01</span><i /></aside>
        <div className="page-hero-copy">
          <nav aria-label="Breadcrumb" className="eyebrow"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/features">Features</Link><span aria-hidden="true"> / </span><span>Clipboard Manager</span></nav>
          <h1>Save and organize copied text on Android</h1>
          <p>Mr. Copy saves supported copied text and URLs as local items, then helps you organize useful fragments with folders, Starred lists, pins, and Trash.</p>
          <div className="hero-actions"><StoreCta /><Link href="/features/floating-bubble" className="button button-secondary">Copy saved content without switching apps <Copy size={17} aria-hidden="true" /></Link></div>
        </div>
      </div>
    </section>

    <section className="section"><div className="shell">
      <SectionHeading index="02" eyebrow="Clipboard workflow" title="Capture context, then keep it useful." body="A clipboard item is more useful when you can find it, recognize it, and reuse it later without rebuilding the same information." />
      <div className="feature-catalog">{workflowCards.map((card, index) => { const Icon = card.icon; return <article className="catalog-card" key={card.title}><div className="catalog-card-head"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={19} aria-hidden="true" /></div><h2>{card.title}</h2><p>{card.body}</p><div className="catalog-artifact">{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>; })}</div>
    </div></section>

    <section className="section organization-band"><div className="shell visual-feature-grid reverse real-screenshot-feature-grid">
      <div><p className="eyebrow">Organize your library</p><h2>Use folders, Starred lists, and pins for the items you return to.</h2><p>Folders let you group related copied text and links. Starred items make an important reference easy to revisit, while pins keep a small set of frequently reused items close at hand.</p><ul className="check-list"><li><span><Star size={15} aria-hidden="true" /></span>Use Starred items when a saved reference matters more than the rest of your Recent list.</li><li><span><Pin size={15} aria-hidden="true" /></span>Pin up to five items when you need dependable quick access.</li><li><span><Search size={15} aria-hidden="true" /></span>Use local search to return to a saved text or link when you need it again.</li></ul></div>
      <AndroidPhoneFrame src={createContentScreenshotAsset} alt="Real Mr. Copy Android home screen with Create Content and Create Folder actions" className="feature-real-phone" />
    </div></section>

    <section className="section"><div className="shell support-section">
      <div><p className="eyebrow">History limits, explained</p><h2>Keep the history practical instead of unlimited.</h2><p>Recent automatically caps non-pinned items at 500 clips. This keeps the local library focused while your pinned items remain separate from that Recent limit.</p><p className="muted-note">Mr. Copy is for copied text and URLs. It does not add image, audio, file, or cloud-synchronized clipboard capture.</p></div>
      <div className="platform-chip-board"><span>500 Recent non-pinned items</span><span>5 pinned items</span><span>Text and URLs</span><span>Local library</span></div>
    </div></section>

    <section className="section feature-image-section"><div className="shell visual-feature-grid real-screenshot-feature-grid">
      <AndroidPhoneFrame src={trashScreenshotAsset} alt="Real Mr. Copy Android screen showing the Moved to Trash message and Undo action" className="feature-real-phone" />
      <div><p className="eyebrow">A clear recovery path</p><h2>Remove an item without losing your place immediately.</h2><p>Trash provides a recovery window before the 30-day cleanup cycle. This is helpful when you clear an item and then realize it still belongs in your saved reference library.</p><div className="feature-note"><ArchiveRestore size={19} aria-hidden="true" /><span>The screenshot is shown unchanged inside a website-only Android device frame.</span></div></div>
    </div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">Android and privacy boundaries</p><h2>Saved content stays local to your device.</h2><p>Android system restrictions can affect clipboard access in the background. Mr. Copy does not claim to capture every clipboard event in every Android state, and it does not synchronize saved clips to a cloud clipboard.</p><p className="muted-note">The Floating Bubble is the quick-access companion for Recent and Starred content when you are working in another Android app.</p><Link href="/features/floating-bubble" className="text-link">Learn how the Floating Bubble helps you copy saved content again <Copy size={16} aria-hidden="true" /></Link><Link href="/privacy" className="text-link">Read how local saved data is handled</Link></div><div className="privacy-asset-panel"><span>Local clipboard library</span><small>Account identity and entitlement records are separate from saved clips.</small></div></div></section>
  </div>;
}
