import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import path from "path";
import globFiles from "~/utils/globFiles";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    throw new Response("Method not allowed", { status: 405 });
  }

  const body = await request.json();
  const { pageSize = 10, pageNum = 1, tag } = body;

  const contentPath = path.join(process.cwd(), "app/content");
  let posts = globFiles(contentPath).sort((a, b) => {
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