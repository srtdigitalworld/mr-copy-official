import { appIconAsset, SITE_URL, siteConfig } from "./site";
import { linkPreviewsFaqItems, siteFaqItems, type FaqItem } from "./faq";

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

function faqPageSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  } as const;
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
  linkPreviews: [
    ...nestedFeatureSchema(
      "Link Previews",
      "Save Links with Previews on Android",
      "Organize public links with available titles, descriptions, images, and platform details in Mr. Copy.",
      "/features/link-previews",
    ),
    faqPageSchema(linkPreviewsFaqItems),
  ] as const,
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

export const p4Schemas = {
  siteFaq: [
    {
      ...webPageSchema(
        "Mr. Copy FAQ — Android Clipboard, Links & Privacy",
        "Get evidence-backed answers about Mr. Copy’s Android clipboard management, Floating Bubble, public link previews, local storage, account data, and deletion.",
        "/faq",
      ),
      about: { "@id": applicationId },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
      ],
    },
    faqPageSchema(siteFaqItems),
  ] as const,
} as const;

export const p5Schemas = {
  terms: {
    ...webPageSchema(
      "Terms of Use",
      "Read the Mr. Copy service terms covering acceptable use, third-party references, subscriptions, account responsibilities, and limitations.",
      "/terms",
    ),
    about: { "@id": applicationId },
  },
  contact: {
    ...webPageSchema(
      "Contact",
      "Official Mr. Copy developer and support contact information.",
      "/contact",
    ),
    about: { "@id": applicationId },
  },
  deleteAccount: {
    ...webPageSchema(
      "Delete Account",
      "Securely delete a Mr. Copy Firebase account after Google authentication, while keeping local clipboard data and Google Play subscriptions separate.",
      "/delete-account",
    ),
    about: { "@id": applicationId },
  },
} as const;

export const ownedAssetSchemas = {
  press: [
    { ...webPageSchema("Mr. Copy Press & Media Resources", "Product facts, verified capabilities, media contact details, and useful references for Mr. Copy — an Android clipboard and reference manager.", "/press"), about: { "@id": applicationId } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Press & Media", item: `${SITE_URL}/press` }] },
  ],
  androidClipboardPrivacy: [
    { ...webPageSchema("Android Clipboard Privacy Guide", "A practical guide to Android clipboard privacy, local storage considerations, and questions to ask when choosing a clipboard manager.", "/guides/android-clipboard-privacy"), about: { "@id": applicationId } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Android Clipboard Privacy Guide", item: `${SITE_URL}/guides/android-clipboard-privacy` }] },
  ],
  saveCopiedTextAndroid: [
    { ...webPageSchema("How to Save Copied Text on Android", "A practical guide to saving copied text, organizing reusable references, and understanding Android clipboard limitations.", "/guides/save-copied-text-android"), about: { "@id": applicationId } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Save Copied Text on Android", item: `${SITE_URL}/guides/save-copied-text-android` }] },
  ],
} as const;
