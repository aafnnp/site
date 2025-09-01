import { json } from "@remix-run/cloudflare";
import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import postsData from "~/data/posts.json";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    throw new Response("Method not allowed", { status: 405 });
  }

  const body = await request.json();
  const { pageSize = 10, pageNum = 1, tag } = body;

  let posts = postsData.sort((a, b) => {
    const dateA = a?.data?.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b?.data?.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });

  // 根据标签过滤
  if (tag) {
    posts = posts.filter((post) => post?.data?.tags?.includes(tag));
  }

  // 计算分页
  const total = posts.length;
  const start = (pageNum - 1) * pageSize;
  const end = start + pageSize;
  const paginatedPosts = posts.slice(start, end);

  return json(
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
