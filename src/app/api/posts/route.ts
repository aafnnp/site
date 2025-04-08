import path from "path";
import globFiles from "@/utils/globFiles";

export async function POST(request: Request) {
  const body = await request.json();
  const { pageSize = 10, pageNum = 1, tag } = body;

  const contentPath = path.join(process.cwd(), "src/content");
  let posts = globFiles(contentPath);

  // 根据标签过滤
  if (tag) {
    posts = posts.filter((post) => post.data.tags?.includes(tag));
  }

  // 计算分页
  const total = posts.length;
  const start = (pageNum - 1) * pageSize;
  const end = start + pageSize;
  const paginatedPosts = posts.slice(start, end);

  return Response.json(
    {
      data: paginatedPosts,
      total,
      pageSize,
      pageNum,
      totalPages: Math.ceil(total / pageSize),
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
