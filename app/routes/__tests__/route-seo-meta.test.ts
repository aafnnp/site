import { beforeEach, describe, expect, it, vi } from "vitest";

import { SITE_NAME, SITE_URL } from "~/utils/seo";

const buildSeoMetaMock = vi.fn();

vi.mock("~/utils/seo/seo-builder", async () => {
  const actual =
    await vi.importActual<typeof import("~/utils/seo/seo-builder")>(
      "~/utils/seo/seo-builder"
    );

  return {
    ...actual,
    buildSeoMeta: (...args: Parameters<typeof actual.buildSeoMeta>) => {
      buildSeoMetaMock(...args);
      return actual.buildSeoMeta(...args);
    },
  };
});

import {
  buildAboutRouteMeta,
  buildAppsRouteMeta,
  buildBlogDetailRouteMeta,
  buildBlogListRouteMeta,
  buildContactRouteMeta,
  buildColumnDetailRouteMeta,
  buildHomeRouteMeta,
  buildSearchRouteMeta,
} from "~/utils/seo/route-seo";

describe("route seo meta", () => {
  beforeEach(() => {
    buildSeoMetaMock.mockClear();
  });

  it("blog detail 应通过统一 builder 输出 canonical", () => {
    const result = buildBlogDetailRouteMeta({
      post: {
        data: {
          title: "统一 SEO 构建器",
          description: "验证博客详情 canonical",
          date: "2026-04-21",
          tags: ["SEO", "Remix"],
        },
        slug: "/blog/seo-builder",
      },
    });

    expect(buildSeoMetaMock).toHaveBeenCalledWith("blogDetail", {
      title: "统一 SEO 构建器",
      description: "验证博客详情 canonical",
      pathname: "/blog/seo-builder",
      author: "pfan",
      publishedTime: "2026-04-21",
      modifiedTime: "2026-04-21",
      tags: ["SEO", "Remix"],
    });
    expect(result).toContainEqual({
      tagName: "link",
      rel: "canonical",
      href: `${SITE_URL}/blog/seo-builder`,
    });
  });

  it("column page 应通过统一 builder 输出 title 和 description", () => {
    const result = buildColumnDetailRouteMeta({
      column: {
        slug: "seo",
        name: "SEO 专栏",
        description: "统一 SEO 专栏说明",
      },
    });

    expect(buildSeoMetaMock).toHaveBeenCalledWith("columnDetail", {
      title: "SEO 专栏 - 专栏",
      description: "统一 SEO 专栏说明",
      pathname: "/column/seo",
    });
    expect(result).toContainEqual({ title: `SEO 专栏 - 专栏 - ${SITE_NAME}` });
    expect(result).toContainEqual({
      name: "description",
      content: "统一 SEO 专栏说明",
    });
  });

  it("home 应通过统一 builder 输出首页 SEO", () => {
    const result = buildHomeRouteMeta();

    expect(buildSeoMetaMock).toHaveBeenCalledWith("home", {
      title: "技术博客与开发工具集合",
      description:
        "分享技术文章、开发指南和实用工具，帮助开发者提升技能和工作效率",
      pathname: "/",
    });
    expect(result).toContainEqual({
      title: `技术博客与开发工具集合 - ${SITE_NAME}`,
    });
    expect(result).toContainEqual({
      tagName: "link",
      rel: "canonical",
      href: `${SITE_URL}/`,
    });
  });

  it("blog list 应通过统一 builder 输出列表页 canonical", () => {
    const result = buildBlogListRouteMeta();

    expect(buildSeoMetaMock).toHaveBeenCalledWith("blogList", {
      title: "Articles, guides, and cheat sheets",
      description: "分享技术文章、开发指南和见解",
      pathname: "/blog",
    });
    expect(result).toContainEqual({
      tagName: "link",
      rel: "canonical",
      href: `${SITE_URL}/blog`,
    });
  });

  it("about 应通过统一 builder 输出基础 SEO", () => {
    const result = buildAboutRouteMeta();

    expect(buildSeoMetaMock).toHaveBeenCalledWith("about", {
      title: "About",
      description: "Freelancer, Fullstack Developer, Particular Frontend",
      pathname: "/about",
    });
    expect(result).toContainEqual({ title: `About - ${SITE_NAME}` });
  });

  it("contact 应通过统一 builder 输出基础 SEO", () => {
    const result = buildContactRouteMeta();

    expect(buildSeoMetaMock).toHaveBeenCalledWith("contact", {
      title: "联系我",
      description: "获取联系信息，发送反馈、建议和问题",
      pathname: "/contact",
    });
    expect(result).toContainEqual({
      tagName: "link",
      rel: "canonical",
      href: `${SITE_URL}/contact`,
    });
  });

  it("search 应通过统一 builder 输出基础 SEO", () => {
    const result = buildSearchRouteMeta();

    expect(buildSeoMetaMock).toHaveBeenCalledWith("search", {
      title: "搜索文章",
      description: "搜索技术文章和开发指南",
      pathname: "/search",
    });
    expect(result).toContainEqual({ title: `搜索文章 - ${SITE_NAME}` });
  });

  it("apps 应通过统一 builder 输出基础 SEO", () => {
    const result = buildAppsRouteMeta();

    expect(buildSeoMetaMock).toHaveBeenCalledWith("apps", {
      title: "应用中心",
      description: "探索我们开发的各种实用工具和应用",
      pathname: "/apps",
    });
    expect(result).toContainEqual({
      tagName: "link",
      rel: "canonical",
      href: `${SITE_URL}/apps`,
    });
  });

  it("blog detail 无数据时应保持 404 noindex 语义", () => {
    const result = buildBlogDetailRouteMeta(undefined);

    expect(result).toContainEqual({
      name: "robots",
      content: "noindex, nofollow",
    });
  });

  it("column page 无数据时应保持原有 404 文案", () => {
    const result = buildColumnDetailRouteMeta(undefined);

    expect(result).toEqual([
      { title: `专栏未找到 - ${SITE_NAME}` },
      { name: "description", content: "请求的专栏不存在" },
      { name: "robots", content: "noindex, nofollow" },
    ]);
  });
});
