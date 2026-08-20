import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { initialDocuments, formatPageTitle } from "../dist/ssr/entry-static.js";
import { renderRoute } from "../dist/ssr/entry-static.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(projectRoot, "dist", "public");
const template = await readFile(path.join(publicDir, "index.html"), "utf8");
const siteUrl = "https://mrcopy.pro";
const appIconUrl = `${siteUrl}/manus-storage/mr_copy_app_icon_256_f8bbff73.webp`;

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function documentHead(document) {
  const canonical = `${siteUrl}${document.path === "/" ? "" : document.path}`;
  const schema = JSON.stringify(document.schema).replace(/</g, "\\u003c");
  return [
    "<!-- initial-document-head:start -->",
    `    <meta name="description" content="${escapeHtml(document.description)}" />`,
    '    <meta name="theme-color" content="#5C56E1" />',
    '    <meta property="og:site_name" content="Mr. Copy" />',
    `    <meta property="og:title" content="${escapeHtml(formatPageTitle(document.title))}" />`,
    `    <meta property="og:description" content="${escapeHtml(document.description)}" />`,
    `    <meta property="og:url" content="${canonical}" />`,
    `    <meta property="og:image" content="${appIconUrl}" />`,
    '    <meta name="twitter:card" content="summary" />',
    `    <meta name="twitter:title" content="${escapeHtml(formatPageTitle(document.title))}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(document.description)}" />`,
    `    <meta name="twitter:image" content="${appIconUrl}" />`,
    `    <link rel="icon" href="${appIconUrl}" />`,
    `    <link rel="canonical" href="${canonical}" />`,
    `    <script id="mr-copy-page-schema" type="application/ld+json">${schema}</script>`,
    `    <title>${escapeHtml(formatPageTitle(document.title))}</title>`,
    "    <!-- initial-document-head:end -->",
  ].join("\n");
}

function applyDocument(templateHtml, document, body) {
  const withHead = templateHtml.replace(
    /<!-- initial-document-head:start -->[\s\S]*?<!-- initial-document-head:end -->/,
    documentHead(document),
  );
  return withHead.replace('<div id="root"></div>', `<div id="root" data-initial-route="${document.path}">${body}</div>`);
}

for (const document of initialDocuments) {
  const body = renderRoute(document.path);
  const outputPath = document.path === "/"
    ? path.join(publicDir, "index.html")
    : path.join(publicDir, document.path.slice(1), "index.html");
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, applyDocument(template, document, body), "utf8");
}

const notFoundDocument = {
  path: "/404",
  title: "Page Not Found",
  description: "The requested Mr. Copy page could not be found.",
  schema: { "@context": "https://schema.org", "@type": "WebPage", name: "Page Not Found", url: `${siteUrl}/404` },
};
const notFoundHead = documentHead(notFoundDocument).replace(
  '    <meta name="theme-color" content="#5C56E1" />',
  '    <meta name="robots" content="noindex" />\n    <meta name="theme-color" content="#5C56E1" />',
);
const notFoundTemplate = template.replace(
  /<!-- initial-document-head:start -->[\s\S]*?<!-- initial-document-head:end -->/,
  notFoundHead,
);
const notFoundHtml = notFoundTemplate.replace('<div id="root"></div>', `<div id="root" data-initial-route="/404">${renderRoute("/404")}</div>`);
await mkdir(path.join(publicDir, "404"), { recursive: true });
await writeFile(path.join(publicDir, "404", "index.html"), notFoundHtml, "utf8");
