import matter from 'gray-matter';
import { CodePen, CodeSandbox, Gist } from 'mdx-embed';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { GetPostBySlug, GetRandomPost, posts } from '../../getallPosts';

const PostPage = dynamic(() => import('../../components/PostPage'));
const Comments = dynamic(() => import('../../components/Comments'));
const Random = dynamic(() => import('../../components/RandomPost'));
const Header = dynamic(() => import('../../components/Header'));

const components = {
  CodePen,
  Gist,
  CodeSandbox,
};

function Post({ data, content, randomPost }) {
  const router = useRouter();

  if (!router.isFallback && !content) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <meta property="og:title" content={data.title} />
        <title>Manon.icu | Blog | {data.title}</title>
      </Head>
      <main className="p-4">
        <div className="content mx-auto">
          <Header />
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
              <span className="mr-2">Manon.icu</span>/{data.date}（
              {data.fromNow}）
            </div>
          </div>

          <div className="markdown-body text-sm">
            <PostPage>
              <MDXRemote {...content} components={components} />
            </PostPage>

            <Random data={randomPost} />

            <Comments />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const allPosts = posts();
  const paths = allPosts.flat(Infinity).map((post) => ({
    params: {
      slug: post.link.substr(1).split('/'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const source = await GetPostBySlug(params.slug);
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
      randomPost: GetRandomPost(),
    },
  };
}

export default Post;
