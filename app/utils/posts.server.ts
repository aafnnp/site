import postsMeta from "~/data/posts.meta.json";
import { getColumnBySlug, type ColumnConfig } from "./columns";

export interface PostData {
  type?: string;
  date?: string;
  title?: string;
  tags?: string[];
  originalUrl?: string;
  handle?: string;
  description?: string | null;
  cover?: string;
  [key: string]: unknown;
}

// Post data type
export interface PostItem {
  data: PostData;
  slug: string;
  excerpt?: string;
}

const postsData = postsMeta as unknown as PostItem[];

export { postsData };

/**
 * Get all posts sorted by date (newest first)
 */
export function getPostsSorted(): PostItem[] {
  return [...postsData].sort((a, b) => {
    const dateA = a?.data?.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b?.data?.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });
}

/**
 * Filter posts by tag
 */
export function filterPostsByTag(posts: PostItem[], tag?: string): PostItem[] {
  if (!tag) return posts;
  return posts.filter((post) => post?.data?.tags?.includes(tag));
}

/**
 * Paginate posts array
 */
export function paginatePosts(
  posts: PostItem[],
  page: number,
  size: number
): PostItem[] {
  const start = (page - 1) * size;
  return posts.slice(start, start + size);
}

/**
 * Get paginated posts with metadata
 */
export function getPaginatedPosts(options: {
  page?: number;
  pageSize?: number;
  tag?: string;
}) {
  const { page = 1, pageSize = 10, tag } = options;

  let posts = getPostsSorted();
  posts = filterPostsByTag(posts, tag);

  const total = posts.length;
  const paginatedPosts = paginatePosts(posts, page, pageSize);

  return {
    data: paginatedPosts,
    total,
    pageSize,
    pageNum: page,
    totalPages: Math.ceil(total / pageSize),
  };
}

/**
 * Extract unique tags from posts
 */
export function extractTags(posts: PostItem[]): string[] {
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post?.data?.tags?.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

/**
 * Extract unique years from posts
 */
export function extractYears(posts: PostItem[]): string[] {
  const yearSet = new Set<string>();
  posts.forEach((post) => {
    if (post?.data?.date) {
      const year = post.data.date.split("-")[0];
      yearSet.add(year);
    }
  });
  return Array.from(yearSet);
}

/**
 * 根据专栏名称筛选文章
 * 
 * @param posts - 文章列表
 * @param columnSlug - 专栏 slug（如 'harmony' 或 'swift'）
 * @returns 筛选后的文章列表
 */
export function filterPostsByColumn(
  posts: PostItem[],
  columnSlug?: string
): PostItem[] {
  if (!columnSlug) return posts;
  
  const column = getColumnBySlug(columnSlug);
  if (!column) return posts;
  
  return posts.filter((post) => 
    post?.slug?.startsWith(column.slugPattern)
  );
}

/**
 * 获取指定专栏的所有文章
 * 
 * @param columnSlug - 专栏 slug
 * @returns 专栏文章列表（按日期倒序）
 */
export function getColumnPosts(columnSlug: string): PostItem[] {
  const allPosts = getPostsSorted();
  return filterPostsByColumn(allPosts, columnSlug);
}

/**
 * 专栏统计信息接口
 */
export interface ColumnStats {
  /** 文章总数 */
  total: number;
  /** 最新文章日期 */
  latestDate?: string;
  /** 最早文章日期 */
  earliestDate?: string;
  /** 标签列表 */
  tags: string[];
}

/**
 * 获取专栏统计信息
 * 
 * @param columnSlug - 专栏 slug
 * @returns 专栏统计信息
 */
export function getColumnStats(columnSlug: string): ColumnStats {
  const posts = getColumnPosts(columnSlug);
  
  if (posts.length === 0) {
    return {
      total: 0,
      tags: [],
    };
  }
  
  // 获取所有日期并排序
  const dates = posts
    .map((post) => post?.data?.date)
    .filter((date): date is string => !!date)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  
  // 获取所有标签
  const tags = extractTags(posts);
  
  return {
    total: posts.length,
    latestDate: dates[0],
    earliestDate: dates[dates.length - 1],
    tags,
  };
}
