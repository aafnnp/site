import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData,
  Link,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { marked } from "marked";
import postsData from "../data/posts.json";
import {
  generatePostSeoMeta,
  generatePostJsonLd,
  generate404Meta,
} from "../utils/seo";

// Post data interface
interface PostData {
  data: {
    type?: string;
    date?: string;
    title?: string;
    tags?: string[];
    originalUrl?: string;
    handle?: string;
    description?: string | null;
    cover?: string;
  };
  content?: string;
  slug?: string;
  isEmpty?: boolean;
  excerpt?: string;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.post?.data) {
    return generate404Meta();
  }
  return generatePostSeoMeta(data.post);
};

// Get post data by slug (splat route)
function getPostBySlug(slug: string): PostData | null {
  const decodedSlug = decodeURIComponent(slug);
  const fullSlugPath = `/blog/${decodedSlug}`;
  return postsData.find((post) => post.slug === fullSlugPath) || null;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const splat = params["*"];

  if (!splat) {
    throw new Response("Not Found", { status: 404 });
  }

  const post = getPostBySlug(splat);

  if (!post || !post.data) {
    throw new Response("Not Found", { status: 404 });
  }

  const articleContent = marked.parse(post.content || "");
  const jsonLd = generatePostJsonLd(post);

  return json({ post, articleContent, jsonLd });
}

export default function BlogPost() {
  const { post, articleContent, jsonLd } = useLoaderData<typeof loader>();

  return (
    <article className="prose mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header>
        <div className="text-center text-slate-500 text-xs">
          Published {post.data?.date}
        </div>
        <h1 className="text-center mt-4 mb-2">{post.data?.title}</h1>
        {post.data?.originalUrl && (
          <div className="text-center text-slate-500 text-sm">
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
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              文章未找到
            </h2>
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
