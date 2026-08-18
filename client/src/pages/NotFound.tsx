/** Design philosophy: Field Notes Utility — a simple recovery path that preserves the product’s clear, quiet voice. */

import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
export default function NotFound() { usePageMeta({ title: "Page Not Found", description: "The requested Mr. Copy page could not be found.", path: "/404" }); return <section className="not-found"><div className="shell"><p className="eyebrow">404</p><h1>That reference is not here.</h1><p>The page may have moved, or the link may be incomplete.</p><Link href="/" className="button button-primary"><ArrowLeft size={17} aria-hidden="true" />Back to Mr. Copy</Link></div></section>; }
