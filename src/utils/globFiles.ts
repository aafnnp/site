// Edge Runtime兼容的文件处理工具
import matter from "gray-matter";
import { format } from "date-fns";

interface BlogPost {
  data: {
    date: string;
    tags?: string[];
    draft?: boolean;
    title?: string;
    [key: string]: any;
  };
  slug: string;
  [key: string]: any;
}

// Edge Runtime兼容的文件处理函数
// 由于Edge Runtime不支持文件系统操作，这个函数需要预处理的文件列表
export default function globFiles(preProcessedFiles: { path: string; content: string }[]): BlogPost[] {
  const allPosts = preProcessedFiles.map(({ path, content }) => {
    // 处理单个文件
    const { data, content: fileContent, ...rest } = matter(content);

    const post: BlogPost = {
      data: {
        ...data,
        date: format(data?.date ?? new Date(), "yyyy-MM-dd"),
      },
      content: fileContent,
      slug: path
        .replace("/src/content", "/blog")
        .replace(".mdx", ""),
      ...rest,
    };

    return post;
  });

  // 过滤并排序文章
  return allPosts
    .filter((post) => !post.data.draft || !post.data.title)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );
}
