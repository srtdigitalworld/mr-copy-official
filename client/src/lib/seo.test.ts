import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { p0Schemas, p1Schemas, p2Schemas, p3Schemas, p4Schemas, p5Schemas } from "./seo";
import { initialDocuments } from "./initialDocument";
import { linkPreviewsFaqItems, siteFaqItems } from "./faq";
import { SITE_URL, siteConfig } from "./site";
import { canonicalPublicRoutes } from "@shared/publicRoutes";

const source = (relativePath: string) => readFileSync(new URL(relativePath, import.meta.url), "utf8");
const home = source("../pages/Home.tsx");
const features = source("../pages/Features.tsx");
const privacy = source("../pages/Privacy.tsx");
const pricing = source("../pages/Pricing.tsx");
const clipboardManager = source("../pages/ClipboardManager.tsx");
const floatingBubble = source("../pages/FloatingBubble.tsx");
const linkPreviews = source("../pages/LinkPreviews.tsx");
const privacySecurity = source("../pages/PrivacySecurity.tsx");
const shoppingLinks = source("../pages/ShoppingLinks.tsx");
const floatingBubblePermission = source("../pages/FloatingBubblePermission.tsx");
const androidClipboardAccess = source("../pages/AndroidClipboardAccess.tsx");
const faq = source("../pages/FAQ.tsx");
const terms = source("../pages/Terms.tsx");
const contact = source("../pages/Contact.tsx");
const deleteAccount = source("../pages/DeleteAccount.tsx");
const site = source("./site.ts");
const routes = source("../App.tsx");
const staticHtml = source("../../index.html");
const sitemap = source("../../public/sitemap.xml");
const wrangler = source("../../../wrangler.jsonc");

describe("P0 semantic SEO implementation", () => {
  it("uses the canonical production host in static metadata and route schema", () => {
    expect(SITE_URL).toBe("https://mrcopy.pro");
    expect(staticHtml).toContain('<link rel="canonical" href="https://mrcopy.pro" />');
    expect(staticHtml).toContain('<meta property="og:url" content="https://mrcopy.pro" />');
    expect(JSON.stringify(p0Schemas)).toContain("https://mrcopy.pro");
  });

  it("describes only the verified Android application in SoftwareApplication schema", () => {
    const serialized = JSON.stringify(p0Schemas.home);
    expect(serialized).toContain('"@type":"SoftwareApplication"');
    expect(serialized).toContain('"operatingSystem":"Android"');
    expect(serialized).not.toContain("aggregateRating");
    expect(serialized).not.toContain('"offers"');
  });

  it("ships the approved homepage entity, features hierarchy, and privacy boundary", () => {
    expect(home).toContain("Android clipboard management for text, links, and useful references.");
    expect(home).toContain("Private, login-walled, rate-limited, or blocked pages can return partial preview information.");
    expect(features).toContain('title: "Clipboard management"');
    expect(features).toContain('title: "Floating access"');
    expect(features).toContain('title: "Link intelligence"');
    expect(features).toContain('title: "Local privacy and security"');
    expect(privacy).toContain("AES-256 GCM encrypted Hive storage");
    expect(privacy).toContain("It is not used as a cloud clipboard");
    expect(privacy).not.toContain("existing site analytics configuration");
  });

  it("withholds unconfirmed public pricing and trial claims", () => {
    expect(siteConfig).not.toHaveProperty("pricing");
    expect(pricing).not.toContain("₹49");
    expect(pricing).not.toContain("3-Day Free Trial");
    expect(pricing).not.toContain("mr_copy_basic_subscription");
    expect(pricing).toContain("Price and trial terms will be shown when confirmed.");
    expect(pricing).toContain('href="/privacy"');
    expect(pricing).toContain("what account data is used for identity and entitlement");
  });

  it("does not introduce blocked positioning into P0 public pages", () => {
    const p0Source = `${home}\n${features}\n${privacy}\n${pricing}`.toLowerCase();
    expect(p0Source).not.toContain("instagram downloader");
    expect(p0Source).not.toContain("facebook scraper");
    expect(p0Source).not.toContain("youtube downloader");
    expect(p0Source).not.toContain("multi-device clipboard synchronization");
  });
});

