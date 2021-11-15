import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import { getAllPosts, GetPostBySlug, GetRandomPost } from 'api/getAllPosts';
import Layout from 'components/Layout';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React from 'react';
import components from 'utils/components';

const PostPage = dynamic(() => import('components/PostPage'));

const Random = dynamic(() => import('components/RandomPost'));

function Post({ data, content, randomPost }) {
  const router = useRouter();

  if (!router.isFallback && !content) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout title={data.title} description={data.description}>
      <Heading as="h1">{data.title}</Heading>
      <HStack color="gray.500" fontSize="12px">
        <Text>{data.date}</Text>
        <Text>Published {data.fromNow}</Text>
      </HStack>

      <Box fontSize="sm">
        <PostPage>
          <MDXRemote {...content} components={components} />
        </PostPage>
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
