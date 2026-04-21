import type { LoaderFunction } from "@remix-run/node";
import postsData from "../data/posts.json";
import { SITE_URL } from "../utils/seo";
import {
  shouldIncludeInSitemap,
  type SeoRouteKey,
} from "../utils/seo/seo-route-map";

interface SitemapUrl {
  url: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
}

export const loader: LoaderFunction = async () => {
  const today = new Date().toISOString().split("T")[0];

  const staticPageDefinitions: Array<SitemapUrl & { routeKey: SeoRouteKey }> = [
    {
      routeKey: "home",
      url: "/",
      changefreq: "daily",
      priority: "1.0",
      lastmod: today,
    },
    {
      routeKey: "blogList",
      url: "/blog",
      changefreq: "daily",
      priority: "0.9",
      lastmod: today,
    },
    {
      routeKey: "search",
      url: "/search",
      changefreq: "weekly",
      priority: "0.4",
      lastmod: today,
    },
    {
      routeKey: "about",
      url: "/about",
      changefreq: "monthly",
      priority: "0.7",
      lastmod: today,
    },
    {
      routeKey: "apps",
      url: "/apps",
      changefreq: "weekly",
      priority: "0.7",
      lastmod: today,
    },
    {
      routeKey: "contact",
      url: "/contact",
      changefreq: "monthly",
      priority: "0.5",
      lastmod: today,
    },
  ];

  const staticPages: SitemapUrl[] = staticPageDefinitions
    .filter((page) => shouldIncludeInSitemap(page.routeKey))
    .map(({ routeKey: _routeKey, ...page }) => page);

  const postUrls: SitemapUrl[] = postsData.map((post) => ({
    url: post.slug,
    changefreq: "weekly",
    priority: "0.8",
    lastmod: post.data?.date || today,
  }));

  const allUrls: SitemapUrl[] = [...staticPages, ...postUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${SITE_URL}${item.url}</loc>
    <lastmod>${item.lastmod || today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
};