describe("P1 Clipboard Manager and Floating Bubble pages", () => {
  it("registers only the approved P1 routes and includes their canonical sitemap URLs", () => {
    expect(routes).toContain('path="/features/clipboard-manager"');
    expect(routes).toContain('path="/features/floating-bubble"');
    expect(sitemap).toContain("https://mrcopy.pro/features/clipboard-manager");
    expect(sitemap).toContain("https://mrcopy.pro/features/floating-bubble");
    expect(sitemap).not.toContain("mrcopy.app");
  });

  it("provides unique P1 metadata and visible breadcrumbs that agree with route schema", () => {
    expect(clipboardManager).toContain('title: "Android Clipboard Manager for Saved Text & Links"');
    expect(floatingBubble).toContain('title: "Floating Clipboard Bubble for Android"');
    expect(clipboardManager).toContain('href="/features"');
    expect(floatingBubble).toContain('href="/features"');
    const clipboardSchema = JSON.stringify(p1Schemas.clipboardManager);
    const bubbleSchema = JSON.stringify(p1Schemas.floatingBubble);
    expect(clipboardSchema).toContain('"BreadcrumbList"');
    expect(clipboardSchema).toContain("https://mrcopy.pro/features/clipboard-manager");
    expect(bubbleSchema).toContain('"BreadcrumbList"');
    expect(bubbleSchema).toContain("https://mrcopy.pro/features/floating-bubble");
  });

  it("covers the verified Clipboard Manager workflow and limits without unsupported history claims", () => {
    expect(clipboardManager).toContain("Save and organize copied text on Android");
    expect(clipboardManager).toContain("500 clips");
    expect(clipboardManager).toContain("five items");
    expect(clipboardManager).toContain("30-day cleanup period");
    expect(clipboardManager).toContain("text and URLs");
    expect(clipboardManager).toContain('href="/features/floating-bubble"');
    expect(clipboardManager).toContain('href="/privacy"');
  });

  it("covers the verified Floating Bubble workflow and permission boundary", () => {
    expect(floatingBubble).toContain("Copy saved text without leaving the app you are using");
    expect(floatingBubble).toContain("Recent and Starred");
    expect(floatingBubble).toContain("Display over other apps");
    expect(floatingBubble).toContain("Android 13 and later");
    expect(floatingBubble).toContain("does not bypass Android privacy protections");
    expect(floatingBubble).toContain('href="/features/clipboard-manager"');
    expect(floatingBubble).toContain('href="/privacy"');
  });

  it("keeps P1 pages outside unsupported platform, capture, synchronization, and downloader positioning", () => {
    const p1Source = `${clipboardManager}\n${floatingBubble}`.toLowerCase();
    for (const blockedClaim of ["ios", "desktop support", "cloud sync", "multi-device", "instagram downloader", "youtube downloader", "facebook scraper", "image capture", "file capture", "unlimited history", "uninterrupted background clipboard access"]) {
      expect(p1Source).not.toContain(blockedClaim);
    }
  });
});

