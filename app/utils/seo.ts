/**
 * SEO utilities for generating meta tags
 */

export const SITE_URL = "https://manon.icu";
export const SITE_NAME = "Manon.icu";
export const TWITTER_HANDLE = "@Manonicu";
export const DEFAULT_AUTHOR = "pfan";

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

  const canonicalUrl = `${SITE_URL}${url}`;
  const ogImage = image || `${SITE_URL}/og-default.png`;
  
  // 增强关键词（针对 HarmonyOS 文章）
  const enhancedTags = enhanceHarmonyKeywords(tags);

  const meta: Array<Record<string, string>> = [
    { title: `${title} - ${SITE_NAME}` },
    { name: "description", content: description },
    { name: "author", content: author },
    // Canonical URL
    { tagName: "link", rel: "canonical", href: canonicalUrl },
    // Open Graph
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:url", content: canonicalUrl },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:locale", content: "zh_CN" },
    { property: "og:locale:alternate", content: "en_US" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:creator", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];

  // Add keywords if tags provided
  if (enhancedTags && enhancedTags.length > 0) {
    meta.push({ name: "keywords", content: enhancedTags.join(", ") });
  }

  // Add article-specific meta
  if (type === "article") {
    if (publishedTime) {
      meta.push({ property: "article:published_time", content: publishedTime });
    }
    if (modifiedTime || publishedTime) {
      meta.push({
        property: "article:modified_time",
        content: modifiedTime || publishedTime || "",
      });
    }
    meta.push({ property: "article:author", content: author });
    
    if (section) {
      meta.push({ property: "article:section", content: section });
    }
    
    if (enhancedTags) {
      enhancedTags.forEach((tag) => {
        meta.push({ property: "article:tag", content: tag });
      });
    }
  }

  return meta;
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
  const { data, slug } = post;
  
  const description = generateHarmonyDescription(
    data.title,
    data.description,
    slug
  );
  const section = extractSectionFromSlug(slug);

  return generateSeoMeta({
    title: data.title || "Untitled",
    description: description,
    url: slug || "/blog",
    type: "article",
    image: data.cover,
    publishedTime: data.date,
    modifiedTime: data.date, // 如果没有单独的修改时间，使用发布日期
    tags: data.tags,
    section: section,
  });
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
