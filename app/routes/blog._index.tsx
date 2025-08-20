import { MetaFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, Link, useSearchParams } from "@remix-run/react";
import path from "path";
import globFiles from "~/utils/globFiles";

// 定义类型接口
interface BlogData {
  data: {
    date: string;
    title?: string;
    tags?: string[];
  };
  slug: string;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Articles, guides, and cheat sheets - Manon.icu" },
    { name: "description", content: "分享技术文章和见解" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || "1";
  const pageSize = url.searchParams.get("pageSize") || "10";
  const tag = url.searchParams.get("tag") || undefined;

  const contentPath = path.join(process.cwd(), "src/content");
  let posts = globFiles(contentPath).sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });

  // 根据标签过滤
  if (tag) {
    posts = posts.filter((post) => post.data.tags?.includes(tag));
  }

  // 使用 Set 来去重，提高性能
  const yearSet = new Set<string>();
  const tagSet = new Set<string>();

  posts.forEach((file: BlogData) => {
    const year = file.data.date.split("-")[0];
    yearSet.add(year);

    file.data.tags?.forEach((tag) => tagSet.add(tag));
  });

  // 计算分页
  const currentPage = parseInt(page);
  const pageSizeNum = parseInt(pageSize);
  const start = (currentPage - 1) * pageSizeNum;
  const end = start + pageSizeNum;
  const paginatedPosts = posts.slice(start, end);

  return json({
    data: paginatedPosts,
    tags: Array.from(tagSet),
    currentPage,
    pageSize: pageSizeNum,
    tag,
  });
}

export default function BlogIndex() {
  const { data, tags, currentPage, pageSize, tag } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();

  // 计算分页链接
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = data.length === pageSize ? currentPage + 1 : null;

  // 构建分页URL
  const createPageUrl = (page: number | null, selectedTag?: string) => {
    if (!page) return null;

    const params = new URLSearchParams();
    params.set("page", page.toString());
    if (selectedTag) params.set("tag", selectedTag);

    return `/blog?${params.toString()}`;
  };

  // 构建标签URL
  const createTagUrl = (selectedTag: string) => {
    const params = new URLSearchParams();
    params.set("page", "1");

    // 如果当前已选中该标签，则取消选择
    if (tag !== selectedTag) {
      params.set("tag", selectedTag);
    }

    return `/blog?${params.toString()}`;
  };

  return (
    <div className="relative flex mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8">
      <main className="flex-1">
        <h1 className="mb-12 text-2xl">Articles, guides, and cheat sheets</h1>

        {/* 文章列表 */}
        <ol className="relative grid gap-x-8">
          {data.map(({ data, slug }: { data: any; slug: string }) => (
            <article key={slug} className="group">
              <Link
                to={slug}
                className="-ml-4 flex overflow-hidden rounded-lg transition-colors hover:bg-gray-100"
              >
                <div className="flex flex-col gap-2 px-4 py-4">
                  <time className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    {data?.date}
                  </time>
                  <h2 className="text-xl font-bold text-gray-800 break-words">
                    {data.title}
                  </h2>
                </div>
              </Link>
            </article>
          ))}
        </ol>
        
        {/* 分页 */}
        <nav className="mt-12 flex items-center justify-between">
          {prevPage ? (
            <Link
              to={createPageUrl(prevPage, tag) || "#"}
              className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              上一页
            </Link>
          ) : (
            <span className="px-4 py-2 text-sm text-gray-400 bg-gray-100 rounded-lg cursor-not-allowed">
              上一页
            </span>
          )}

          <span className="text-sm text-gray-600">第 {currentPage} 页</span>

          {nextPage ? (
            <Link
              to={createPageUrl(nextPage, tag) || "#"}
              className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              下一页
            </Link>
          ) : (
            <span className="px-4 py-2 text-sm text-gray-400 bg-gray-100 rounded-lg cursor-not-allowed">
              下一页
            </span>
          )}
        </nav>
      </main>

      {/* 标签侧边栏 */}
      {/* <aside className="tag-list flex-none w-52">
        <h2 className="mt-12 mb-4 text-xl font-bold">Tags</h2>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tagName: string) => (
            <li key={tagName}>
              <Link
                to={createTagUrl(tagName)}
                className={`px-2 py-1 text-sm ${
                  tag === tagName
                    ? "bg-blue-200 text-blue-800"
                    : "bg-gray-100 text-gray-700"
                } rounded-full capitalize hover:bg-gray-200 transition-colors`}
              >
                {tagName}
              </Link>
            </li>
          ))}
        </ul>
      </aside> */}
    </div>
  );
}