describe("P2 consolidated Link Previews and Privacy & Security pages", () => {
  it("registers the two substantive P2 routes, includes them in the sitemap, and rejects thin route variations", () => {
    for (const route of ["/features/link-previews", "/features/privacy-security"]) {
      expect(routes).toContain(`path="${route}"`);
      expect(sitemap).toContain(`https://mrcopy.pro${route}`);
    }
    for (const thinRoute of ["/features/youtube-extractor", "/features/instagram-extractor", "/features/facebook-extractor", "/features/google-maps-parser", "/features/shopping-link-parser"]) {
      expect(routes).not.toContain(thinRoute);
      expect(sitemap).not.toContain(`https://mrcopy.pro${thinRoute}`);
    }
  });

  it("provides unique P2 metadata and visible-breadcrumb-aligned route schema", () => {
    expect(linkPreviews).toContain('title: "Save Links with Previews on Android"');
    expect(privacySecurity).toContain('title: "Local Encrypted Clipboard Storage for Android"');
    expect(linkPreviews).toContain('href="/features"');
    expect(privacySecurity).toContain('href="/features"');
    const linkSchema = JSON.stringify(p2Schemas.linkPreviews);
    const privacySchema = JSON.stringify(p2Schemas.privacySecurity);
    expect(linkSchema).toContain('"BreadcrumbList"');
    expect(linkSchema).toContain("https://mrcopy.pro/features/link-previews");
    expect(privacySchema).toContain('"BreadcrumbList"');
    expect(privacySchema).toContain("https://mrcopy.pro/features/privacy-security");
  });

  it("covers verified public-link, social, Maps, and shopping-reference boundaries on one substantive page", () => {
    expect(linkPreviews).toContain("Turn saved links into useful Android references");
    expect(linkPreviews).toContain("includes verified handling for public YouTube, Instagram, and Facebook links");
    expect(linkPreviews).toContain("place names, coordinates, Place IDs, and route information");
    expect(linkPreviews).toContain("supportedShoppingPlatforms.map");
    expect(linkPreviews).toContain("Private accounts, private groups, login-required pages, rate limits, and blocked pages can produce partial or fallback results");
    expect(linkPreviews).toContain('href="/features/clipboard-manager"');
    expect(linkPreviews).toContain('href="/features/privacy-security"');
  });

  it("covers the verified local-first and account-data boundary without security guarantees", () => {
    expect(privacySecurity).toContain("Keep saved clipboard content local to your Android device");
    expect(privacySecurity).toContain("AES-256 GCM encryption");
    expect(privacySecurity).toContain("Android Keystore-backed storage");
    expect(privacySecurity).toContain("not a cloud clipboard");
    expect(privacySecurity).toContain('href="/features/link-previews"');
    expect(privacySecurity).toContain('href="/delete-account"');
  });

  it("keeps P2 pages outside unsupported privacy, platform, downloader, and price positioning", () => {
    const p2Source = `${linkPreviews}\n${privacySecurity}`.toLowerCase();
    for (const blockedClaim of ["ios support", "desktop support", "cloud clipboard synchronization", "private-account extraction", "private social-account extraction", "instagram downloader", "youtube downloader", "facebook scraper", "headless browser", "military-grade", "guaranteed current price", "free trial", "₹49"]) {
      expect(p2Source).not.toContain(blockedClaim);
    }
    expect(privacySecurity).toContain("does not claim to be unhackable");
  });
});

describe("P3.1 Shopping Links use-case page", () => {
  it("registers the substantive shopping-links route and includes its canonical sitemap URL", () => {
    expect(routes).toContain('path="/use-cases/shopping-links"');
    expect(sitemap).toContain("https://mrcopy.pro/use-cases/shopping-links");
  });

  it("provides unique P3.1 metadata and a truthful Link Previews breadcrumb schema", () => {
    expect(shoppingLinks).toContain('title: "Save Shopping Links and Product Details on Android"');
    expect(shoppingLinks).toContain('href="/features/link-previews"');
    const schema = JSON.stringify(p3Schemas.shoppingLinks);
    expect(schema).toContain('"WebPage"');
    expect(schema).toContain('"BreadcrumbList"');
    expect(schema).toContain("https://mrcopy.pro/features/link-previews");
    expect(schema).toContain("https://mrcopy.pro/use-cases/shopping-links");
  });

  it("covers the supported public-store workflow and source limits without marketplace claims", () => {
    expect(shoppingLinks).toContain("Keep shopping links and product details together on Android");
    expect(shoppingLinks).toContain("supportedShoppingPlatforms.map");
    expect(shoppingLinks).toContain("price or MRP");
    expect(shoppingLinks).toContain("private, blocked, slow, changed, or rate-limited source can return partial details");
    expect(shoppingLinks).toContain('href="/features/clipboard-manager"');
    expect(shoppingLinks).toContain('href="/privacy"');
    expect(linkPreviews).toContain('href="/use-cases/shopping-links"');
  });

  it("keeps P3.1 outside unsupported commerce, downloader, platform, and cloud-sync positioning", () => {
    const pageSource = shoppingLinks.toLowerCase();
    expect(shoppingLinks).toContain("not a marketplace listing, checkout, affiliate service, or guarantee of current price, stock, ratings, or availability");
    for (const blockedClaim of ["live-price", "live-stock", "price comparison", "instagram downloader", "cloud clipboard synchronization", "ios support", "desktop support"]) {
      expect(pageSource).not.toContain(blockedClaim);
    }
  });
});

