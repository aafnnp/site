/**
 * SEO utilities for generating meta tags
 */

import {
  buildSeoMetaSafe,
  type BuildSeoMetaContext,
  type SeoMetaDescriptor,
} from "./seo/seo-builder";
import {
  DEFAULT_AUTHOR,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from "./seo/seo-config";

export { DEFAULT_AUTHOR, SITE_NAME, SITE_URL, TWITTER_HANDLE };

interface PostData {
  title?: string;
  description?: string | null;
  tags?: string[];
  cover?: string;
  date?: string;
}

interface SeoMetaOptions {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  author?: string;
  section?: string;
}

/**
 * 将旧 SEO 接口中的 URL 归一化为 pathname。
 */
function normalizeLegacySeoPath(url: string): string {
  if (/^https?:\/\//.test(url)) {
    return new URL(url).pathname || "/";
  }

  return url.startsWith("/") ? url : `/${url}`;
}

/**
 * 为旧 SEO 接口推导统一 builder 使用的 routeKey。
 */
function resolveLegacyRouteKey(
  pathname: string,
  type: SeoMetaOptions["type"]
): string {
  if (pathname === "/") {
    return "home";
  }
  if (pathname === "/blog") {
    return "blogList";
  }
  if (pathname === "/about") {
    return "about";
  }
  if (pathname === "/contact") {
    return "contact";
  }
  if (pathname === "/search") {
    return "search";
  }
  if (pathname === "/apps") {
    return "apps";
  }
  if (pathname.startsWith("/blog/")) {
    return "blogDetail";
  }
  if (pathname.startsWith("/column/")) {
    return "columnDetail";
  }

  return type === "article" ? "blogDetail" : "legacy";
}

/**
 * 为旧 SEO 接口补充仍需保留的历史字段。
 */
function appendLegacySeoFields(
  meta: SeoMetaDescriptor[],
  options: {
    author: string;
    tags: string[];
    section?: string;
    type: "website" | "article";
  }
): SeoMetaDescriptor[] {
  const nextMeta = [...meta, { name: "author", content: options.author }];

  if (options.tags.length > 0) {
    nextMeta.push({ name: "keywords", content: options.tags.join(", ") });
  }

  if (options.type === "article" && options.section) {
    nextMeta.push({
      property: "article:section",
      content: options.section,
    });
  }

  return nextMeta;
}

/**
 * 增强 HarmonyOS 相关文章的关键词
 * 如果文章包含 HarmonyOS 标签，自动添加相关关键词
 */
function enhanceHarmonyKeywords(tags?: string[]): string[] {
  if (!tags || !tags.includes("HarmonyOS")) {
    return tags || [];
  }

  const harmonyKeywords = [
    "HarmonyOS",
    "鸿蒙",
    "鸿蒙开发",
    "HarmonyOS 开发",
    "ArkTS",
    "ArkUI",
    "华为鸿蒙",
    "鸿蒙应用开发",
  ];

  // 合并原有标签和新关键词，去重
  const combined = new Set([...tags, ...harmonyKeywords]);
  return Array.from(combined);
}

/**
 * Generate complete SEO meta tags for a page
 */
export function generateSeoMeta(options: SeoMetaOptions) {
  const {
    title,
    description,
    url,
    type = "website",
    image,
    publishedTime,
    modifiedTime,
    tags,
    author = DEFAULT_AUTHOR,
    section,
  } = options;

  const pathname = normalizeLegacySeoPath(url);
  const enhancedTags = enhanceHarmonyKeywords(tags);
  const routeKey = resolveLegacyRouteKey(pathname, type);
  const meta = buildSeoMetaSafe(routeKey, {
    title,
    description,
    pathname,
    image,
    author,
    publishedTime,
    modifiedTime,
    tags: enhancedTags,
  });

  return appendLegacySeoFields(meta, {
    author,
    tags: enhancedTags,
    section,
    type,
  });
}

/**
 * 从 slug 中提取文章分类/章节信息
 */
function extractSectionFromSlug(slug?: string): string | undefined {
  if (!slug) return undefined;

  // 从 /blog/harmony/journey/01-preparation 提取 "鸿蒙开发"
  if (slug.includes("/harmony/")) {
    return "鸿蒙开发";
  }
  // 可以根据需要添加更多分类规则
  if (slug.includes("/javascript/")) {
    return "JavaScript";
  }
  if (slug.includes("/css/")) {
    return "CSS";
  }

  return undefined;
}

/**
 * 为 HarmonyOS 文章生成优化的描述
 */
function generateHarmonyDescription(
  title?: string,
  description?: string | null,
  slug?: string
): string {
  if (description) {
    return description;
  }

  // 如果文章是关于 HarmonyOS 的，生成描述
  if (slug?.includes("/harmony/")) {
    if (title) {
      return `学习 ${title}，掌握 HarmonyOS 鸿蒙应用开发技术，包括 ArkTS 语言和 ArkUI 框架。适合 Web 开发人员快速上手鸿蒙开发。`;
    }
    return "学习 HarmonyOS 鸿蒙应用开发，掌握 ArkTS 语言和 ArkUI 框架，适合 Web 开发人员快速上手。";
  }

  return title || "";
}

/**
 * Generate SEO meta tags for a blog post
 */
export function generatePostSeoMeta(post: { data: PostData; slug?: string }) {
  return generateSeoMeta({
    ...resolvePostSeoMetaContext(post),
    url: post.slug || "/blog",
    type: "article",
    publishedTime: post.data.date,
    modifiedTime: post.data.date, // 如果没有单独的修改时间，使用发布日期
    tags: post.data.tags,
    section: extractSectionFromSlug(post.slug),
  });
}

/**
 * 解析博客详情页统一 SEO 构建器所需上下文。
 */
export function resolvePostSeoMetaContext(post: {
  data: PostData;
  slug?: string;
}): BuildSeoMetaContext {
  const { data, slug } = post;

  return {
    title: data.title || "Untitled",
    description: generateHarmonyDescription(data.title, data.description, slug),
    pathname: slug || "/blog",
    image: data.cover,
    author: DEFAULT_AUTHOR,
    publishedTime: data.date,
    modifiedTime: data.date,
    tags: enhanceHarmonyKeywords(data.tags),
  };
}

/**
 * Generate JSON-LD structured data for a blog post
 */
export function generatePostJsonLd(post: { data: PostData; slug?: string }) {
  const { data, slug } = post;
  const canonicalUrl = `${SITE_URL}${slug || "/blog"}`;

  // 增强关键词（针对 HarmonyOS 文章）
  const enhancedTags = enhanceHarmonyKeywords(data.tags);
  const description = generateHarmonyDescription(
    data.title,
    data.description,
    slug
  );
  const section = extractSectionFromSlug(slug);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: description,
    image: data.cover || `${SITE_URL}/og-default.png`,
    datePublished: data.date,
    dateModified: data.date,
    inLanguage: "zh-CN",
    author: {
      "@type": "Person",
      name: DEFAULT_AUTHOR,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    keywords: enhancedTags?.join(", ") || "",
    articleSection: section,
  };
}

/**
 * Generate JSON-LD for the website
 */
export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "技术文章和见解",
    author: {
      "@type": "Person",
      name: DEFAULT_AUTHOR,
    },
  };
}

/**
 * Default meta tags for 404 pages
 */
export function generate404Meta() {
  return [
    { title: "Post Not Found - " + SITE_NAME },
    { name: "description", content: "The requested post could not be found." },
    { name: "robots", content: "noindex, nofollow" },
  ];
}
