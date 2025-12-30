import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { parseMarkdown } from "../utils/markdown";
import postsData from "../data/posts.json";
import {
  generatePostSeoMeta,
  generatePostJsonLd,
  generate404Meta,
} from "../utils/seo";
import { ReadingProgress } from "~/components/blog/ReadingProgress";
import { TableOfContents } from "~/components/blog/TableOfContents";
import { PostNavigation } from "~/components/blog/PostNavigation";
import { Badge } from "~/components/ui/Badge";
import { Sidebar } from "~/components/layout";
import { getPostsSorted } from "../utils/posts";
import { motion } from "motion/react";

// Post data interface
interface PostData {
  data: {
    type?: string;
    date?: string;
    title?: string;
    tags?: string[];
    originalUrl?: string;
    handle?: string;
    description?: string | null;
    cover?: string;
  };
  content?: string;
  slug?: string;
  isEmpty?: boolean;
  excerpt?: string;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.post?.data) {
    return generate404Meta();
  }
  return generatePostSeoMeta(data.post);
};

// Get post data by slug (splat route)
function getPostBySlug(slug: string): PostData | null {
  const decodedSlug = decodeURIComponent(slug);
  const fullSlugPath = `/blog/${decodedSlug}`;

  // 首先尝试直接匹配
  let post: PostData | null =
    postsData.find((post) => post.slug === fullSlugPath) || null;

  // 如果找不到，尝试匹配 index 文件（处理目录下的 index.mdx）
  if (!post) {
    const indexSlugPath = `${fullSlugPath}/index`;
    post = postsData.find((post) => post.slug === indexSlugPath) || null;
  }

  return post;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const splat = params["*"];

  if (!splat) {
    throw new Response("Not Found", { status: 404 });
  }

  const post = getPostBySlug(splat);

  if (!post || !post.data) {
    throw new Response("Not Found", { status: 404 });
  }

  const articleContent = await parseMarkdown(post.content || "");
  const jsonLd = generatePostJsonLd(post);

  // 获取相邻文章
  const allPosts = getPostsSorted();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost =
    currentIndex > 0
      ? {
          slug: allPosts[currentIndex - 1].slug,
          title: allPosts[currentIndex - 1].data?.title || "无标题",
        }
      : undefined;
  const nextPost =
    currentIndex < allPosts.length - 1 && currentIndex >= 0
      ? {
          slug: allPosts[currentIndex + 1].slug,
          title: allPosts[currentIndex + 1].data?.title || "无标题",
        }
      : undefined;

  return json({ post, articleContent, jsonLd, prevPost, nextPost });
}

export default function BlogPost() {
  const { post, articleContent, jsonLd, prevPost, nextPost } =
    useLoaderData<typeof loader>();

  return (
    <>
      <ReadingProgress />
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 主内容区 */}
          <article className="flex-1 prose prose-lg dark:prose-invert max-w-none">
            {/* JSON-LD Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {post.data?.date && (
                <div className="text-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                  发布于 {post.data.date}
                </div>
              )}
              <h1 className="text-center mt-4 mb-6 text-3xl sm:text-4xl font-bold">
                {post.data?.title}
              </h1>

              {post.data?.tags && post.data.tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {post.data.tags.map((tag: string) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {post.data?.originalUrl && (
                <div className="text-center text-gray-500 dark:text-gray-400 text-sm mb-6">
                  本文翻译自：{" "}
                  <Link
                    to={post.data.originalUrl}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.data.originalUrl}
                  </Link>
                </div>
              )}

              {post.data?.description && (
                <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-8">
                  {post.data.description}
                </p>
              )}
            </motion.header>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose-content prose-headings:scroll-mt-24"
              dangerouslySetInnerHTML={{ __html: articleContent }}
            />

            <PostNavigation prevPost={prevPost} nextPost={nextPost} />
          </article>

          {/* 目录侧边栏 */}
          <Sidebar sticky className="hidden lg:block">
            <TableOfContents />
          </Sidebar>
        </div>
      </div>
    </>
  );
}

// Re-export shared ErrorBoundary component
export { BlogErrorBoundary as ErrorBoundary } from "~/components/BlogErrorBoundary";
