// 构建时生成内容索引的脚本
import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { format } from "date-fns";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function globFiles(dir) {
  // 读取目录下的所有文件
  const files = readdirSync(dir);

  // 递归处理所有文件
  const allPosts = files.reduce((acc, file) => {
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

    // 只处理 .mdx 文件
    if (!file.endsWith(".mdx")) {
      return acc;
    }

    // 处理单个文件
    const { data, content, ...rest } = matter(readFileSync(fullPath, "utf-8"));

    const post = {
      data: {
        ...data,
        date: format(data?.date ?? new Date(), "yyyy-MM-dd"),
      },
      content,
      slug: fullPath
        .replace(join(__dirname, "../src/content"), "/blog")
        .replace(".mdx", ""),
      ...rest,
    };

    return [...acc, post];
  }, []);

  // 过滤并排序文章
  return allPosts
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );
}

// 检查内容目录是否存在
const contentPath = join(__dirname, "../app/content");
const outputPath = join(__dirname, "../app/data/posts.json");
let posts = [];

try {
  const stats = statSync(contentPath);
  if (stats.isDirectory()) {
    posts = globFiles(contentPath);
    // 生成静态数据文件
    writeFileSync(outputPath, JSON.stringify(posts, null, 2));
    console.log(`Generated ${posts.length} posts to ${outputPath}`);
  } else {
    console.log(
      "Content path exists but is not a directory, keeping existing posts.json"
    );
  }
} catch (error) {
  // 内容目录不存在，检查是否有现有的posts.json
  try {
    statSync(outputPath);
    console.log("Content directory not found, keeping existing posts.json");
  } catch {
    console.log(
      "Content directory not found and no existing posts.json, creating empty posts array"
    );
    writeFileSync(outputPath, JSON.stringify([], null, 2));
  }
}
