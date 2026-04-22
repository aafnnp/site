import { createDefaultRouteSeoMap, type RouteSeoItem } from "./route-seo-map";

export interface SitemapItem {
  url: string;
  lastModified?: string;
}

export interface BuildSitemapXmlInput {
  siteUrl: string;
  routes?: RouteSeoItem[];
}

/**
 * 构建结构化 sitemap 条目（Task3 最小实现）。
 */
export function buildSitemapItems(
  postSlugs: string[],
  baseUrl = process.env.SITE_URL ?? "https://example.com",
): SitemapItem[] {
  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const postItems = postSlugs.map((slug) => ({
    url: `${normalizedBaseUrl}/blog/${slug}`,
  }));

  return [{ url: `${normalizedBaseUrl}/` }, ...postItems];
}

/**
 * 构建站点地图 XML。
 */
export function buildSitemapXml(input: BuildSitemapXmlInput): string {
  const routes = input.routes ?? createDefaultRouteSeoMap();
  const normalizedSiteUrl = input.siteUrl.endsWith("/")
    ? input.siteUrl.slice(0, -1)
    : input.siteUrl;
  const allRoutes = routes.some((route) => route.path === "/")
    ? routes
    : [{ path: "/" }, ...routes];

  const urlItems = allRoutes
    .map((route) => {
      const path = route.path === "/" ? "/" : route.path.startsWith("/") ? route.path : `/${route.path}`;
      const loc = path === "/" ? `${normalizedSiteUrl}/` : `${normalizedSiteUrl}${path}`;
      return `<url><loc>${loc}</loc></url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlItems}</urlset>`;
}
