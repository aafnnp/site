import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "./seo-config";
import { getSeoRuleByPageKind } from "./seo-rules";
import {
  getSeoRouteConfig,
  isSeoRouteKey,
  type SeoRouteKey,
} from "./seo-route-map";

/**
 * 单条 SEO meta 描述对象。
 */
export type SeoMetaDescriptor = Record<string, string | undefined>;

/**
 * 构建 SEO 所需的最小上下文。
 */
export interface BuildSeoMetaContext {
  readonly title: string;
  readonly description: string;
  readonly pathname: string;
  readonly image?: string;
  readonly author?: string;
  readonly publishedTime?: string;
  readonly modifiedTime?: string;
  readonly tags?: readonly string[];
}

/**
 * 构建绝对 URL，统一处理相对路径。
 */
function toAbsoluteUrl(pathname: string): string {
  if (/^https?:\/\//.test(pathname)) {
    return pathname;
  }

  const normalizedPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${normalizedPathname}`;
}

/**
 * 生成统一标题格式。
 */
function buildPageTitle(title: string): string {
  return `${title} - ${SITE_NAME}`;
}

/**
 * 构建最小可用 SEO，作为异常或未知路由的降级结果。
 */
function buildMinimalSeoMeta(
  context: BuildSeoMetaContext,
  canonicalUrl: string,
  includeCanonical: boolean
): SeoMetaDescriptor[] {
  const meta: SeoMetaDescriptor[] = [
    { title: buildPageTitle(context.title) },
    { name: "description", content: context.description },
  ];

  if (includeCanonical) {
    meta.push({ tagName: "link", rel: "canonical", href: canonicalUrl });
  }

  return meta;
}

/**
 * 根据路由配置构建统一 SEO meta。
 */
export function buildSeoMeta(
  routeKey: SeoRouteKey,
  context: BuildSeoMetaContext
): SeoMetaDescriptor[] {
  const routeConfig = getSeoRouteConfig(routeKey);
  if (!routeConfig) {
    return buildMinimalSeoMeta(context, toAbsoluteUrl(context.pathname), true);
  }
  const canonicalUrl = toAbsoluteUrl(context.pathname);
  const rule = getSeoRuleByPageKind(routeConfig.kind);
  const meta = buildMinimalSeoMeta(context, canonicalUrl, rule.requireCanonical);
  const imageUrl = toAbsoluteUrl(context.image || "/og-default.png");

  if (rule.enableOg) {
    meta.push(
      { property: "og:type", content: routeConfig.type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: context.title },
      { property: "og:description", content: context.description },
      { property: "og:image", content: imageUrl },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:locale:alternate", content: "en_US" }
    );
  }

  if (rule.enableTwitter) {
    meta.push(
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: TWITTER_HANDLE },
      { name: "twitter:creator", content: TWITTER_HANDLE },
      { name: "twitter:title", content: context.title },
      { name: "twitter:description", content: context.description },
      { name: "twitter:image", content: imageUrl }
    );
  }

  if (routeConfig.type === "article") {
    const articleModifiedTime = context.modifiedTime ?? context.publishedTime;
    const articleAuthor = context.author || "pfan";

    if (context.publishedTime) {
      meta.push({
        property: "article:published_time",
        content: context.publishedTime,
      });
    }
    if (articleModifiedTime) {
      meta.push({
        property: "article:modified_time",
        content: articleModifiedTime,
      });
    }
    meta.push({
      property: "article:author",
      content: articleAuthor,
    });
    if (context.tags && context.tags.length > 0) {
      context.tags.forEach((tag) => {
        meta.push({ property: "article:tag", content: tag });
      });
    }
  }

  return meta;
}

/**
 * 安全构建 SEO meta，允许未知 routeKey 并自动降级。
 */
export function buildSeoMetaSafe(
  routeKey: string,
  context: BuildSeoMetaContext
): SeoMetaDescriptor[] {
  if (!isSeoRouteKey(routeKey)) {
    return buildMinimalSeoMeta(context, toAbsoluteUrl(context.pathname), true);
  }
  return buildSeoMeta(routeKey, context);
}
