import { getAllPosts, GetPostBySlug, GetRandomPost } from 'api';
import Ad from 'components/ad';
import Layout from 'components/Layout';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import ErrorPage from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import components from 'utils/components';
import { v4 as uuidv4 } from 'uuid';

const PostPage = dynamic(() => import('components/PostPage'));

const Random = dynamic(() => import('components/RandomPost'));

function Post({ data, content, randomPost }) {
  const router = useRouter();
  if (!router.isFallback && !content) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout title={data.title} description={data.description}>
      <hgroup className="text-center">
        <p className="text-gray-500 text-xs">Published {data.date}</p>
        <h1 className="mt-4 mb-8 text-4xl font-bold">{data.title}</h1>
      </hgroup>

      {/* 头部广告 */}
      <Ad key={uuidv4()}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3854566314387093"
          data-ad-slot="9901453595"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </Ad>
      {/* 头部广告结束 */}
      <PostPage>
        <MDXRemote {...content} components={components} />
        {data.originalUrl && (
          <div className="text-gray-500">
            本文翻译自：
            <Link href={data.originalUrl}>
              <a>{data.originalUrl}</a>
            </Link>
          </div>
        )}
      </PostPage>
      {/* 底部广告 */}
      <Ad key={uuidv4()}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3854566314387093"
          data-ad-slot="9901453595"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </Ad>
      {/* 底部广告结束 */}
      <Random data={randomPost} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts();
  const paths = allPosts.flat(2).map((post) => ({
    params: {
      slug: post.slug.split('/'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const source = await GetPostBySlug(params.slug);
  const randomPost = await GetRandomPost();
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      data,
      content: mdxSource,
      randomPost,
    },
  };
}

export default Post;