describe("P3.2 Floating Bubble permission-help page", () => {
  it("registers the permission-help route and includes its canonical sitemap URL", () => {
    expect(routes).toContain('path="/help/floating-bubble-permission"');
    expect(sitemap).toContain("https://mrcopy.pro/help/floating-bubble-permission");
  });

  it("provides unique support metadata and a truthful Floating Bubble breadcrumb schema", () => {
    expect(floatingBubblePermission).toContain('title: "Enable Floating Bubble Permission on Android"');
    expect(floatingBubblePermission).toContain('href="/features/floating-bubble"');
    const schema = JSON.stringify(p3Schemas.floatingBubblePermission);
    expect(schema).toContain('"WebPage"');
    expect(schema).toContain('"BreadcrumbList"');
    expect(schema).toContain("https://mrcopy.pro/features/floating-bubble");
    expect(schema).toContain("https://mrcopy.pro/help/floating-bubble-permission");
  });

  it("explains the verified overlay purpose, user control, disable path, and support limit", () => {
    expect(floatingBubblePermission).toContain("How to enable the Mr. Copy Floating Bubble on Android");
    expect(floatingBubblePermission).toContain("Display over other apps");
    expect(floatingBubblePermission).toContain("does not give Mr. Copy access to another app’s private information");
    expect(floatingBubblePermission).toContain("turn off Display over other apps");
    expect(floatingBubblePermission).toContain("does not bypass Android privacy protections");
    expect(floatingBubble).toContain('href="/help/floating-bubble-permission"');
  });

  it("keeps P3.2 outside unsupported private-access, bypass, capture, and platform claims", () => {
    const pageSource = floatingBubblePermission.toLowerCase();
    expect(floatingBubblePermission).toContain("does not bypass Android privacy protections or promise uninterrupted background clipboard access");
    for (const blockedClaim of ["surveillance", "permission bypass", "image capture", "file capture", "ios support", "desktop support", "cloud clipboard synchronization"]) {
      expect(pageSource).not.toContain(blockedClaim);
    }
  });
});

describe("P3.3 Android clipboard-access help page", () => {
  it("registers the Android clipboard-access route and includes its canonical sitemap URL", () => {
    expect(routes).toContain('path="/help/android-clipboard-access"');
    expect(sitemap).toContain("https://mrcopy.pro/help/android-clipboard-access");
  });

  it("provides unique support metadata and a truthful Floating Bubble breadcrumb schema", () => {
    expect(androidClipboardAccess).toContain('title: "How Clipboard Access Works on Android"');
    expect(androidClipboardAccess).toContain('href="/features/floating-bubble"');
    const schema = JSON.stringify(p3Schemas.androidClipboardAccess);
    expect(schema).toContain('"WebPage"');
    expect(schema).toContain('"BreadcrumbList"');
    expect(schema).toContain("https://mrcopy.pro/features/floating-bubble");
    expect(schema).toContain("https://mrcopy.pro/help/android-clipboard-access");
  });

  it("explains Android 13+ foreground interaction and reuses saved local references without promising background capture", () => {
    expect(androidClipboardAccess).toContain("How clipboard access works with Mr. Copy on Android");
    expect(androidClipboardAccess).toContain("On Android 13 and later, tapping the Floating Bubble can bring Mr. Copy’s required foreground interaction into focus");
    expect(androidClipboardAccess).toContain("not a privacy bypass");
    expect(androidClipboardAccess).toContain("does not claim uninterrupted background clipboard access");
    expect(androidClipboardAccess).toContain('href="/help/floating-bubble-permission"');
    expect(floatingBubble).toContain('href="/help/android-clipboard-access"');
    expect(floatingBubblePermission).toContain('href="/help/android-clipboard-access"');
  });

  it("keeps P3.3 outside unsupported bypass, automatic-capture, cloud, cross-platform, and non-text claims", () => {
    const pageSource = androidClipboardAccess.toLowerCase();
    expect(androidClipboardAccess).toContain("not a privacy bypass");
    for (const blockedClaim of ["automatic background capture", "image capture", "audio capture", "file capture", "cloud clipboard synchronization", "ios support", "desktop support", "automatic password masking"]) {
      expect(pageSource).not.toContain(blockedClaim);
    }
  });
});

