import type { MetaFunction } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Ad from "../components/ad";
import { SITE_URL, SITE_NAME, TWITTER_HANDLE } from "../utils/seo";
import {
  getPostsSorted,
  filterPostsByTag,
  paginatePosts,
  extractTags,
} from "../utils/posts";
import { PostCard } from "~/components/blog/PostCard";
import { Badge } from "~/components/ui/Badge";
import { Button } from "~/components/ui/Button";
import { Sidebar } from "~/components/layout";
import { motion } from "motion/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const meta: MetaFunction = () => {
  const title = "Articles, guides, and cheat sheets";
  const description = "分享技术文章、开发指南和见解";
  const url = `${SITE_URL}/blog`;

  return [
    { title: `${title} - ${SITE_NAME}` },
    { name: "description", content: description },
    {
      name: "keywords",
      content: "技术文章, 开发指南, 前端开发, 全栈开发, Web开发",
    },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${SITE_URL}/og-default.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${SITE_URL}/og-default.png` },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || "1";
  const pageSize = url.searchParams.get("pageSize") || "12";
  const tag = url.searchParams.get("tag") || undefined;

  let posts = getPostsSorted();
  posts = filterPostsByTag(posts, tag);

  const tags = extractTags(posts);

  const currentPage = parseInt(page);
  const pageSizeNum = parseInt(pageSize);
  const paginatedPosts = paginatePosts(posts, currentPage, pageSizeNum);
  const totalPages = Math.ceil(posts.length / pageSizeNum);

  return json({
    data: paginatedPosts,
    tags,
    currentPage,
    pageSize: pageSizeNum,
    tag,
    totalPages,
    total: posts.length,
  });
}

export default function BlogIndex() {
  const { data, tags, currentPage, pageSize, tag, totalPages, total } =
    useLoaderData<typeof loader>();

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const createPageUrl = (page: number | null, selectedTag?: string) => {
    if (!page) return null;

    const params = new URLSearchParams();
    params.set("page", page.toString());
    if (selectedTag) params.set("tag", selectedTag);

    return `/blog?${params.toString()}`;
  };

  const createTagUrl = (selectedTag: string) => {
    const params = new URLSearchParams();
    params.set("page", "1");

    if (tag !== selectedTag) {
      params.set("tag", selectedTag);
    }

    return `/blog?${params.toString()}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 主内容区 */}
        <main className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              文章列表
            </h1>

            {tag && (
              <div className="mb-6 flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">筛选标签：</span>
                <Badge variant="primary">{tag}</Badge>
                <Link
                  to="/blog"
                  className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  清除
                </Link>
              </div>
            )}

            <Ad />

            {/* 文章列表 */}
            {data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {data.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PostCard
                      slug={post.slug}
                      title={post.data?.title || "无标题"}
                      date={post.data?.date}
                      description={post.data?.description || post.excerpt}
                      tags={post.data?.tags}
                      cover={post.data?.cover}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  暂无文章
                </p>
              </div>
            )}

            <Ad />

            {/* 分页 */}
            {totalPages > 1 && (
              <nav className="mt-12 flex items-center justify-between">
                <div>
                  {prevPage ? (
                    <Link to={createPageUrl(prevPage, tag) || "#"}>
                      <Button variant="outline" size="sm">
                        <FiChevronLeft className="w-4 h-4 mr-1" />
                        上一页
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" size="sm" disabled>
                      <FiChevronLeft className="w-4 h-4 mr-1" />
                      上一页
                    </Button>
                  )}
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-400">
                  第 {currentPage} / {totalPages} 页
                  <span className="ml-2">共 {total} 篇文章</span>
                </div>

                <div>
                  {nextPage ? (
                    <Link to={createPageUrl(nextPage, tag) || "#"}>
                      <Button variant="outline" size="sm">
                        下一页
                        <FiChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" size="sm" disabled>
                      下一页
                      <FiChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                </div>
              </nav>
            )}
          </motion.div>
        </main>

        {/* 标签侧边栏 */}
        <Sidebar sticky className="hidden lg:block">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">标签</h2>
            <div className="flex flex-wrap gap-2">
              {tags.length > 0 ? (
                tags.map((tagName: string) => (
                  <Link key={tagName} to={createTagUrl(tagName)}>
                    <Badge
                      variant={tag === tagName ? "primary" : "default"}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      {tagName}
                    </Badge>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">暂无标签</p>
              )}
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  );
}
