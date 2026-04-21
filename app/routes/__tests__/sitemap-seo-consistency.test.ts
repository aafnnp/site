import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";
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
    const items = await sitemap();
    const urls = items.map((item) => item.url);

    expect(urls.some((url) => url.endsWith("/"))).toBe(true);
    expect(urls.some((url) => url.endsWith("/search"))).toBe(false);
  });
});