describe("P4.1 substantive sitewide FAQ route", () => {
  it("registers the FAQ route and includes its canonical sitemap URL", () => {
    expect(routes).toContain('path="/faq"');
    expect(sitemap).toContain("https://mrcopy.pro/faq");
  });

  it("provides unique FAQ metadata, visible breadcrumb, and exact-match FAQPage schema", () => {
    expect(faq).toContain('title: "Mr. Copy FAQ — Android Clipboard, Links & Privacy"');
    expect(faq).toContain('href="/"');
    expect(faq).toContain("siteFaqGroups.map");
    expect(siteFaqItems.length).toBeGreaterThanOrEqual(10);
    const schema = JSON.stringify(p4Schemas.siteFaq);
    expect(schema).toContain('"WebPage"');
    expect(schema).toContain('"BreadcrumbList"');
    expect(schema).toContain('"FAQPage"');
    expect(schema).toContain("https://mrcopy.pro/faq");
    for (const item of siteFaqItems) expect(schema).toContain(item.question);
  });

  it("answers verified ecosystem questions and links to each detailed existing destination", () => {
    const questions = siteFaqItems.map((item) => item.question);
    const destinations = siteFaqItems.map((item) => item.href);
    for (const question of ["What can Mr. Copy save?", "How does clipboard access work on Android 13 and later?", "What does the Floating Bubble do?", "Why does the Floating Bubble need Display over other apps?", "Which public links can Mr. Copy organize?", "Which shopping links are supported?", "Does Mr. Copy sync clipboard history to the cloud?", "How is saved local content protected?", "What is deleted when I remove my Mr. Copy account?"]) expect(questions).toContain(question);
    for (const href of ["/features/clipboard-manager", "/features/floating-bubble", "/help/android-clipboard-access", "/help/floating-bubble-permission", "/features/link-previews", "/use-cases/shopping-links", "/features/privacy-security", "/privacy", "/delete-account"]) expect(destinations).toContain(href);
  });

  it("keeps P4.1 outside unsupported commercial, scraper, downloader, cloud-sync, and security-guarantee positioning", () => {
    const sourceText = `${faq}\n${JSON.stringify(siteFaqItems)}`.toLowerCase();
    for (const blockedClaim of ["free trial", "₹49", "instagram downloader", "youtube downloader", "facebook scraper", "unrestricted web scraping", "private-account extraction", "guaranteed security", "military-grade"]) expect(sourceText).not.toContain(blockedClaim);
    expect(faq).toContain("does not add unconfirmed pricing, trial, or platform claims");
  });
});

describe("P4.2 Link Previews FAQ content", () => {
  it("uses a visible shared FAQ set and adds exact-match FAQPage schema to Link Previews", () => {
    expect(linkPreviews).toContain("linkPreviewsFaqItems.map");
    expect(linkPreviews).toContain("Link preview questions");
    expect(linkPreviewsFaqItems).toHaveLength(7);
    const schema = JSON.stringify(p2Schemas.linkPreviews);
    expect(schema).toContain('"FAQPage"');
    for (const item of linkPreviewsFaqItems) expect(schema).toContain(item.question);
  });

  it("covers the verified URL-preview workflow, available metadata, fallback, local storage, public requests, and Clipboard Manager relationship", () => {
    const questions = linkPreviewsFaqItems.map((item) => item.question);
    for (const question of ["What is a link preview in Mr. Copy?", "What information can a saved URL include?", "How does URL metadata enrichment work from my perspective?", "What happens when a URL cannot be resolved?", "Which link-preview information stays local?", "What network requests are involved in a public link preview?", "How do Link Previews relate to Clipboard Manager?"]) expect(questions).toContain(question);
    for (const href of ["/features/clipboard-manager", "/features/privacy-security", "/privacy"]) expect(linkPreviewsFaqItems.map((item) => item.href)).toContain(href);
    expect(linkPreviews).toContain('href="/faq"');
  });

  it("keeps P4.2 outside unlimited-source, scraping, private-account, downloader, and cloud-sync positioning", () => {
    const sourceText = `${linkPreviews}\n${JSON.stringify(linkPreviewsFaqItems)}`.toLowerCase();
    for (const blockedClaim of ["every website", "unrestricted web scraping", "private-account extraction", "instagram downloader", "youtube downloader", "facebook scraper", "cloud clipboard synchronization"]) expect(sourceText).not.toContain(blockedClaim);
  });
});

