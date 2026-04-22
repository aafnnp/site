import { describe, expect, it, vi } from "vitest";

import { SITE_URL, TWITTER_HANDLE } from "../../seo";
import {
  buildSeoMeta,
  buildSeoMetaSafe,
  type SeoMetaDescriptor,
} from "../seo-builder";
import * as seoRules from "../seo-rules";

function findMetaByName(
  meta: SeoMetaDescriptor[],
  name: string
): SeoMetaDescriptor | undefined {
  return meta.find((item) => item.name === name);
}

function findMetaByProperty(
  meta: SeoMetaDescriptor[],
  property: string
): SeoMetaDescriptor | undefined {
  return meta.find((item) => item.property === property);
}

describe("seo-builder", () => {
  it("home 路由应按 list 规则输出 OG 和 Twitter", () => {
    const meta = buildSeoMeta("home", {
      title: "首页",
      description: "首页 SEO",
      pathname: "/",
    });

    expect(findMetaByProperty(meta, "og:url")).toEqual({
      property: "og:url",
      content: `${SITE_URL}/`,
    });
    expect(findMetaByName(meta, "twitter:site")).toEqual({
      name: "twitter:site",
      content: TWITTER_HANDLE,
    });
  });

  it("detail 页面应输出 canonical、og 和 twitter", () => {
    const meta = buildSeoMeta("blogDetail", {
      title: "统一 SEO 构建器",
      description: "验证 detail 页面 SEO 输出",
      pathname: "/blog/seo-builder",
      image: "/cover.png",
    });

    expect(meta).toContainEqual({
      tagName: "link",
      rel: "canonical",
      href: `${SITE_URL}/blog/seo-builder`,
    });
    expect(findMetaByProperty(meta, "og:url")).toEqual({
      property: "og:url",
      content: `${SITE_URL}/blog/seo-builder`,
    });
    expect(findMetaByProperty(meta, "og:image")).toEqual({
      property: "og:image",
      content: `${SITE_URL}/cover.png`,
    });
    expect(findMetaByProperty(meta, "og:locale")).toEqual({
      property: "og:locale",
      content: "zh_CN",
    });
    expect(findMetaByProperty(meta, "og:locale:alternate")).toEqual({
      property: "og:locale:alternate",
      content: "en_US",
    });
    expect(findMetaByName(meta, "twitter:card")).toEqual({
      name: "twitter:card",
      content: "summary_large_image",
    });
    expect(findMetaByName(meta, "twitter:site")).toEqual({
      name: "twitter:site",
      content: TWITTER_HANDLE,
    });
  });

  it("article 页面应输出扩展 article 元信息", () => {
    const meta = buildSeoMeta("blogDetail", {
      title: "文章扩展字段",
      description: "验证 article 元信息",
      pathname: "/blog/article-meta",
      publishedTime: "2026-04-21",
      modifiedTime: "2026-04-22",
      author: "pfan",
      tags: ["SEO", "Remix"],
    });

    expect(findMetaByProperty(meta, "article:published_time")).toEqual({
      property: "article:published_time",
      content: "2026-04-21",
    });
    expect(findMetaByProperty(meta, "article:modified_time")).toEqual({
      property: "article:modified_time",
      content: "2026-04-22",
    });
    expect(findMetaByProperty(meta, "article:author")).toEqual({
      property: "article:author",
      content: "pfan",
    });
    expect(meta).toContainEqual({
      property: "article:tag",
      content: "SEO",
    });
    expect(meta).toContainEqual({
      property: "article:tag",
      content: "Remix",
    });
  });

  it("unknown routeKey 应降级返回最小 SEO", () => {
    const meta = buildSeoMetaSafe("unknownRoute", {
      title: "最小 SEO",
      description: "未知路由降级",
      pathname: "/unknown",
    });

    expect(meta).toEqual([
      { title: "最小 SEO - Manon.icu" },
      { name: "description", content: "未知路由降级" },
      {
        tagName: "link",
        rel: "canonical",
        href: `${SITE_URL}/unknown`,
      },
    ]);
  });

  it("requireCanonical 为 false 时不应输出 canonical", () => {
    const ruleSpy = vi
      .spyOn(seoRules, "getSeoRuleByPageKind")
      .mockReturnValue({
        requireCanonical: false,
        enableOg: true,
        enableTwitter: true,
      });

    const meta = buildSeoMeta("blogDetail", {
      title: "无 canonical",
      description: "验证规则生效",
      pathname: "/blog/no-canonical",
    });

    expect(
      meta.find(
        (item) => item.tagName === "link" && item.rel === "canonical"
      )
    ).toBeUndefined();

    ruleSpy.mockRestore();
  });
});
