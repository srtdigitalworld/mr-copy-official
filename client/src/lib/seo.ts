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

function relatedRouteSchema(parentLabel: string, parentPath: string, label: string, name: string, description: string, path: string) {
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
        { "@type": "ListItem", position: 2, name: parentLabel, item: `${SITE_URL}${parentPath}` },
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

export const p2Schemas = {
  linkPreviews: nestedFeatureSchema(
    "Link Previews",
    "Save Links with Previews on Android",
    "Organize public links with available titles, descriptions, images, and platform details in Mr. Copy.",
    "/features/link-previews",
  ),
  privacySecurity: nestedFeatureSchema(
    "Privacy & Security",
    "Local Encrypted Clipboard Storage for Android",
    "Learn how Mr. Copy keeps saved clips local with encrypted storage and clear account-data boundaries.",
    "/features/privacy-security",
  ),
} as const;

export const p3Schemas = {
  shoppingLinks: relatedRouteSchema(
    "Link Previews",
    "/features/link-previews",
    "Shopping Links",
    "Save Shopping Links and Product Details on Android",
    "Save supported shopping links from India-focused stores and keep available product details with your local Android references in Mr. Copy.",
    "/use-cases/shopping-links",
  ),
  floatingBubblePermission: relatedRouteSchema(
    "Floating Bubble",
    "/features/floating-bubble",
    "Permission",
    "Enable Floating Bubble Permission on Android",
    "Learn why Mr. Copy needs Display over other apps and how to enable or disable the Floating Bubble permission in Android settings.",
    "/help/floating-bubble-permission",
  ),
  androidClipboardAccess: relatedRouteSchema(
    "Floating Bubble",
    "/features/floating-bubble",
    "Android Clipboard Access",
    "How Clipboard Access Works on Android",
    "Learn how Android clipboard protections affect Mr. Copy and why tapping the Floating Bubble can help on Android 13 and later.",
    "/help/android-clipboard-access",
  ),
} as const;
