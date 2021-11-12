import { getAllPosts, GetPostBySlug, GetRandomPost } from 'api/getAllPosts';
import CanIUse from 'components/CanIuse.jsx';
import Layout from 'components/Layout';
import matter from 'gray-matter';
import { CodePen, CodeSandbox, Gist } from 'mdx-embed';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import ErrorPage from 'next/error';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
const PostPage = dynamic(() => import('components/PostPage'));
const Comments = dynamic(() => import('components/Comments'));
const Random = dynamic(() => import('components/RandomPost'));

const components = {
  CodePen,
  Gist,
  CodeSandbox,
  CanIUse,
};

function Post({ data, content, randomPost }) {
  const router = useRouter();

  if (!router.isFallback && !content) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout title={data.title} description={data.description}>
      <h1 className="font-bold text-2xl pb-2">{data.title}</h1>

      <div className="post-info mb-10 text-sm flex justify-between">
        <div className="flex items-center">
          <Image
            alt="manonicu"
            className="rounded-full mr-2"
            height="18"
            src="/github.svg"
            width="18"
          />
          <span className="mx-2">Manon.icu</span>
          {data.date}（{data.fromNow}）
        </div>
      </div>

      <div className="markdown-body text-sm">
        <PostPage>
          <MDXRemote {...content} components={components} />
        </PostPage>

        <Random data={randomPost} />

        <Comments />
      </div>
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
