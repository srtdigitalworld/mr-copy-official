/** Design philosophy: Field Notes Utility — all routes share a dependable product frame and a clear path back to the core experience. */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteShell from "./components/SiteShell";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DeleteAccount from "./pages/DeleteAccount";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
function Router() { return <Switch><Route path="/" component={Home} /><Route path="/features" component={Features} /><Route path="/pricing" component={Pricing} /><Route path="/privacy" component={Privacy} /><Route path="/terms" component={Terms} /><Route path="/delete-account" component={DeleteAccount} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch>; }
function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><SiteShell><Router /></SiteShell></TooltipProvider></ThemeProvider></ErrorBoundary>; }
export default App;
