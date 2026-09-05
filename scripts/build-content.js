// 构建时生成内容索引的脚本
import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { format } from "date-fns";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 统一内容根目录，确保 slug 计算对齐到 /app/content
const CONTENT_ROOT = join(__dirname, "../app/content");

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
      // 计算 slug：将绝对路径前缀 /app/content 替换为 /blog，并去掉 .mdx 扩展名
      slug: fullPath
        .replace(CONTENT_ROOT, "/blog")
        .replace(/\.mdx$/i, ""),
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
const contentPath = CONTENT_ROOT;
const metaOutputPath = join(__dirname, "../app/data/posts.meta.json");
const contentOutputPath = join(__dirname, "../app/data/posts.content.json");
let posts = [];

try {
  const stats = statSync(contentPath);
  if (stats.isDirectory()) {
    posts = globFiles(contentPath);

    // 元数据（不含正文），供列表页、RSS、站点地图等使用
    const meta = posts.map((post) => ({
      data: post.data,
      slug: post.slug,
      excerpt: post.excerpt,
    }));

    // 正文映射：slug -> content，供文章详情页与搜索按需读取
    const contentMap = {};
    for (const post of posts) {
      contentMap[post.slug] = post.content;
    }

    writeFileSync(metaOutputPath, JSON.stringify(meta, null, 2));
    writeFileSync(contentOutputPath, JSON.stringify(contentMap, null, 2));
    console.log(
      `Generated ${posts.length} posts -> ${metaOutputPath} & ${contentOutputPath}`
    );
  } else {
    console.log(
      "Content path exists but is not a directory, keeping existing data files"
    );
  }
} catch (error) {
  // 内容目录不存在，检查是否有现有的元数据文件
  try {
    statSync(metaOutputPath);
    console.log("Content directory not found, keeping existing data files");
  } catch {
    console.log(
      "Content directory not found and no existing data, creating empty data files"
    );
    writeFileSync(metaOutputPath, JSON.stringify([], null, 2));
    writeFileSync(contentOutputPath, JSON.stringify({}, null, 2));
  }
}
