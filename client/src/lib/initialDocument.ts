import { canonicalPublicRoutes, type CanonicalPublicRoute } from "@shared/publicRoutes";
import { ownedAssetSchemas, p0Schemas, p1Schemas, p2Schemas, p3Schemas, p4Schemas, p5Schemas, type StructuredData } from "./seo";

export type InitialDocument = {
  path: CanonicalPublicRoute;
  title: string;
  description: string;
  h1: string;
  schema: StructuredData;
};

export function formatPageTitle(title: string): string {
  return title === "Mr. Copy" ? title : `${title} | Mr. Copy`;
}

export const initialDocuments: readonly InitialDocument[] = [
  { path: "/", title: "Mr. Copy — Android Clipboard Manager for Text & Links", description: "Save copied text and public links locally on Android. Organize useful references and reuse them quickly with Mr. Copy.", h1: "Android clipboard management for text, links, and useful references.", schema: p0Schemas.home },
  { path: "/features", title: "Mr. Copy Features — Clipboard, Floating Bubble & Link Previews", description: "Explore Mr. Copy’s Android clipboard history, Floating Bubble, link previews, local organization, and privacy-focused storage.", h1: "Android clipboard, link, and reference tools.", schema: p0Schemas.features },
  { path: "/features/clipboard-manager", title: "Android Clipboard Manager for Saved Text & Links", description: "Save and organize copied text and links locally with folders, Starred lists, pins, and Trash.", h1: "Save and organize copied text on Android", schema: p1Schemas.clipboardManager },
  { path: "/features/floating-bubble", title: "Floating Clipboard Bubble for Android", description: "Open Recent and Starred saved items over other Android apps and copy them again in one tap.", h1: "Copy saved text without leaving the app you are using", schema: p1Schemas.floatingBubble },
  { path: "/features/link-previews", title: "Save Links with Previews on Android", description: "Organize public links with available titles, descriptions, images, and platform details in Mr. Copy.", h1: "Turn saved links into useful Android references", schema: p2Schemas.linkPreviews },
  { path: "/features/privacy-security", title: "Local Encrypted Clipboard Storage for Android", description: "Learn how Mr. Copy keeps saved clips local with encrypted storage and clear account-data boundaries.", h1: "Keep saved clipboard content local to your Android device", schema: p2Schemas.privacySecurity },
  { path: "/use-cases/shopping-links", title: "Save Shopping Links and Product Details on Android", description: "Save supported shopping links from India-focused stores and keep available product details with your local Android references in Mr. Copy.", h1: "Keep shopping links and product details together on Android", schema: p3Schemas.shoppingLinks },
  { path: "/help/floating-bubble-permission", title: "Enable Floating Bubble Permission on Android", description: "Learn why Mr. Copy needs Display over other apps and how to enable or disable the Floating Bubble permission in Android settings.", h1: "How to enable the Mr. Copy Floating Bubble on Android", schema: p3Schemas.floatingBubblePermission },
  { path: "/help/android-clipboard-access", title: "How Clipboard Access Works on Android", description: "Learn how Android clipboard protections affect Mr. Copy and why tapping the Floating Bubble can help on Android 13 and later.", h1: "How clipboard access works with Mr. Copy on Android", schema: p3Schemas.androidClipboardAccess },
  { path: "/faq", title: "Mr. Copy FAQ — Android Clipboard, Links & Privacy", description: "Get evidence-backed answers about Mr. Copy’s Android clipboard management, Floating Bubble, public link previews, local storage, account data, and deletion.", h1: "Mr. Copy FAQ", schema: p4Schemas.siteFaq },
  { path: "/pricing", title: "Mr. Copy Pricing and Availability", description: "Review Mr. Copy Android availability and Google Play billing information. Price, trial, and plan details are shown only when confirmed for release.", h1: "Pricing details are being confirmed.", schema: p0Schemas.pricing },
  { path: "/privacy", title: "Mr. Copy Privacy — Local Clipboard Data & Account Information", description: "See how Mr. Copy handles local clips, public-link metadata requests, account identity, and deletion.", h1: "Your information, explained plainly.", schema: p0Schemas.privacy },
  { path: "/terms", title: "Terms of Use", description: "Read the Mr. Copy service terms covering acceptable use, third-party references, subscriptions, account responsibilities, and limitations.", h1: "Terms for using Mr. Copy.", schema: p5Schemas.terms },
  { path: "/delete-account", title: "Delete Account", description: "Securely delete a Mr. Copy Firebase account after Google authentication, while keeping local clipboard data and Google Play subscriptions separate.", h1: "Delete your Mr. Copy account.", schema: p5Schemas.deleteAccount },
  { path: "/contact", title: "Contact", description: "Official Mr. Copy developer and support contact information.", h1: "Official Mr. Copy contact details.", schema: p5Schemas.contact },
  { path: "/press", title: "Mr. Copy Press & Media Resources", description: "Product facts, verified capabilities, media contact details, and useful references for Mr. Copy — an Android clipboard and reference manager.", h1: "Useful information for coverage, reviews, and references.", schema: ownedAssetSchemas.press },
  { path: "/guides/android-clipboard-privacy", title: "Android Clipboard Privacy Guide", description: "A practical guide to Android clipboard privacy, local storage considerations, and questions to ask when choosing a clipboard manager.", h1: "Understand what happens after you copy.", schema: ownedAssetSchemas.androidClipboardPrivacy },
  { path: "/guides/save-copied-text-android", title: "How to Save Copied Text on Android", description: "A practical guide to saving copied text, organizing reusable references, and understanding Android clipboard limitations.", h1: "Save the copied text you will actually need again.", schema: ownedAssetSchemas.saveCopiedTextAndroid },
] as const;

const initialDocumentByPath = new Map(initialDocuments.map((document) => [document.path, document]));

export function getInitialDocument(pathname: string): InitialDocument | undefined {
  return initialDocumentByPath.get(pathname as CanonicalPublicRoute);
}

export const initialDocumentPaths = canonicalPublicRoutes;
