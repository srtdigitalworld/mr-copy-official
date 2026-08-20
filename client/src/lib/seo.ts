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
