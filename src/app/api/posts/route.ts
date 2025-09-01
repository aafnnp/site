import globFiles from "@/utils/globFiles";
import { getBlogFiles } from "@/data/content-loader";

export const runtime = 'edge';

export async function POST(request: Request) {
  const body = await request.json();
  const { pageSize = 10, pageNum = 1, tag } = body;

  // 使用预处理的文件数据
  const preProcessedFiles = getBlogFiles();
  let posts = globFiles(preProcessedFiles).sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });

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
