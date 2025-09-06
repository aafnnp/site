import { MetaFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, Link, useRouteError, isRouteErrorResponse } from "@remix-run/react";
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
async function getData(slug: string): Promise<PostData | null> {
  const contentPath = path.join(process.cwd(), "app/content");
  const posts = globFiles(contentPath);
  const decodedSlug = decodeURIComponent(slug);
  
  // 构建完整的slug路径进行精确匹配
  const fullSlugPath = `/blog/${decodedSlug}`;
  
  // 使用精确匹配而不是includes
  const foundPost = posts.find((post) => post.slug === fullSlugPath);
  
  return foundPost || null;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const splat = params['*'];
  
  if (!splat) {
    throw new Response("Not Found", { status: 404 });
  }
  
  const post = await getData(splat);
  
  if (!post || !post.data) {
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

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className="mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">文章未找到</h2>
            <p className="text-gray-500 mb-8">
              抱歉，您访问的文章不存在或已被删除。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              返回首页
            </Link>
            <Link
              to="/blog"
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              浏览所有文章
            </Link>
          </div>
          
          <div className="mt-12 text-sm text-gray-400">
            <p>如果您认为这是一个错误，请联系我们。</p>
          </div>
        </div>
      </div>
    );
  }

  // 处理其他类型的错误
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">出错了</h1>
          <p className="text-gray-600 mb-8">
            加载文章时发生了错误，请稍后重试。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            返回首页
          </Link>
          <Link
            to="/blog"
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            浏览所有文章
          </Link>
        </div>
      </div>
    </div>
  );
}