// 遍历 content 目录下的所有文件，获取文件内容
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { format } from "date-fns";

export default function globFiles(dir: string): any[] {
  let files = readdirSync(dir);
  return files
    .reduce((acc: any[], file: string) => {
      if (file.endsWith(".DS_Store")) {
        return acc;
      }
      let fullPath = join(dir, file);
      let stats = statSync(fullPath);
      if (stats.isDirectory()) {
        return acc.concat(globFiles(fullPath)); // 将递归调用的结果添加到累加器中
      } else {
        // @ts-ignore
        const { data, slug, ...rest } = matter(readFileSync(fullPath, "utf-8"));
        return acc.concat({
          data: {
            ...data,
            date: format(data?.date ?? new Date(), "yyyy-MM-dd"),
          },
          slug: fullPath
            .replace(process.cwd() + "/src/content", "/blog")
            .replace(".mdx", ""),
          ...rest,
        });
      }
    }, [])
    .filter((file) => !file.data.draft || !file.data.title)
    .sort((a, b) => {
      return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    });
}
