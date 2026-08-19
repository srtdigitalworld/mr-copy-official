/** Design philosophy: Field Notes Utility — a compact, transparent header and footer with practical escape routes. */

import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import Menu from "lucide-react/dist/esm/icons/menu";
import Moon from "lucide-react/dist/esm/icons/moon";
import Sun from "lucide-react/dist/esm/icons/sun";
import X from "lucide-react/dist/esm/icons/x";
import { appIconAsset, footerLinks, navItems, siteConfig } from "@/lib/site";

type SiteShellProps = { children: ReactNode };

export function StoreCta({ label = "Get it on Google Play", className = "" }: { label?: string; className?: string }) {
  if (siteConfig.playStoreUrl) return <a className={`button button-primary ${className}`} href={siteConfig.playStoreUrl} target="_blank" rel="noreferrer"><span>{label}</span><ExternalLink aria-hidden="true" size={16} /></a>;
  return <button type="button" className={`button button-primary ${className}`} onClick={() => window.alert("The official Google Play URL will be added before launch.")}><span>{label}</span><ExternalLink aria-hidden="true" size={16} /></button>;
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => { const nextTheme = window.localStorage.getItem("mr-copy-theme") === "dark" ? "dark" : "light"; setTheme(nextTheme); document.documentElement.classList.toggle("dark", nextTheme === "dark"); }, []);
  const toggleTheme = () => { const nextTheme = theme === "light" ? "dark" : "light"; setTheme(nextTheme); document.documentElement.classList.toggle("dark", nextTheme === "dark"); window.localStorage.setItem("mr-copy-theme", nextTheme); };
  return <button type="button" className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>{theme === "light" ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}</button>;
}

function BrandLockup() {
  return <Link href="/" className="brand-lockup" aria-label="Mr. Copy home"><img src={appIconAsset} width="38" height="38" alt="Official Mr. Copy app icon" /><span><strong>Mr. Copy</strong><em>One Tap Copy</em></span></Link>;
}

export default function SiteShell({ children }: SiteShellProps) {
  const [location] = useLocation(); const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMenuOpen(false), [location]);
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to main content</a><header className="site-header"><div className="shell header-content"><BrandLockup /><nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <Link key={item.href} href={item.href} className={`nav-link ${location === item.href ? "is-active" : ""}`}>{item.label}</Link>)}</nav><div className="header-actions"><ThemeToggle /><StoreCta className="desktop-cta" /><button type="button" className="icon-button mobile-menu-trigger" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls={menuOpen ? "mobile-navigation" : undefined} aria-label="Toggle navigation">{menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}</button></div></div>{menuOpen ? <nav id="mobile-navigation" className="mobile-nav is-open" aria-label="Mobile navigation"><div className="shell mobile-nav-content">{navItems.map((item) => <Link key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{item.label}</Link>)}<StoreCta className="mobile-store-cta" /></div></nav> : null}</header><main id="main-content">{children}</main><footer className="site-footer"><div className="shell footer-grid"><section className="footer-intro" aria-label="Mr. Copy overview"><BrandLockup /><p>{siteConfig.description}</p><StoreCta className="footer-store-cta" /></section><nav className="footer-links" aria-label="Footer navigation"><p className="footer-label">Explore</p>{footerLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><section className="footer-note" aria-label="Product information"><p className="footer-label">Product note</p><p>Clipboard items and saved local content stay on the device. Public URLs may be requested to retrieve preview metadata.</p></section></div><div className="shell footer-bottom"><span>© 2026 Mr. Copy. All rights reserved.</span><span>Built for useful fragments.</span></div></footer></div>;
}
