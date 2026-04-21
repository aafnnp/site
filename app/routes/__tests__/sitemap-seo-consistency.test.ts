import { describe, expect, it } from "vitest";

import { loader as sitemapLoader } from "~/routes/sitemap[.]xml";
import { SITE_URL } from "~/utils/seo";
import { shouldIncludeInSitemap } from "~/utils/seo/seo-route-map";

describe("sitemap seo consistency", () => {
  it("search 这类不收录页面不应进入 sitemap 规则", () => {
    expect(shouldIncludeInSitemap("search")).toBe(false);
  });

  it("about 这类可收录页面应进入 sitemap 规则", () => {
    expect(shouldIncludeInSitemap("about")).toBe(true);
  });

  it("apps 路由应与 sitemap 收录策略保持一致", () => {
    expect(shouldIncludeInSitemap("apps")).toBe(true);
  });

  it("columnDetail 在未支持动态专栏 URL 前不应进入 sitemap 规则", () => {
    expect(shouldIncludeInSitemap("columnDetail")).toBe(false);
  });

  it("sitemap 输出不应包含 search 页面", async () => {
    const response = (await sitemapLoader({} as Parameters<
      typeof sitemapLoader
    >[0])) as Response;
    const sitemap = await response.text();

    expect(sitemap).toContain(`<loc>${SITE_URL}/about</loc>`);
    expect(sitemap).toContain(`<loc>${SITE_URL}/apps</loc>`);
    expect(sitemap).not.toContain(`<loc>${SITE_URL}/search</loc>`);
  });
});
