import { appIconAsset, SITE_URL, siteConfig } from "./site";

export type StructuredData = Record<string, unknown> | ReadonlyArray<Record<string, unknown>>;

const applicationId = `${SITE_URL}/#software-application`;
const applicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": applicationId,
  name: siteConfig.name,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Android",
  description: siteConfig.description,
  url: SITE_URL,
  image: new URL(appIconAsset, SITE_URL).toString(),
};

function nestedFeatureSchema(label: string, name: string, description: string, path: string) {
  const url = `${SITE_URL}${path}`;
  return [
    {
      ...webPageSchema(name, description, path),
      about: { "@id": applicationId },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Features", item: `${SITE_URL}/features` },
        { "@type": "ListItem", position: 3, name: label, item: url },
      ],
    },
  ] as const;
}

function webPageSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: SITE_URL,
    },
  };
}

export const p0Schemas = {
  home: [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: siteConfig.name,
      url: SITE_URL,
    },
    applicationSchema,
    {
      ...webPageSchema("Mr. Copy — Android Clipboard Manager", siteConfig.description, "/"),
      mainEntity: { "@id": applicationId },
    },
  ],
  features: {
    ...webPageSchema(
      "Mr. Copy Features — Clipboard, Floating Bubble & Link Previews",
      "Explore Mr. Copy’s Android clipboard history, Floating Bubble, link previews, local organization, and privacy-focused storage.",
      "/features",
    ),
    about: { "@id": applicationId },
  },
  privacy: {
    ...webPageSchema(
      "Mr. Copy Privacy — Local Clipboard Data & Account Information",
      "See how Mr. Copy handles local clips, public-link metadata requests, account identity, and deletion.",
      "/privacy",
    ),
    about: { "@id": applicationId },
  },
  pricing: {
    ...webPageSchema(
      "Mr. Copy Pricing and Availability",
      "Review Mr. Copy Android availability and Google Play billing information. Price, trial, and plan details are shown only when confirmed for release.",
      "/pricing",
    ),
    about: { "@id": applicationId },
  },
} as const;

export const p1Schemas = {
  clipboardManager: nestedFeatureSchema(
    "Clipboard Manager",
    "Android Clipboard Manager for Saved Text & Links",
    "Save and organize copied text and links locally with folders, Starred lists, pins, and Trash.",
    "/features/clipboard-manager",
  ),
  floatingBubble: nestedFeatureSchema(
    "Floating Bubble",
    "Floating Clipboard Bubble for Android",
    "Open Recent and Starred saved items over other Android apps and copy them again in one tap.",
    "/features/floating-bubble",
  ),
} as const;
