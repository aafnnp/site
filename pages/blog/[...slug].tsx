import {MDXRemote} from 'next-mdx-remote'
import {serialize} from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import ErrorPage from 'next/error'
import NextLink from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import remarkGfm from 'remark-gfm'
import components from 'utils/components'
import {
  Container,
  Box,
  Heading,
  Text,
  Link,
  Image,
  Center
} from '@chakra-ui/react'
const codesandbox = require('remark-codesandbox')

const SEO = dynamic(() => import('components/SEO'))
const Ad = dynamic(() => import('components/ad'))
const PostPage = dynamic(() => import('components/PostPage'))
const Random = dynamic(() => import('components/RandomPost'))
const Share = dynamic(() => import('components/Share'))
const Comments = dynamic(() => import('components/Comments'))

const Post = ({
  title,
  description,
  date,
  tags,
  originalUrl,
  mdxSource,
  randomPost,
  cover
}) => {
  const router = useRouter()
  if (!router.isFallback && !mdxSource) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container
      mt={20}
      maxW={{
        sm: 'container.sm',
        md: 'container.md',
        lg: 'container.2xl',
        xl: 'container.xl'
      }}
      className="post"
    >
      <SEO
        title={title}
        description={description}
        cover={cover}
        openGraph={{title, description}}
      />
      <Box as="hgroup">
        <Text textAlign="center" color="gray.500" fontSize="xs" as="p">
          Published {date}
        </Text>
        <Heading textAlign="center" as="h1" mt={4} mb={2}>
          {title}
        </Heading>
        {originalUrl && (
          <Center color="gray.500" fontSize="sm" mb={8}>
            本文翻译自：
            <NextLink legacyBehavior href={originalUrl} passHref>
              <Link>{originalUrl}</Link>
            </NextLink>
          </Center>
        )}
      </Box>
      <Image
        boxSize="100%"
        src={
          cover ??
          'https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/NhSU3O.jpg'
        }
        alt={title}
      />

      {/* 头部广告 */}
      <Ad />
      {/* 头部广告结束 */}
      <PostPage>
        <MDXRemote {...mdxSource} components={components} />

        {/* 底部广告 */}
        <Ad />
        {/* 底部广告结束 */}
        <Share title={title} tag={tags} />

        <Random randomPost={randomPost} />

        <Comments />
      </PostPage>
    </Container>
  )
}

export const getStaticPaths = async () => {
  const {GetAllPosts} = await import('utils/getAllPosts')
  const allPosts = await GetAllPosts()
  const paths = allPosts.map((post) => ({
    params: {
      slug: post.slug.split('/')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const {GetAllPosts, GetPostBySlug} = await import('utils/getAllPosts')
  const {content, ...data} = await GetPostBySlug(params.slug)
  const {getRandomArrayElements} = await import('utils')
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[codesandbox, {mode: 'button'}], [remarkGfm]],
      rehypePlugins: []
    },
    scope: data
  })
  const AllPost = await GetAllPosts()
  const randomPost = getRandomArrayElements(
    AllPost,
    AllPost.length < 6 ? AllPost.length - 1 : 6
  )

  return {
    props: {
      ...data,
      mdxSource,
      randomPost
    }
  }
}

export default Post
