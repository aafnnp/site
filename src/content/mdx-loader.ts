import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { parseFrontmatter } from "./frontmatter-schema";

export interface LoadedPost {
  slug: string;
  title: string;
  date: string;
}

/**
 * 从 content/posts 读取 md/mdx 文件并提取基础元信息。
 */
export function loadPosts(contentDir: string): LoadedPost[] {
  const postsDir = join(contentDir, "posts");
  if (!existsSync(postsDir)) {
    return [];
  }
  const files = readdirSync(postsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.(md|mdx)$/i.test(entry.name))
    .map((entry) => entry.name);

  return files.map((fileName) => {
    const source = readFileSync(join(postsDir, fileName), "utf-8");
    const parsed = matter(source);
    const frontmatter = parseFrontmatter(parsed.data as Record<string, unknown>);
    const slug = fileName.replace(/\.(md|mdx)$/i, "");

    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
    };
  });
}
