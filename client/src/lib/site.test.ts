import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { SITE_URL, siteConfig } from "./site";

describe("official developer contact configuration", () => {
  it("keeps the official developer identity and contact destinations intact", () => {
    expect(siteConfig.supportEmail).toBe("Connect.mrcopy@gmail.com");
    expect(siteConfig.developer).toEqual({
      name: "Mr Pro Abdul",
      instagramHandle: "@mrcopy.pro",
      instagramUrl: "https://www.instagram.com/mrcopy.pro",
    });
  });

  it("ships only canonical mrcopy.pro URLs in SEO configuration and crawl files", () => {
    const sitemap = readFileSync(new URL("../../public/sitemap.xml", import.meta.url), "utf8");
    const robots = readFileSync(new URL("../../public/robots.txt", import.meta.url), "utf8");

    expect(SITE_URL).toBe("https://mrcopy.pro");
    expect(sitemap).toContain("https://mrcopy.pro/delete-account");
    expect(sitemap).not.toContain("mrcopy.app");
    expect(robots).toContain("Sitemap: https://mrcopy.pro/sitemap.xml");
    expect(robots).not.toContain("mrcopy.app");
  });
});
