import postsData from "~/data/posts.json";

// Post data type
export type PostItem = (typeof postsData)[number];

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
