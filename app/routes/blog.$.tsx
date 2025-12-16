import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
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

// Re-export shared ErrorBoundary component
export { BlogErrorBoundary as ErrorBoundary } from "~/components/BlogErrorBoundary";