describe("P5 existing-page semantic optimization", () => {
  it("strengthens parent-to-child and core-workflow relationships only with existing contextual destinations", () => {
    expect(home).toContain('href: "/features/floating-bubble"');
    expect(home).toContain('href="/features/link-previews"');
    expect(home).toContain('href="/features/privacy-security"');
    expect(clipboardManager).toContain('href="/help/android-clipboard-access"');
    expect(privacy).toContain('href="/features/privacy-security"');
    expect(privacy).toContain('href="/features/link-previews"');
    expect(site).toContain('{ href: "/faq", label: "FAQ" }');
  });

  it("makes Terms and Contact match the verified support, billing-boundary, and deletion-flow state", () => {
    expect(terms).toContain('href="/contact"');
    expect(terms).toContain('href="/pricing"');
    expect(terms).toContain("If Google Play billing applies to an account");
    expect(terms).not.toContain("Current paid access is offered");
    expect(terms).not.toContain("should be configured before production publishing");
    expect(contact).toContain("secure account-deletion flow");
    expect(contact).toContain("matching Firebase account and Firestore account record");
    expect(deleteAccount).toContain("schema: p5Schemas.deleteAccount");
  });

  it("extends WebPage schema consistently to the existing Terms, Contact, and Delete Account pages without invented breadcrumbs or FAQ data", () => {
    for (const schema of [p5Schemas.terms, p5Schemas.contact, p5Schemas.deleteAccount]) {
      const serialized = JSON.stringify(schema);
      expect(serialized).toContain('"WebPage"');
      expect(serialized).toContain("https://mrcopy.pro");
      expect(serialized).not.toContain('"BreadcrumbList"');
      expect(serialized).not.toContain('"FAQPage"');
    }
  });

  it("retains the P5 commercial, platform, privacy, and downloader claims firewall", () => {
    const sourceText = `${home}\n${clipboardManager}\n${privacy}\n${terms}\n${contact}`.toLowerCase();
    expect(home).toContain("not cloud clipboard synchronization");
    for (const blockedClaim of ["₹49", "free trial", "instagram downloader", "youtube downloader", "facebook scraper", "private-account extraction", "guaranteed security", "ios support", "desktop support"]) expect(sourceText).not.toContain(blockedClaim);
  });
});

describe("P7 initial-document route parity", () => {
  it("maps every and only canonical public route to a unique initial document with a route-specific H1 and visible-content schema", () => {
    expect(initialDocuments.map((document) => document.path)).toEqual(canonicalPublicRoutes);
    expect(new Set(initialDocuments.map((document) => document.title)).size).toBe(initialDocuments.length);
    for (const document of initialDocuments) {
      expect(document.h1).not.toHaveLength(0);
      expect(document.description).not.toHaveLength(0);
      expect(JSON.stringify(document.schema)).toContain('"WebPage"');
    }
  });

  it("uses an absolute official Open Graph image and a single initial-document head replacement marker", () => {
    expect(staticHtml).toContain('content="https://mrcopy.pro/manus-storage/mr_copy_app_icon_256_f8bbff73.webp"');
    expect(staticHtml.match(/initial-document-head:start/g)).toHaveLength(1);
    expect(staticHtml.match(/initial-document-head:end/g)).toHaveLength(1);
  });

  it("keeps all P7 initial-document records inside the established claims and commercial firewall", () => {
    const initialCopy = JSON.stringify(initialDocuments).toLowerCase();
    for (const blockedClaim of ["₹49", "instagram downloader", "youtube downloader", "facebook scraper", "cloud clipboard synchronization", "aggregaterating", "\"offers\""]) {
      expect(initialCopy).not.toContain(blockedClaim);
    }
  });

  it("keeps Worker-first assets under explicit route control with a genuine static 404 fallback", () => {
    expect(wrangler).toContain('"not_found_handling": "404-page"');
    expect(wrangler).toContain('"run_worker_first": true');
  });
});
