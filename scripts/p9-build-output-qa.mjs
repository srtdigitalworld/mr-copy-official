import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const siteUrl = "https://mrcopy.pro";
const routes = [
  "/", "/features", "/features/clipboard-manager", "/features/floating-bubble", "/features/link-previews", "/features/privacy-security", "/use-cases/shopping-links", "/help/floating-bubble-permission", "/help/android-clipboard-access", "/faq", "/pricing", "/privacy", "/terms", "/delete-account", "/contact",
];

const documentPath = (route) => resolve(root, "dist/public/_documents", `${route === "/" ? "home" : route.slice(1).replaceAll("/", "__")}.html`);
const fail = (message) => {
  console.error(`P9 build-output QA failed: ${message}`);
  process.exitCode = 1;
};

for (const route of routes) {
  const file = documentPath(route);
  if (!existsSync(file)) {
    fail(`missing prerendered document for ${route}`);
    continue;
  }
  const html = readFileSync(file, "utf8");
  const canonical = `${siteUrl}${route === "/" ? "" : route}`;
  for (const required of ["<title>", 'name="description"', `href="${canonical}"`, `content="${canonical}"`, "<h1", 'id="mr-copy-page-schema"']) {
    if (!html.includes(required)) fail(`${route} is missing ${required}`);
  }
}

const linkPreviews = readFileSync(documentPath("/features/link-previews"), "utf8");
const privacySecurity = readFileSync(documentPath("/features/privacy-security"), "utf8");
const pricing = readFileSync(documentPath("/pricing"), "utf8");
const notFound = readFileSync(resolve(root, "dist/public/_documents/not-found.html"), "utf8");
const sitemap = readFileSync(resolve(root, "dist/public/sitemap.xml"), "utf8");
const robots = readFileSync(resolve(root, "dist/public/robots.txt"), "utf8");

for (const [label, text, required] of [
  ["Link Previews", linkPreviews, "Share a link from another Android app"],
  ["Privacy & Security", privacySecurity, "modified or rooted environment"],
  ["Pricing", pricing, "The official Google Play link will appear here after release details are confirmed."],
  ["404 document", notFound, "That reference is not here."],
]) {
  if (!text.includes(required)) fail(`${label} is missing P9 evidence-bound content: ${required}`);
}

for (const route of routes) {
  const canonical = `${siteUrl}${route === "/" ? "" : route}`;
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) fail(`sitemap is missing ${canonical}`);
}

if ((sitemap.match(/<loc>/g) ?? []).length !== routes.length) fail("sitemap has an unexpected canonical route count");
if (!robots.includes("Sitemap: https://mrcopy.pro/sitemap.xml")) fail("robots is missing the canonical sitemap declaration");

if (!process.exitCode) console.log(`P9 build-output QA passed: ${routes.length} canonical documents, selected P9 content, static 404, sitemap, and robots verified.`);
