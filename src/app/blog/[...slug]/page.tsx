import globFiles from "@/utils/globFiles";
import { marked } from "marked";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";

const Ad = dynamic(() => import("@/components/ad"));
const Share = dynamic(() => import("@/components/Share"));

async function getData(slug: string[]) {
  const posts = globFiles(process.cwd() + "/src/content");
  return (
    posts.find((post) => {
      return post.slug.includes(
        slug.map((item) => decodeURIComponent(item)).join("/")
      );
    }) ?? {}
  );
}

export async function generateStaticParams() {
  const posts = globFiles(process.cwd() + "/src/content");
  return posts.map((post) => ({
    slug: post.slug
      .replace("/blog/", "")
      .split("/")
      .map((item: string) => encodeURIComponent(item)),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { data, content } = await getData((await params).slug);
  if (!data) {
    return notFound();
  }
  return (
    <div className={"prose mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8"}>
      <hgroup>
        <div className={"text-center text-slate-500 text-xs"}>
          Published {data?.date}
        </div>
        <h1 className={"text-center mt-4 mb-2"}>{data?.title}</h1>
        {data?.originalUrl && (
          <div className={"text-center text-slate-500 text-sm"}>
            本文翻译自：
            <Link href={data?.originalUrl}>{data?.originalUrl}</Link>
          </div>
        )}
        <Share title={data?.title} tag={data?.tags} handle={data?.handle} />
      </hgroup>

      {/* 头部广告 */}
      <Ad />
      {/* 头部广告结束 */}
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>

      {/* 底部广告 */}
      <Ad />
      {/* 底部广告结束 */}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const posts = globFiles(process.cwd() + "/src/content");
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
