/** Evidence basis: approved P0–P3 pages and the Product Intelligence Report evidence map. */

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  href: string;
  linkLabel: string;
};

export type FaqGroup = {
  title: string;
  eyebrow: string;
  items: readonly FaqItem[];
};

export const siteFaqGroups: readonly FaqGroup[] = [
  {
    eyebrow: "Saving and reusing", title: "Clipboard and quick-access questions", items: [
      { id: "save", question: "What can Mr. Copy save?", answer: "Mr. Copy can save supported copied text and URLs as local items, then help you organize them with folders, Starred items, pins, and Trash.", href: "/features/clipboard-manager", linkLabel: "See how saved text and links are organized" },
      { id: "bubble", question: "What does the Floating Bubble do?", answer: "The Floating Bubble can surface saved Recent and Starred items over another Android app, then copy a selected saved item back to the Android clipboard.", href: "/features/floating-bubble", linkLabel: "Learn how Floating Bubble quick access works" },
      { id: "android-access", question: "How does clipboard access work on Android 13 and later?", answer: "Android can restrict clipboard access while an app is in the background. On Android 13 and later, tapping the Floating Bubble can bring Mr. Copy’s required foreground interaction into focus before it reads pending clipboard content.", href: "/help/android-clipboard-access", linkLabel: "Understand Android clipboard access limitations" },
      { id: "overlay", question: "Why does the Floating Bubble need Display over other apps?", answer: "Android requires the user-controlled Display over other apps permission before Mr. Copy can render its Floating Bubble above another app. That permission does not grant access to another app’s private data.", href: "/help/floating-bubble-permission", linkLabel: "Learn how to control Floating Bubble permission" },
    ],
  },
  {
    eyebrow: "Public links and references", title: "Link, Maps, and shopping questions", items: [
      { id: "public-links", question: "Which public links can Mr. Copy organize?", answer: "Mr. Copy has verified handling for public YouTube, Instagram, Facebook, and supported Google Maps links. It can keep available public reference details, while private, login-required, blocked, or rate-limited sources can return partial results.", href: "/features/link-previews", linkLabel: "Explore supported public links and preview limits" },
      { id: "shopping-links", question: "Which shopping links are supported?", answer: "Mr. Copy supports public product links from Amazon India, Flipkart, Myntra, Meesho, Nykaa, TataCliq, JioMart, and Shopsy. Product-reference fields are available only when the public source exposes them and are not a guarantee of current price or stock.", href: "/use-cases/shopping-links", linkLabel: "See supported shopping links and source limits" },
      { id: "partial-preview", question: "Why can a link preview be partial?", answer: "A public source can return partial or fallback preview information when it is private, login-required, blocked, slow, rate-limited, or exposes less metadata than the saved URL requests.", href: "/features/link-previews", linkLabel: "Read how public-link preview fallback works" },
    ],
  },
  {
    eyebrow: "Local data and account control", title: "Privacy, encryption, and deletion questions", items: [
      { id: "cloud", question: "Does Mr. Copy sync clipboard history to the cloud?", answer: "No. Saved clips, folders, URL previews, search indexes, and preferences stay in Mr. Copy’s encrypted local Android library. Account information has a separate identity and entitlement purpose.", href: "/features/privacy-security", linkLabel: "See the local-storage and account-data boundary" },
      { id: "encryption", question: "How is saved local content protected?", answer: "Mr. Copy uses AES-256 GCM encryption for its local Hive database, with key material protected through Android Keystore-backed storage. This helps protect local data at rest without guaranteeing protection against every risk.", href: "/features/privacy-security", linkLabel: "Read about encrypted local storage" },
      { id: "account-data", question: "What account data is separate from saved clipboard content?", answer: "Google sign-in and Firebase services support identity and entitlement records. They are not a cloud clipboard and do not store the saved clips, folders, or link-preview library.", href: "/privacy", linkLabel: "Read how account information is handled" },
      { id: "deletion", question: "What is deleted when I remove my Mr. Copy account?", answer: "The verified account-deletion flow removes the authenticated Firebase account and matching Firestore account record. Saved clipboard content remains on the device and cannot be erased remotely by the website.", href: "/delete-account", linkLabel: "Open the verified account-deletion process" },
      { id: "billing", question: "Does deleting my account cancel Google Play billing?", answer: "No. Google Play subscription management is separate from the Mr. Copy account-deletion flow.", href: "/delete-account", linkLabel: "Review the account-deletion and billing boundary" },
      { id: "platforms", question: "Is Mr. Copy available on iPhone or desktop?", answer: "Mr. Copy’s approved public product scope is Android. The website does not present iPhone or desktop support.", href: "/features", linkLabel: "Explore the Android feature set" },
    ],
  },
];

export const siteFaqItems = siteFaqGroups.flatMap((group) => group.items);

export const linkPreviewsFaqItems: readonly FaqItem[] = [
  { id: "what-is-preview", question: "What is a link preview in Mr. Copy?", answer: "A link preview is a saved local reference built from a public URL and the context that source makes available, so the link can be more useful than an unlabelled raw URL.", href: "/features/clipboard-manager", linkLabel: "See how saved links fit into Clipboard Manager" },
  { id: "available-details", question: "What information can a saved URL include?", answer: "When a public page exposes them, Mr. Copy can keep available title, description, author, published date, domain, favicon, image or thumbnail, and platform-specific public details with the saved link.", href: "/features/privacy-security", linkLabel: "See where saved preview details stay" },
  { id: "enrichment", question: "How does URL metadata enrichment work from my perspective?", answer: "Save or share a public URL to Mr. Copy. It can resolve available public metadata and keep the result as a local reference alongside the copied text or link you saved.", href: "/features/clipboard-manager", linkLabel: "Organize saved text and links locally" },
  { id: "unresolved", question: "What happens when a URL cannot be resolved?", answer: "A preview can return partial or fallback information when the public source is private, login-required, blocked, slow, rate-limited, or exposes less metadata.", href: "/privacy", linkLabel: "Read the public-link processing boundary" },
  { id: "local-preview", question: "Which link-preview information stays local?", answer: "Saved link previews remain in Mr. Copy’s local Android reference library with saved clips, folders, search indexes, and preferences. They are not cloud-synced clipboard data.", href: "/features/privacy-security", linkLabel: "See the local-preview storage boundary" },
  { id: "network-requests", question: "What network requests are involved in a public link preview?", answer: "To resolve a public link, Mr. Copy may make a standard request to the public target site or a metadata endpoint. That public request is separate from the local storage of the saved preview.", href: "/privacy", linkLabel: "Read how public URL requests are handled" },
  { id: "clipboard-relationship", question: "How do Link Previews relate to Clipboard Manager?", answer: "A resolved public URL becomes a local reference that can sit alongside copied text or a saved link, then be organized with Mr. Copy’s existing clipboard-management tools.", href: "/features/clipboard-manager", linkLabel: "Explore Clipboard Manager organization" },
];
