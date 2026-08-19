import { describe, expect, it } from "vitest";
import { siteConfig } from "./site";

describe("official developer contact configuration", () => {
  it("keeps the official developer identity and contact destinations intact", () => {
    expect(siteConfig.supportEmail).toBe("Connect.mrcopy@gmail.com");
    expect(siteConfig.developer).toEqual({
      name: "Mr Pro Abdul",
      instagramHandle: "@mrcopy.pro",
      instagramUrl: "https://www.instagram.com/mrcopy.pro",
    });
  });
});
