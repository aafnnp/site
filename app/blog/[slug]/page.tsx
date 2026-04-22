import type { Metadata } from "next";
import { buildRouteMetadata } from "@/src/domain/seo/meta-builder";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }> | {
    slug: string;
  };
}

/**
 * 博客详情页元数据。
 */
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  return buildRouteMetadata("blog-detail", { slug: resolvedParams.slug });
}

/**
 * 博客详情页。
 */
export default function BlogDetailPage() {
  return (
    <main>
      <h1>博客详情</h1>
    </main>
  );
}
