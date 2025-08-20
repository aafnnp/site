import { MetaFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { marked } from "marked";
import path from "path";
import globFiles from "~/utils/globFiles";

// 定义文章数据接口
interface PostData {
  data?: {
    title?: string;
    date?: string;
    originalUrl?: string;
    tags?: string[];
    handle?: string;
    description?: string;
    cover?: string;
  };
  content?: string;
  slug?: string;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.post?.data) {
    return [
      { title: "Post Not Found" },
      { name: "description", content: "The requested post could not be found." },
    ];
  }

  return [
    { title: `${data.post.data.title} - Manon.icu` },
    { name: "description", content: data.post.data.description || data.post.data.title },
    { name: "keywords", content: data.post.data.tags?.join(", ") || "" },
    { name: "author", content: "pfan" },
    { property: "og:title", content: data.post.data.title },
    { property: "og:description", content: data.post.data.description || data.post.data.title },
    { property: "og:image", content: data.post.data.cover || "" },
  ];
};

// 获取文章数据
async function getData(slug: string): Promise<PostData> {
  const contentPath = path.join(process.cwd(), "src/content");
  const posts = globFiles(contentPath);
  const decodedSlug = decodeURIComponent(slug);

  return posts.find((post) => post.slug.includes(decodedSlug)) ?? {};
}

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  
  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }

  const post = await getData(slug);

  if (!post.data) {
    throw new Response("Not Found", { status: 404 });
  }

  const articleContent = marked.parse(post.content || "");

  return json({ post, articleContent });
}

export default function BlogPost() {
  const { post, articleContent } = useLoaderData<typeof loader>();

  return (
    <article className={"prose mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8"}>
      <header>
        <div className={"text-center text-slate-500 text-xs"}>
          Published {post.data?.date}
        </div>
        <h1 className={"text-center mt-4 mb-2"}>{post.data?.title}</h1>
        {post.data?.originalUrl && (
          <div className={"text-center text-slate-500 text-sm"}>
            本文翻译自：
            <Link to={post.data.originalUrl}>{post.data.originalUrl}</Link>
          </div>
        )}
      </header>
      
      <div 
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: articleContent }}
      />
    </article>
  );
}