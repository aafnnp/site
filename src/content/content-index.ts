import { join } from "node:path";
import { loadPosts, type LoadedPost } from "./mdx-loader";

export interface ContentIndex {
  posts: LoadedPost[];
}

export interface BuildContentIndexOptions {
  contentDir?: string;
}

/**
 * 构建内容索引，当前仅包含 posts，按日期降序输出。
 */
export async function buildContentIndex(
  options: BuildContentIndexOptions = {},
): Promise<ContentIndex> {
  const contentDir = options.contentDir ?? join(process.cwd(), "content");
  const posts = loadPosts(contentDir).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return { posts };
}
