import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { getPaginatedPosts } from "~/utils/posts";

interface PostsRequestBody {
  pageSize?: number;
  pageNum?: number;
  tag?: string;
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    throw new Response("Method not allowed", { status: 405 });
  }

  const body = (await request.json()) as PostsRequestBody;
  const { pageSize = 10, pageNum = 1, tag } = body;

  // Use shared utility function
  const result = getPaginatedPosts({
    page: pageNum,
    pageSize,
    tag,
  });

  return json(result, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
