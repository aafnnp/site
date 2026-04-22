import type { MetadataRoute } from "next";
import { buildContentIndex } from "@/src/content/content-index";
import { buildSitemapItems } from "@/src/domain/seo/sitemap-builder";

/**
 * 生成站点地图数据。
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const index = await buildContentIndex();
  const slugs = index.posts.map((post) => post.slug);
  return buildSitemapItems(slugs);
}
