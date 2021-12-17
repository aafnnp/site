import { Alert, Box, Heading, Link, Text } from '@chakra-ui/react';
import { getAllPosts, GetPostBySlug, GetRandomPost } from 'api/getAllPosts';
import Ad from 'components/ad';
import Layout from 'components/Layout';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React from 'react';
import components from 'utils/components';
import { v4 as uuidv4 } from 'uuid';

const UnsplashImage = dynamic(() => import('components/Unsplash'));
const PostPage = dynamic(() => import('components/PostPage'));

const Random = dynamic(() => import('components/RandomPost'));

function Post({ data, content, randomPost }) {
  const router = useRouter();

  if (!router.isFallback && !content) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout title={data.title} description={data.description}>
      <Box textAlign="center">
        <Text color="gray.500" fontSize="12px">
          Published {data.date}
        </Text>
        <Heading as="h1" mt={4} mb={8}>
          {data.title}
        </Heading>
      </Box>

      <Box mb={8}>
        <UnsplashImage {...data} />
      </Box>
      <Box fontSize="sm">
        <PostPage>
          <MDXRemote {...content} components={components} />
          {data.originUrl && (
            <Alert
              status="info"
              display="grid"
              gridTemplateColumns="100px auto"
              alignItems="start"
            >
              本文翻译自：<Link href={data.originUrl}>{data.originUrl}</Link>
            </Alert>
          )}
        </PostPage>
        <Box>
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
        </Box>
        <Random data={randomPost} />
      </Box>
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
