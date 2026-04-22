export interface BuildPageMetaInput {
  siteUrl: string;
  path: string;
  title?: string;
  description?: string;
}

export interface PageMeta {
  alternates: {
    canonical: string;
  };
  title?: string;
  description?: string;
}

/**
 * 构建页面基础元数据。
 */
export function buildPageMeta(input: BuildPageMetaInput): PageMeta {
  return {
    alternates: {
      canonical: buildCanonicalUrl(input.siteUrl, input.path),
    },
    title: input.title,
    description: input.description,
  };
}

/**
 * 规范化并拼接 canonical URL。
 */
export function buildCanonicalUrl(siteUrl: string, path: string): string {
  const normalizedSiteUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedSiteUrl}${normalizedPath}`;
}

export type RouteKey = "blog-detail";

export interface RouteParams {
  slug?: string;
}

export interface RouteMetadataOptions {
  baseUrl?: string;
}

/**
 * 按路由键构建页面元数据（Task3 最小实现）。
 */
export function buildRouteMetadata(
  route: RouteKey,
  params: RouteParams,
  options?: RouteMetadataOptions,
): PageMeta {
  const siteUrl = options?.baseUrl ?? process.env.SITE_URL ?? "https://example.com";

  if (route === "blog-detail") {
    return {
      alternates: {
        canonical: buildCanonicalUrl(siteUrl, `/blog/${params.slug ?? ""}`),
      },
      title: "Blog",
    };
  }

  return {
    alternates: {
      canonical: buildCanonicalUrl(siteUrl, "/"),
    },
  };
}
