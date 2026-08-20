/** Evidence basis: PI Report SecurityService, HiveAesCipher, Android Keystore, local/cloud data boundary, public requests, and account teardown. */

import { ArrowRight, Database, KeyRound, Link2, LockKeyhole, ShieldAlert, ShieldCheck, UserRoundCheck } from "lucide-react";
import { Link } from "wouter";
import SectionHeading from "@/components/SectionHeading";
import { StoreCta } from "@/components/SiteShell";
import { usePageMeta } from "@/hooks/usePageMeta";
import { p2Schemas } from "@/lib/seo";
import { appIconAsset } from "@/lib/site";

const privacyLayers = [
  { icon: Database, title: "Saved content stays local", body: "Saved clips, folders, search indexes, URL previews, and preferences are kept in encrypted local storage on the Android device." },
  { icon: KeyRound, title: "Encryption at rest", body: "Mr. Copy uses AES-256 GCM encryption for its local Hive database, with key material protected through Android Keystore-backed storage." },
  { icon: UserRoundCheck, title: "Account data is separate", body: "Google sign-in and Firebase account services support identity and entitlement records. They are not a cloud clipboard for your saved clips, folders, or link previews." },
];

export default function PrivacySecurity() {
  usePageMeta({
    title: "Local Encrypted Clipboard Storage for Android",
    description: "Learn how Mr. Copy keeps saved clips local with encrypted storage and clear account-data boundaries.",
    path: "/features/privacy-security",
    schema: p2Schemas.privacySecurity,
  });

  return <div className="features-page feature-detail-page">
    <section className="page-hero"><div className="shell page-hero-ledger"><aside className="hero-ledger-rail" aria-hidden="true"><span>04</span><i /></aside><div className="page-hero-copy"><nav aria-label="Breadcrumb" className="eyebrow"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/features">Features</Link><span aria-hidden="true"> / </span><span>Privacy &amp; Security</span></nav><h1>Keep saved clipboard content local to your Android device</h1><p>Mr. Copy separates your local saved library from the account information used for identity and entitlement, with encryption for saved local data at rest.</p><div className="hero-actions"><StoreCta /><Link href="/privacy" className="button button-secondary">Read the privacy policy <LockKeyhole size={17} aria-hidden="true" /></Link></div></div></div></section>

    <section className="section"><div className="shell"><SectionHeading index="05" eyebrow="Local-first architecture" title="A saved clipboard reference is not a cloud-synced item." body="Mr. Copy’s local library and account services have different roles. Understanding that boundary helps you decide what stays on your device and what is associated with your account." /><div className="feature-catalog">{privacyLayers.map((layer, index) => { const Icon = layer.icon; return <article className="catalog-card" key={layer.title}><div className="catalog-card-head"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={19} aria-hidden="true" /></div><h2>{layer.title}</h2><p>{layer.body}</p></article>; })}</div></div></section>

    <section className="section organization-band"><div className="shell visual-feature-grid reverse"><div><p className="eyebrow">What stays on your device</p><h2>Keep useful local references without turning them into a cross-device clipboard.</h2><p>Mr. Copy keeps your saved content library on the device. Signing in does not synchronize copied text, folders, or saved link previews to Cloud Firestore or another remote clipboard database.</p><ul className="check-list"><li><span><ShieldCheck size={15} aria-hidden="true" /></span>Saved text, URLs, folders, and previews remain part of the local Android library.</li><li><span><Database size={15} aria-hidden="true" /></span>Local search indexes and preferences are stored with that local application data.</li><li><span><UserRoundCheck size={15} aria-hidden="true" /></span>Account identity and entitlement metadata have a separate purpose from saved content.</li></ul></div><div className="privacy-asset-panel"><img src={appIconAsset} alt="Official Mr. Copy app icon" /><span>Local reference library</span><small>Saved clipboard content is not synchronized across devices.</small></div></div></section>

    <section className="section"><div className="shell support-section"><div><p className="eyebrow">Public links are a separate boundary</p><h2>Saving a public link can request public metadata.</h2><p>When you save a public URL, Mr. Copy may make a standard request to the public target website or a metadata endpoint to retrieve available reference details. This is separate from storing your saved link preview locally.</p><p className="muted-note">A public source can return partial information when it is private, login-required, rate-limited, blocked, slow, or does not expose the requested metadata.</p><Link href="/features/link-previews" className="text-link">See how public-link previews and source limits work <Link2 size={16} aria-hidden="true" /></Link></div><div className="platform-chip-board"><span>Public URLs</span><span>Available metadata</span><span>Local preview storage</span><span>Source-dependent results</span></div></div></section>

    <section className="section organization-band"><div className="shell support-section"><div><p className="eyebrow">Integrity and device-risk checks</p><h2>Use a warning as a signal when a device environment may be modified.</h2><p>Mr. Copy can surface a warning when its device checks indicate a modified or rooted environment. This is intended to help you make an informed decision about using the app with saved local references.</p><p className="muted-note">An integrity warning does not guarantee protection, prevent every compromise, or replace your own device-security decisions.</p><Link href="/privacy" className="text-link">Review the full data-handling policy <ArrowRight size={16} aria-hidden="true" /></Link><Link href="/delete-account" className="text-link">Open the account-deletion process <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="platform-chip-board"><span><ShieldAlert size={15} aria-hidden="true" /> Device warning</span><span>Modified environment</span><span>No security guarantee</span></div></div></section>

    <section className="section privacy-section"><div className="shell privacy-layout official-privacy-layout"><div className="privacy-copy"><p className="eyebrow">Security language with clear limits</p><h2>Encryption helps protect local data at rest; it is not a guarantee against every risk.</h2><p>Mr. Copy uses encrypted local storage and Android key protection for its saved library. The product does not claim to be unhackable, to provide a certification, or to automatically mask copied passwords or card numbers.</p><p className="muted-note">If you no longer want to keep account information, the account-deletion process removes the relevant account records through the verified deletion flow.</p><Link href="/privacy" className="text-link">Review the full data-handling policy</Link><Link href="/delete-account" className="text-link">Open the account-deletion process</Link></div><div className="privacy-asset-panel"><LockKeyhole size={42} aria-hidden="true" /><span>Clear storage boundaries</span><small>Encryption and account controls are explained without security guarantees.</small></div></div></section>
  </div>;
}
