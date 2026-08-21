/** Design philosophy: Field Notes Utility — practical saved-reference guidance that puts the user’s workflow before product promotion. */

import { FolderHeart, Search, Sparkles, Star, TextCursorInput } from "lucide-react";
import { Link } from "wouter";
import SectionHeading from "@/components/SectionHeading";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ownedAssetSchemas } from "@/lib/seo";

const workflow = [
  { icon: TextCursorInput, title: "Save useful fragments intentionally", body: "Use a saved reference when an item must survive a change of task, app, or time — not just the next paste." },
  { icon: FolderHeart, title: "Keep a small organization system", body: "Categories that match real tasks are more useful than a large filing system you will not revisit." },
  { icon: Search, title: "Find by context, not memory alone", body: "A meaningful title, phrase, folder, or Starred state can shorten the return trip to a useful fragment." },
  { icon: Star, title: "Reuse with a quick review", body: "Before pasting an old item, check whether its wording, destination, availability, or personal context has changed." },
];

export default function SaveCopiedTextAndroid() {
  usePageMeta({
    title: "How to Save Copied Text on Android",
    description: "A practical guide to saving copied text, organizing reusable references, and understanding Android clipboard limitations.",
    path: "/guides/save-copied-text-android",
    schema: ownedAssetSchemas.saveCopiedTextAndroid,
  });

  return <div className="features-page feature-detail-page">
    <section className="page-hero"><div className="shell page-hero-ledger"><aside className="hero-ledger-rail" aria-hidden="true"><span>18</span><i /></aside><div className="page-hero-copy"><nav aria-label="Breadcrumb" className="eyebrow"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>Save Copied Text on Android</span></nav><h1>Save the copied text you will actually need again.</h1><p>A practical system for capturing useful fragments, keeping their context, and finding a saved reference when it matters later.</p></div></div></section>

    <section className="section"><div className="shell"><SectionHeading index="19" eyebrow="A practical saving system" title="A clipboard helps with the next paste. A saved reference helps later." body="Useful copied text gets lost when another item replaces the original context, or when you cannot remember where it came from. The solution is to decide which fragments deserve an intentional home." /><div className="feature-catalog">{workflow.map((step, index) => { const Icon = step.icon; return <article className="catalog-card" key={step.title}><div className="catalog-card-head"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={19} aria-hidden="true" /></div><h2>{step.title}</h2><p>{step.body}</p></article>; })}</div></div></section>

    <section className="section organization-band"><div className="shell visual-feature-grid reverse"><div><p className="eyebrow">Start with the real job</p><h2>Keep the item and the reason you saved it together.</h2><p>Try a compact set of categories that reflect real tasks: replies you reuse, research notes, product details, places, captions, or active projects. A favourite or Starred state is best reserved for references you will need repeatedly.</p><Link href="/features/clipboard-manager" className="text-link">See how Mr. Copy organizes saved clipboard references <FolderHeart size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><FolderHeart size={42} aria-hidden="true" /><span>Context makes a fragment useful</span><small>A raw URL or sentence is harder to use when it has no surrounding purpose.</small></div></div></section>

    <section className="section"><div className="shell support-section"><div><p className="eyebrow">Mr. Copy supported workflows</p><h2>Reuse local references without rebuilding the task.</h2><p>Mr. Copy supports saving copied text and supported public links as local references. The documented organization workflow includes Recent, Starred, pinned items, folders, search, and Trash. The Floating Bubble can open Recent and Starred items over another Android app after the relevant overlay permission is enabled.</p><p>For supported public URLs, available titles, descriptions, thumbnails, hashtags, location details, and product information may be retained with the saved reference. Availability depends on the public page and can be partial when a page is private, login-walled, rate-limited, or blocked.</p><Link href="/features/floating-bubble" className="text-link">Learn about Floating Bubble quick access <Sparkles size={16} aria-hidden="true" /></Link></div><div className="privacy-asset-panel"><Search size={42} aria-hidden="true" /><span>Find the saved reference</span><small>Search and organization can make a useful fragment easier to return to later.</small></div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">Android limitations and scope</p><h2>Fast access does not remove the need to review sensitive content.</h2><p>Only keep information you are comfortable saving, remove references that are no longer useful, and remember that Android platform protections can affect when newly copied content is available. Mr. Copy is not positioned as a cloud clipboard, cross-device synchronization service, downloader, scraper, OCR tool, or AI rewriting tool.</p><Link href="/guides/android-clipboard-privacy" className="text-link">Read the Android clipboard privacy guide</Link><Link href="/features/link-previews" className="text-link">Read about supported public link previews</Link></div><div className="privacy-asset-panel"><TextCursorInput size={42} aria-hidden="true" /><span>Reuse with care</span><small>Review a saved item before using it in a new context.</small></div></div></section>
  </div>;
}
