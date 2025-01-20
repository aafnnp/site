// 遍历 content 目录下的所有文件，获取文件内容
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { format } from "date-fns";

interface BlogPost {
  data: {
    date: string;
    draft?: boolean;
    title?: string;
    [key: string]: any;
  };
  slug: string;
  [key: string]: any;
}

export default function globFiles(dir: string): BlogPost[] {
  // 读取目录下的所有文件
  const files = readdirSync(dir);

  // 递归处理所有文件
  const allPosts = files.reduce<BlogPost[]>((acc, file) => {
    // 忽略 .DS_Store 文件
    if (file.endsWith(".DS_Store")) {
      return acc;
    }

    const fullPath = join(dir, file);
    const stats = statSync(fullPath);

    // 如果是目录，递归处理
    if (stats.isDirectory()) {
      return [...acc, ...globFiles(fullPath)];
    }

    // 处理单个文件
    const { data, content, ...rest } = matter(readFileSync(fullPath, "utf-8"));

    const post: BlogPost = {
      data: {
        ...data,
        date: format(data?.date ?? new Date(), "yyyy-MM-dd"),
      },
      content,
      slug: fullPath
        .replace(process.cwd() + "/src/content", "/blog")
        .replace(".mdx", ""),
      ...rest,
    };

    return [...acc, post];
  }, []);

  // 过滤并排序文章
  return allPosts
    .filter((post) => !post.data.draft || !post.data.title)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );
}
