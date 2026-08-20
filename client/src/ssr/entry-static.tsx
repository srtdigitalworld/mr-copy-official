import { renderToStaticMarkup } from "react-dom/server";
import { Router } from "wouter";
import StaticApp from "./StaticApp";
export { formatPageTitle, initialDocuments } from "../lib/initialDocument";

export function renderRoute(pathname: string): string {
  return renderToStaticMarkup(
    <Router ssrPath={pathname}>
      <StaticApp />
    </Router>,
  );
}
