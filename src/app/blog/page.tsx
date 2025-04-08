import Link from "next/link";
import { notFound } from "next/navigation";

// 定义类型接口
interface BlogData {
  data: {
    date: string;
    title?: string;
    tags?: string[];
  };
  slug: string;
}

async function getData({
  pageSize = 10,
  pageNum = 1,
  tag,
}: {
  pageSize?: number;
  pageNum?: number;
  tag?: string;
} = {}) {
  const res = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : "https://manon.icu"
    }/api/posts`,
    {
      method: "POST",
      body: JSON.stringify({
        pageSize,
        pageNum,
        tag,
      }),
    }
  );
  const { data } = await res.json();

  if (!data) {
    return notFound();
  }

  // 使用 Set 来去重，提高性能
  const yearSet = new Set<string>();
  const tagSet = new Set<string>();

  data.forEach((file: BlogData) => {
    const year = file.data.date.split("-")[0];
    yearSet.add(year);

    file.data.tags?.forEach((tag) => tagSet.add(tag));
  });

  return {
    data,
    // years: Array.from(yearSet).sort(),
    tags: Array.from(tagSet),
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: {
    page?: string;
    pageSize?: string;
    tag?: string;
  };
}) {
  const { page = "1", pageSize = "10", tag } = searchParams;
  const { data, tags } = await getData({
    pageNum: parseInt(page),
    pageSize: parseInt(pageSize),
    tag,
  });

  // 计算分页链接
  const currentPage = parseInt(page);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = data.length === parseInt(pageSize) ? currentPage + 1 : null;

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

        {/* 年份筛选区 */}
        {/* <nav className="mb-12 columns-2 gap-x-2 text-sm text-gray-700 sm:columns-4">
          {years.map((year: string) => (
            <button
              key={year}
              className="mb-3 pr-4 font-bold cursor-pointer hover:text-gray-900 w-full text-left"
            >
              {year}
            </button>
          ))}
        </nav> */}

        {/* 文章列表 */}
        <ol className="relative grid gap-x-8">
          {data.map(({ data, slug }: { data: any; slug: string }) => (
            <article key={slug} className="group">
              <Link
                href={slug}
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
              href={createPageUrl(prevPage, tag) || "#"}
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
              href={createPageUrl(nextPage, tag) || "#"}
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
                href={createTagUrl(tagName)}
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
