/** Design philosophy: Field Notes Utility — factual page metadata with no unsupported product claims. */

import { useEffect } from "react";
import { formatPageTitle } from "@/lib/initialDocument";
import { SITE_URL, siteConfig } from "@/lib/site";
import type { StructuredData } from "@/lib/seo";

type PageMeta = { title: string; description: string; path?: string; schema?: StructuredData };

function setMeta(attribute: "name" | "property", key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) { element = document.createElement("meta"); element.setAttribute(attribute, key); document.head.appendChild(element); }
  element.content = value;
}

function setSchema(schema?: StructuredData) {
  const existing = document.head.querySelector<HTMLScriptElement>("script#mr-copy-page-schema");
  if (!schema) { existing?.remove(); return; }
  const element = existing ?? document.createElement("script");
  element.id = "mr-copy-page-schema";
  element.type = "application/ld+json";
  element.text = JSON.stringify(schema);
  if (!existing) document.head.appendChild(element);
}

export function usePageMeta({ title, description, path = "/", schema }: PageMeta) {
  useEffect(() => {
    const fullTitle = formatPageTitle(title);
    const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    let canonical = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = canonicalUrl;
    setSchema(schema);
  }, [title, description, path, schema]);
}
