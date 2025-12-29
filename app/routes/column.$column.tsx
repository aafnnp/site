import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Ad from "../components/ad";
import { SITE_URL, SITE_NAME, generateSeoMeta } from "../utils/seo";
import {
  getColumnPosts,
  getColumnStats,
  paginatePosts,
} from "../utils/posts";
import { getColumnBySlug, isValidColumnSlug } from "../utils/columns";
import { PostCard } from "~/components/blog/PostCard";
import { Badge } from "~/components/ui/Badge";
import { Button } from "~/components/ui/Button";
import { Sidebar } from "~/components/layout";
import { motion } from "motion/react";
import { FiChevronLeft, FiChevronRight, FiBook, FiCalendar, FiTag } from "react-icons/fi";

/**
 * 生成专栏页面的 SEO meta 标签
 */
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.column) {
    return [
      { title: "专栏未找到 - " + SITE_NAME },
      { name: "description", content: "请求的专栏不存在" },
    ];
  }

  const { column, stats } = data;
  
  return generateSeoMeta({
    title: `${column.name} - 专栏`,
    description: column.description,
    url: `/column/${column.slug}`,
    type: "website",
    tags: stats.tags,
  });
};

/**
 * Loader 函数：加载专栏数据
 */
export async function loader({ params, request }: LoaderFunctionArgs) {
  const columnSlug = params.column;
  
  // 验证专栏 slug 是否有效
  if (!columnSlug || !isValidColumnSlug(columnSlug)) {
    throw new Response("专栏未找到", { status: 404 });
  }

  // 获取专栏配置
  const column = getColumnBySlug(columnSlug);
  if (!column) {
    throw new Response("专栏未找到", { status: 404 });
  }

  // 获取专栏文章和统计信息
  const allPosts = getColumnPosts(columnSlug);
  const stats = getColumnStats(columnSlug);

  // 处理分页
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || "1";
  const pageSize = url.searchParams.get("pageSize") || "12";
  
  const currentPage = parseInt(page);
  const pageSizeNum = parseInt(pageSize);
  const paginatedPosts = paginatePosts(allPosts, currentPage, pageSizeNum);
  const totalPages = Math.ceil(allPosts.length / pageSizeNum);

  return json({
    column,
    stats,
    data: paginatedPosts,
    currentPage,
    pageSize: pageSizeNum,
    totalPages,
    total: allPosts.length,
  });
}

/**
 * 专栏页面组件
 */
export default function ColumnPage() {
  const { column, stats, data, currentPage, pageSize, totalPages, total } =
    useLoaderData<typeof loader>();

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  /**
   * 创建分页 URL
   */
  const createPageUrl = (page: number | null) => {
    if (!page) return null;
    const params = new URLSearchParams();
    params.set("page", page.toString());
    return `/column/${column.slug}?${params.toString()}`;
  };

  /**
   * 格式化日期
   */
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "未知";
    const date = new Date(dateStr);
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
            {/* 专栏头部 */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${column.color || "from-gray-500 to-gray-600"} text-white`}
                >
                  <FiBook className="w-6 h-6" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  {column.name}
                </h1>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {column.description}
              </p>

              {/* 统计信息 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FiBook className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">文章总数</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stats.total}
                  </div>
                </div>

                {stats.latestDate && (
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FiCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">最新更新</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {formatDate(stats.latestDate)}
                    </div>
                  </div>
                )}

                {stats.tags.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FiTag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">标签数量</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stats.tags.length}
                    </div>
                  </div>
                )}
              </div>

              {/* 热门标签 */}
              {stats.tags.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                    热门标签
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stats.tags.slice(0, 10).map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
                  该专栏暂无文章
                </p>
              </div>
            )}

            <Ad />

            {/* 分页 */}
            {totalPages > 1 && (
              <nav className="mt-12 flex items-center justify-between">
                <div>
                  {prevPage ? (
                    <Link to={createPageUrl(prevPage) || "#"}>
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
                    <Link to={createPageUrl(nextPage) || "#"}>
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

        {/* 侧边栏 */}
        <Sidebar sticky className="hidden lg:block">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              专栏信息
            </h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  文章总数
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.total}
                </div>
              </div>
              
              {stats.latestDate && (
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    最新更新
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {formatDate(stats.latestDate)}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/blog"
                  className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  返回文章列表 →
                </Link>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  );
}

