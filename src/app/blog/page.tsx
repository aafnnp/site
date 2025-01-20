import globFiles from "@/utils/globFiles";
import Link from "next/link";

// 定义类型接口
interface BlogData {
  data: {
    date: string;
    title?: string;
    tags?: string[];
  };
  slug: string;
}

async function getData() {
  const data = globFiles(process.cwd() + "/src/content");

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
    years: Array.from(yearSet).sort(),
    tags: Array.from(tagSet),
  };
}

export default async function Page() {
  const { data, years, tags } = await getData();

  return (
    <div className="relative flex mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8">
      <main className="flex-1">
        <h1 className="mb-12 text-2xl">Articles, guides, and cheat sheets</h1>

        {/* 年份筛选区 */}
        <nav className="mb-12 columns-2 gap-x-2 text-sm text-gray-700 sm:columns-4">
          {years.map((year: string) => (
            <button
              key={year}
              className="mb-3 pr-4 font-bold cursor-pointer hover:text-gray-900 w-full text-left"
            >
              {year}
            </button>
          ))}
        </nav>

        {/* 文章列表 */}
        <ol className="relative grid gap-x-8">
          {data.map(({ data, slug }) => (
            <article key={slug} className="group">
              <Link
                href={slug}
                className="-ml-4 flex overflow-hidden rounded-lg transition-colors hover:bg-gray-100"
              >
                <div className="flex flex-col gap-2 px-4 py-4">
                  <time className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    {data?.date}
                  </time>
                  <h2
                    className="text-xl font-bold text-gray-800"
                    style={{ wordBreak: "break-word" }}
                  >
                    {data.title}
                  </h2>
                </div>
              </Link>
            </article>
          ))}
        </ol>
      </main>

      {/* 标签侧边栏 */}
      <aside className="tag-list flex-none w-52">
        <h2 className="mt-12 mb-4 text-xl font-bold">Tags</h2>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <li
              key={tag}
              className="px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded-full capitalize cursor-pointer hover:bg-gray-200 transition-colors"
            >
              {tag}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
