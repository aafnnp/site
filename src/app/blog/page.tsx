import globFiles from "@/utils/globFiles";
import Link from "next/link";

async function getData() {
  const data = globFiles(process.cwd() + "/src/content");
  // 抽离年份并返回数组
  const years = data
    .reduce((acc, file) => {
      let year = file.data.date.split("-")[0];
      if (!acc.includes(year)) {
        acc.push(year);
      }
      return acc;
    }, [])
    .sort();
  // 抽离 tag 并返回数组
  const tags = data.reduce((acc, file) => {
    file.data.tags.forEach((tag: string) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  return { data, years, tags };
}

export default async function Page() {
  const { data, years, tags } = await getData();

  return (
    <div
      className={
        "relative flex mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8"
      }
    >
      <div className="flex-1">
        <h1 className="mb-12 text-2xl">Articles, guides, and cheat sheets</h1>
        <ul className="mb-12 columns-2 gap-x-2 text-sm text-gray-700 sm:columns-4">
          {years.map((year: string) => {
            return (
              <li
                key={year}
                className="mb-3 pr-4 font-bold cursor-pointer hover:text-gray-900"
              >
                {year}
              </li>
            );
          })}
        </ul>
        <ol className="relative grid gap-x-8">
          {data.map(({ data, slug }) => {
            return (
              <article key={slug}>
                <Link
                  href={slug}
                  className="group -ml-4 flex overflow-hidden rounded-lg hover:bg-gray-100"
                >
                  <div className="flex flex-col gap-2 px-4 py-4">
                    <div className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      {data?.date}
                    </div>
                    <h2
                      className="text-xl font-bold text-gray-800"
                      style={{ wordBreak: "break-word" }}
                    >
                      {data.title}
                    </h2>
                  </div>
                </Link>
              </article>
            );
          })}
        </ol>
      </div>
      <div className="tag-list flex-none w-52">
        <h2 className="mt-12 mb-4 text-xl font-bold">Tags</h2>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <li
              key={tag}
              className="px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded-full capitalize"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
