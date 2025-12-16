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
  tags?: string[];
  author?: string;
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
    tags,
    author = DEFAULT_AUTHOR,
  } = options;

  const canonicalUrl = `${SITE_URL}${url}`;
  const ogImage = image || `${SITE_URL}/og-default.png`;

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
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:creator", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];

  // Add keywords if tags provided
  if (tags && tags.length > 0) {
    meta.push({ name: "keywords", content: tags.join(", ") });
  }

  // Add article-specific meta
  if (type === "article" && publishedTime) {
    meta.push({ property: "article:published_time", content: publishedTime });
    meta.push({ property: "article:author", content: author });
    if (tags) {
      tags.forEach((tag) => {
        meta.push({ property: "article:tag", content: tag });
      });
    }
  }

  return meta;
}

/**
 * Generate SEO meta tags for a blog post
 */
export function generatePostSeoMeta(post: { data: PostData; slug?: string }) {
  const { data, slug } = post;

  return generateSeoMeta({
    title: data.title || "Untitled",
    description: data.description || data.title || "",
    url: slug || "/blog",
    type: "article",
    image: data.cover,
    publishedTime: data.date,
    tags: data.tags,
  });
}

/**
 * Generate JSON-LD structured data for a blog post
 */
export function generatePostJsonLd(post: { data: PostData; slug?: string }) {
  const { data, slug } = post;
  const canonicalUrl = `${SITE_URL}${slug || "/blog"}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.description || data.title,
    image: data.cover || `${SITE_URL}/og-default.png`,
    datePublished: data.date,
    dateModified: data.date,
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
    keywords: data.tags?.join(", "),
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
