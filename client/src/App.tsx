/** Design philosophy: Field Notes Utility — load the site frame immediately and split route code so content arrives with less main-thread work. */

import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteShell from "./components/SiteShell";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
const Features = lazy(() => import("./pages/Features"));
const ClipboardManager = lazy(() => import("./pages/ClipboardManager"));
const FloatingBubble = lazy(() => import("./pages/FloatingBubble"));
const LinkPreviews = lazy(() => import("./pages/LinkPreviews"));
const PrivacySecurity = lazy(() => import("./pages/PrivacySecurity"));
const ShoppingLinks = lazy(() => import("./pages/ShoppingLinks"));
const FloatingBubblePermission = lazy(() => import("./pages/FloatingBubblePermission"));
const AndroidClipboardAccess = lazy(() => import("./pages/AndroidClipboardAccess"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const DeleteAccount = lazy(() => import("./pages/DeleteAccount"));
const Contact = lazy(() => import("./pages/Contact"));
const Press = lazy(() => import("./pages/Press"));
const AndroidClipboardPrivacyGuide = lazy(() => import("./pages/AndroidClipboardPrivacyGuide"));
const SaveCopiedTextAndroid = lazy(() => import("./pages/SaveCopiedTextAndroid"));
const NotFound = lazy(() => import("./pages/NotFound"));
function Router() {
  // make sure to consider if you need authentication for certain routes
  return <Suspense fallback={<div className="route-loading" aria-hidden="true" />}><Switch><Route path="/" component={Home} /><Route path="/features" component={Features} /><Route path="/features/clipboard-manager" component={ClipboardManager} /><Route path="/features/floating-bubble" component={FloatingBubble} /><Route path="/features/link-previews" component={LinkPreviews} /><Route path="/features/privacy-security" component={PrivacySecurity} /><Route path="/use-cases/shopping-links" component={ShoppingLinks} /><Route path="/help/floating-bubble-permission" component={FloatingBubblePermission} /><Route path="/help/android-clipboard-access" component={AndroidClipboardAccess} /><Route path="/faq" component={FAQ} /><Route path="/pricing" component={Pricing} /><Route path="/privacy" component={Privacy} /><Route path="/terms" component={Terms} /><Route path="/delete-account" component={DeleteAccount} /><Route path="/contact" component={Contact} /><Route path="/press" component={Press} /><Route path="/guides/android-clipboard-privacy" component={AndroidClipboardPrivacyGuide} /><Route path="/guides/save-copied-text-android" component={SaveCopiedTextAndroid} /><Route component={NotFound} /></Switch></Suspense>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><SiteShell><Router /></SiteShell></ThemeProvider></ErrorBoundary>;
}
