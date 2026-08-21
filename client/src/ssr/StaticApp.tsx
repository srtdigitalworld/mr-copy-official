import { Route, Switch } from "wouter";
import ErrorBoundary from "../components/ErrorBoundary";
import SiteShell from "../components/SiteShell";
import { ThemeProvider } from "../contexts/ThemeContext";
import AndroidClipboardAccess from "../pages/AndroidClipboardAccess";
import AndroidClipboardPrivacyGuide from "../pages/AndroidClipboardPrivacyGuide";
import ClipboardManager from "../pages/ClipboardManager";
import Contact from "../pages/Contact";
import DeleteAccount from "../pages/DeleteAccount";
import FAQ from "../pages/FAQ";
import Features from "../pages/Features";
import FloatingBubble from "../pages/FloatingBubble";
import FloatingBubblePermission from "../pages/FloatingBubblePermission";
import Home from "../pages/Home";
import LinkPreviews from "../pages/LinkPreviews";
import NotFound from "../pages/NotFound";
import Pricing from "../pages/Pricing";
import Privacy from "../pages/Privacy";
import PrivacySecurity from "../pages/PrivacySecurity";
import Press from "../pages/Press";
import SaveCopiedTextAndroid from "../pages/SaveCopiedTextAndroid";
import ShoppingLinks from "../pages/ShoppingLinks";
import Terms from "../pages/Terms";

function StaticRouter() {
  return <Switch><Route path="/" component={Home} /><Route path="/features" component={Features} /><Route path="/features/clipboard-manager" component={ClipboardManager} /><Route path="/features/floating-bubble" component={FloatingBubble} /><Route path="/features/link-previews" component={LinkPreviews} /><Route path="/features/privacy-security" component={PrivacySecurity} /><Route path="/use-cases/shopping-links" component={ShoppingLinks} /><Route path="/help/floating-bubble-permission" component={FloatingBubblePermission} /><Route path="/help/android-clipboard-access" component={AndroidClipboardAccess} /><Route path="/faq" component={FAQ} /><Route path="/pricing" component={Pricing} /><Route path="/privacy" component={Privacy} /><Route path="/terms" component={Terms} /><Route path="/delete-account" component={DeleteAccount} /><Route path="/contact" component={Contact} /><Route path="/press" component={Press} /><Route path="/guides/android-clipboard-privacy" component={AndroidClipboardPrivacyGuide} /><Route path="/guides/save-copied-text-android" component={SaveCopiedTextAndroid} /><Route component={NotFound} /></Switch>;
}

export default function StaticApp() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><SiteShell><StaticRouter /></SiteShell></ThemeProvider></ErrorBoundary>;
}
