import { getAllPosts, GetPostBySlug } from 'api/getAllPosts';
import Ad from 'components/ad';
import { Layout } from 'components/Layout';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import ErrorPage from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import components from 'utils/components';
import { getRandomArrayElements } from '../../utils';

const codesandbox = require('remark-codesandbox');

const PostPage = dynamic(() => import('components/PostPage'));

const Random = dynamic(() => import('components/RandomPost'));

function Post({ data, mdxSource, randomPost }) {
  const router = useRouter();
  if (!router.isFallback && !mdxSource) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout title={data.title} description={data.description}>
      <hgroup className="text-center">
        <p className="text-gray-500 text-xs">
          Published
          {data.date}
        </p>
        <h1 className="mt-4 mb-8 text-4xl font-bold">{data.title}</h1>
      </hgroup>

      {/* 头部广告 */}
      <Ad />
      {/* 头部广告结束 */}
      <PostPage>
        <MDXRemote {...mdxSource} components={components} />
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
      <Ad />
      {/* 底部广告结束 */}
      <Random randomPost={randomPost} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
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
};

export const getStaticProps = async ({ params }) => {
  const { content, data } = await GetPostBySlug(params.slug);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [[codesandbox, { mode: 'button' }]],
      rehypePlugins: [],
    },
    scope: data,
  });
  const AllPost = (await getAllPosts()).flat(2);
  const randomPost = getRandomArrayElements(
    AllPost,
    AllPost.length < 6 ? AllPost.length - 1 : 6,
  );

  return {
    props: {
      data,
      mdxSource,
      randomPost,
    },
  };
};

export default Post;
