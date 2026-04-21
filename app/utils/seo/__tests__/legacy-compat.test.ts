import { describe, expect, it } from "vitest";

import { generateSeoMeta, SITE_NAME, SITE_URL } from "../../seo";

describe("legacy seo api", () => {
  it("旧 generateSeoMeta 应转发到统一 builder 输出标准列表页字段", () => {
    const meta = generateSeoMeta({
      title: "Articles, guides, and cheat sheets",
      description: "分享技术文章、开发指南和见解",
      url: "/blog",
      type: "website",
      tags: ["技术文章", "开发指南"],
    });

    expect(meta).toContainEqual({
      title: `Articles, guides, and cheat sheets - ${SITE_NAME}`,
    });
    expect(meta).toContainEqual({
      tagName: "link",
      rel: "canonical",
      href: `${SITE_URL}/blog`,
    });
    expect(meta).toContainEqual({
      property: "og:site_name",
      content: SITE_NAME,
    });
  });

  it("/blog 在 article 类型下仍应保持列表页语义", () => {
    const meta = generateSeoMeta({
      title: "Articles, guides, and cheat sheets",
      description: "分享技术文章、开发指南和见解",
      url: "/blog",
      type: "article",
    });

    expect(meta).toContainEqual({
      property: "og:type",
      content: "website",
    });
    expect(
      meta.find((item) => item.property === "article:published_time")
    ).toBeUndefined();
    expect(meta.find((item) => item.property === "article:author")).toBeUndefined();
  });
});
