import type { SeoPageKind } from "./seo-types";

/**
 * 路由级 SEO kind 映射。
 */
export const SEO_ROUTE_KIND_MAP = {
  home: "list",
  blogList: "list",
  blogDetail: "detail",
  columnDetail: "detail",
  search: "utility",
  apps: "utility",
  about: "utility",
  contact: "utility",
} as const satisfies Record<string, SeoPageKind>;

/**
 * 受支持的 SEO 路由键。
 */
export type SeoRouteKey = keyof typeof SEO_ROUTE_KIND_MAP;

const SEO_ROUTE_META_TYPE_MAP: Readonly<Record<SeoRouteKey, "website" | "article">> =
  {
    home: "website",
    blogList: "website",
    blogDetail: "article",
    columnDetail: "website",
    search: "website",
    apps: "website",
    about: "website",
    contact: "website",
  };

const SEO_ROUTE_SITEMAP_MAP: Readonly<Record<SeoRouteKey, boolean>> = {
  home: true,
  blogList: true,
  blogDetail: true,
  // 当前 sitemap 未接入动态专栏 slug 数据源，待后续支持动态专栏 URL 后再开启。
  columnDetail: false,
  search: false,
  apps: true,
  about: true,
  contact: true,
};

/**
 * SEO 路由配置。
 */
export interface SeoRouteConfig {
  readonly kind: SeoPageKind;
  readonly type: "website" | "article";
  readonly includeInSitemap: boolean;
}

/**
 * 判断给定字符串是否为已注册的 SEO 路由键。
 */
export function isSeoRouteKey(routeKey: string): routeKey is SeoRouteKey {
  return routeKey in SEO_ROUTE_KIND_MAP;
}

/**
 * 读取 SEO 路由配置，未知 key 返回 null。
 */
export function getSeoRouteConfig(routeKey: string): SeoRouteConfig | null {
  if (!isSeoRouteKey(routeKey)) {
    return null;
  }

  return {
    kind: SEO_ROUTE_KIND_MAP[routeKey],
    type: SEO_ROUTE_META_TYPE_MAP[routeKey],
    includeInSitemap: SEO_ROUTE_SITEMAP_MAP[routeKey],
  };
}

/**
 * 判断路由是否应进入 sitemap。
 */
export function shouldIncludeInSitemap(routeKey: SeoRouteKey): boolean {
  return SEO_ROUTE_SITEMAP_MAP[routeKey];
}
