import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { formatPageTitle, initialDocuments } from "../dist/ssr/entry-static.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(projectRoot, "dist", "public");
const siteUrl = "https://mrcopy.pro";

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function routeFile(pathname) {
  return pathname === "/" ? path.join(publicDir, "index.html") : path.join(publicDir, pathname.slice(1), "index.html");
}

function count(value, search) {
  return value.split(search).length - 1;
}

for (const document of initialDocuments) {
  const html = await readFile(routeFile(document.path), "utf8");
  const canonical = `${siteUrl}${document.path === "/" ? "" : document.path}`;
  const required = [
    `<title>${escapeHtml(formatPageTitle(document.title))}</title>`,
    `<meta name="description" content="${escapeHtml(document.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<h1>${escapeHtml(document.h1)}</h1>`,
    'id="mr-copy-page-schema"',
    `data-initial-route="${document.path}"`,
  ];
  for (const expected of required) {
    if (!html.includes(expected)) throw new Error(`${document.path} is missing ${expected}`);
  }
  if (count(html, 'rel="canonical"') !== 1) throw new Error(`${document.path} has duplicate canonical elements`);
  if (count(html, 'id="mr-copy-page-schema"') !== 1) throw new Error(`${document.path} has duplicate route schema elements`);
  if (html.includes("route-loading")) throw new Error(`${document.path} includes the client loading fallback in initial HTML`);
}

const notFound = await readFile(path.join(publicDir, "404", "index.html"), "utf8");
if (!notFound.includes('<meta name="robots" content="noindex" />')) throw new Error("404 document is missing noindex metadata");
if (!notFound.includes("That reference is not here.")) throw new Error("404 document is missing the user-facing recovery content");

const sitemap = await readFile(path.join(publicDir, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedUrls = initialDocuments.map((document) => `${siteUrl}${document.path === "/" ? "" : document.path}`);
if (sitemapUrls.length !== expectedUrls.length || sitemapUrls.some((url, index) => url !== expectedUrls[index])) throw new Error("Sitemap does not contain exactly the 15 canonical P7 routes");

const robots = await readFile(path.join(publicDir, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://mrcopy.pro/sitemap.xml")) throw new Error("robots.txt is missing the canonical sitemap declaration");

console.log(`P7 build-output QA passed for ${initialDocuments.length} canonical documents plus the static 404 artifact.`);
