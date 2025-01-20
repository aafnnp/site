import globFiles from "@/utils/globFiles";
import { marked } from "marked";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";

// 动态导入组件
const Ad = dynamic(() => import("@/components/ad"));
const Share = dynamic(() => import("@/components/Share"));

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

// 获取文章数据
async function getData(slug: string[]): Promise<PostData> {
  const contentPath = path.join(process.cwd(), "src/content");
  const posts = globFiles(contentPath);
  const decodedSlug = slug.map(decodeURIComponent).join("/");

  return posts.find((post) => post.slug.includes(decodedSlug)) ?? {};
}

// 生成静态路径参数
export async function generateStaticParams() {
  const contentPath = path.join(process.cwd(), "src/content");
  const posts = globFiles(contentPath);

  return posts.map((post) => ({
    slug: post.slug.replace("/blog/", "").split("/").map(encodeURIComponent),
  }));
}

// 博客文章页面组件
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { data, content } = await getData((await params).slug);

  if (!data) {
    return notFound();
  }

  const articleContent = marked.parse(content || "");

  return (
    <article
      className={"prose mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8"}
    >
      <header>
        <div className={"text-center text-slate-500 text-xs"}>
          Published {data.date}
        </div>
        <h1 className={"text-center mt-4 mb-2"}>{data.title}</h1>
        {data.originalUrl && (
          <div className={"text-center text-slate-500 text-sm"}>
            本文翻译自：
            <Link href={data.originalUrl}>{data.originalUrl}</Link>
          </div>
        )}
        <Share title={data.title} tag={data.tags} handle={data.handle} />
      </header>

      {/* 头部广告 */}
      <Ad />
      {/* 头部广告结束 */}

      <div dangerouslySetInnerHTML={{ __html: articleContent }}></div>

      {/* 底部广告 */}
      <Ad />
      {/* 底部广告结束 */}
    </article>
  );
}

// 生成页面元数据
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const contentPath = path.join(process.cwd(), "src/content");
  const posts = globFiles(contentPath);
  const { slug } = await params;
  const post = posts.find((post) => post.slug.includes(slug.join("/")));

  return {
    title: post?.data.title,
    description: post?.data.description,
    keywords: post?.data.tags,
    creator: "pfan",
    publisher: "pfan",
    openGraph: {
      images: post?.data?.cover,
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
