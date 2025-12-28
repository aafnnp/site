import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getPostsSorted } from "../utils/posts";
import { SITE_URL, SITE_NAME } from "../utils/seo";
import { PostCard } from "~/components/blog/PostCard";
import { motion } from "motion/react";
import { FiSearch } from "react-icons/fi";

export const meta: MetaFunction = () => {
  const title = "搜索文章";
  const description = "搜索技术文章和开发指南";

  return [
    { title: `${title} - ${SITE_NAME}` },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/search` },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";

  const allPosts = getPostsSorted();

  // 简单的全文搜索
  const searchResults = query
    ? allPosts.filter((post) => {
        const searchText = query.toLowerCase();
        const title = post.data?.title?.toLowerCase() || "";
        const description = post.data?.description?.toLowerCase() || "";
        const content = post.content?.toLowerCase() || "";
        const tags = post.data?.tags?.join(" ").toLowerCase() || "";

        return (
          title.includes(searchText) ||
          description.includes(searchText) ||
          content.includes(searchText) ||
          tags.includes(searchText)
        );
      })
    : [];

  return json({ query, results: searchResults, total: searchResults.length });
}

export default function SearchPage() {
  const { query, results, total } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newQuery = formData.get("q") as string;
    setSearchParams({ q: newQuery });
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          搜索文章
        </h1>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="输入关键词搜索..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
              autoFocus
            />
          </div>
        </form>

        {query && (
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              找到 <span className="font-semibold text-gray-900 dark:text-white">{total}</span> 篇相关文章
              {query && (
                <>
                  {" "}关于 "<span className="font-semibold">{query}</span>"
                </>
              )}
            </p>
          </div>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((post, index) => (
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
        ) : query ? (
          <div className="text-center py-16">
            <FiSearch className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              没有找到相关文章
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
              请尝试使用其他关键词
            </p>
          </div>
        ) : (
          <div className="text-center py-16">
            <FiSearch className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              输入关键词开始搜索
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

