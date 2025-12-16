import type { LoaderFunction } from "@remix-run/node";
import postsData from "../data/posts.json";
import { SITE_URL, SITE_NAME, DEFAULT_AUTHOR } from "../utils/seo";

export const loader: LoaderFunction = async () => {
  // Get the latest 50 posts
  const posts = postsData.filter((post) => post.data?.title).slice(0, 50);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>技术文章、开发指南和见解分享</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>${DEFAULT_AUTHOR}@manon.icu (${DEFAULT_AUTHOR})</managingEditor>
    <webMaster>${DEFAULT_AUTHOR}@manon.icu (${DEFAULT_AUTHOR})</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} ${SITE_NAME}</copyright>
    <generator>Remix</generator>
    <image>
      <url>${SITE_URL}/og-default.png</url>
      <title>${SITE_NAME}</title>
      <link>${SITE_URL}</link>
    </image>
${posts
  .map(
    (post) => `    <item>
      <title><![CDATA[${post.data?.title || "Untitled"}]]></title>
      <link>${SITE_URL}${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}${post.slug}</guid>
      <pubDate>${new Date(
        post.data?.date || Date.now()
      ).toUTCString()}</pubDate>
      <dc:creator><![CDATA[${DEFAULT_AUTHOR}]]></dc:creator>
      <description><![CDATA[${
        post.data?.description || post.data?.title || ""
      }]]></description>
      ${
        post.data?.tags
          ?.map((tag: string) => `<category>${tag}</category>`)
          .join("\n      ") || ""
      }
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
};
