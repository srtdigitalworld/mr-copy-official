/** Design philosophy: Field Notes Utility — editorial section markers and direct, readable hierarchy. */

import type { ReactNode } from "react";
type SectionHeadingProps = { index: string; eyebrow: string; title: ReactNode; body?: string; align?: "left" | "center" };
export default function SectionHeading({ index, eyebrow, title, body, align = "left" }: SectionHeadingProps) { return <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}><div className="section-marker"><span>{index}</span><i aria-hidden="true" /></div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{body ? <p className="section-body">{body}</p> : null}</div>; }
