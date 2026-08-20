import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { p0Schemas } from "./seo";
import { SITE_URL, siteConfig } from "./site";

const source = (relativePath: string) => readFileSync(new URL(relativePath, import.meta.url), "utf8");
const home = source("../pages/Home.tsx");
const features = source("../pages/Features.tsx");
const privacy = source("../pages/Privacy.tsx");
const pricing = source("../pages/Pricing.tsx");
const staticHtml = source("../../index.html");

describe("P0 semantic SEO implementation", () => {
  it("uses the canonical production host in static metadata and route schema", () => {
    expect(SITE_URL).toBe("https://mrcopy.pro");
    expect(staticHtml).toContain('<link rel="canonical" href="https://mrcopy.pro/" />');
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
