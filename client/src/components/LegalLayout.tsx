/** Design philosophy: Field Notes Utility — calm legal reading pages use editorial coordinates and clear policy rails. */

import type { ReactNode } from "react";
import { FileText } from "lucide-react";

type LegalLayoutProps = { eyebrow: string; title: string; intro: string; updated?: string; children: ReactNode };

export default function LegalLayout({ eyebrow, title, intro, updated, children }: LegalLayoutProps) {
  return <article className="legal-page"><header className="legal-hero"><div className="shell legal-hero-grid"><div><div className="hero-marker"><span>POLICY</span><i aria-hidden="true" /><small className="page-rail-label">Mr. Copy reference</small></div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p>{updated ? <small>Last updated: {updated}</small> : null}</div><div className="legal-symbol" aria-hidden="true"><FileText size={28} /></div></div></header><div className="shell legal-content">{children}</div></article>;
}
