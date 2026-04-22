import { generate404Meta, resolvePostSeoMetaContext, SITE_NAME } from "../seo";
import {
  buildSeoMeta,
  type BuildSeoMetaContext,
  type SeoMetaDescriptor,
} from "./seo-builder";
import type { SeoRouteKey } from "./seo-route-map";

interface BlogRouteSeoData {
  readonly post?: {
    readonly data?: {
      readonly title?: string;
      readonly description?: string | null;
      readonly cover?: string;
      readonly date?: string;
      readonly tags?: string[];
    };
    readonly slug?: string;
  };
}

interface ColumnRouteSeoData {
  readonly column?: {
    readonly slug: string;
    readonly name: string;
    readonly description: string;
  };
}

type PrimaryRouteKey =
  | "home"
  | "blogList"
  | "search"
  | "apps"
  | "about"
  | "contact";

/**
 * 统一构建主要静态路由的 SEO meta。
 */
function buildPrimaryRouteMeta(
  routeKey: PrimaryRouteKey,
  context: BuildSeoMetaContext
): SeoMetaDescriptor[] {
  return buildSeoMeta(routeKey as SeoRouteKey, context);
}

/**
 * 构建博客详情页的统一 SEO meta。
 */
export function buildBlogDetailRouteMeta(
  data?: BlogRouteSeoData
): SeoMetaDescriptor[] {
  const post = data?.post;
  if (!post?.data) {
    return generate404Meta();
  }

  return buildSeoMeta(
    "blogDetail",
    resolvePostSeoMetaContext({
      data: post.data,
      slug: post.slug,
    })
  );
}

/**
 * 构建专栏页的统一 SEO meta。
 */
export function buildColumnDetailRouteMeta(
  data?: ColumnRouteSeoData
): SeoMetaDescriptor[] {
  if (!data?.column) {
    const notFoundMeta: SeoMetaDescriptor[] = [
      { title: `专栏未找到 - ${SITE_NAME}` },
      {
        name: "description",
        content: "请求的专栏不存在",
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ];

    return notFoundMeta;
  }

  return buildSeoMeta("columnDetail", {
    title: `${data.column.name} - 专栏`,
    description: data.column.description,
    pathname: `/column/${data.column.slug}`,
  });
}

/**
 * 构建首页的统一 SEO meta。
 */
export function buildHomeRouteMeta(): SeoMetaDescriptor[] {
  return buildPrimaryRouteMeta("home", {
    title: "技术博客与开发工具集合",
    description:
      "分享技术文章、开发指南和实用工具，帮助开发者提升技能和工作效率",
    pathname: "/",
  });
}

/**
 * 构建博客列表页的统一 SEO meta。
 */
export function buildBlogListRouteMeta(): SeoMetaDescriptor[] {
  return buildPrimaryRouteMeta("blogList", {
    title: "Articles, guides, and cheat sheets",
    description: "分享技术文章、开发指南和见解",
    pathname: "/blog",
  });
}

/**
 * 构建关于页的统一 SEO meta。
 */
export function buildAboutRouteMeta(): SeoMetaDescriptor[] {
  return buildPrimaryRouteMeta("about", {
    title: "About",
    description: "Freelancer, Fullstack Developer, Particular Frontend",
    pathname: "/about",
  });
}

/**
 * 构建联系页的统一 SEO meta。
 */
export function buildContactRouteMeta(): SeoMetaDescriptor[] {
  return buildPrimaryRouteMeta("contact", {
    title: "联系我",
    description: "获取联系信息，发送反馈、建议和问题",
    pathname: "/contact",
  });
}

/**
 * 构建搜索页的统一 SEO meta。
 */
export function buildSearchRouteMeta(): SeoMetaDescriptor[] {
  return buildPrimaryRouteMeta("search", {
    title: "搜索文章",
    description: "搜索技术文章和开发指南",
    pathname: "/search",
  });
}

/**
 * 构建应用列表页的统一 SEO meta。
 */
export function buildAppsRouteMeta(): SeoMetaDescriptor[] {
  return buildPrimaryRouteMeta("apps", {
    title: "应用中心",
    description: "探索我们开发的各种实用工具和应用",
    pathname: "/apps",
  });
}
