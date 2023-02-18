import {MDXRemote} from 'next-mdx-remote'
import {serialize} from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import ErrorPage from 'next/error'
import NextLink from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import remarkGfm from 'remark-gfm'
import components from 'utils/components'
import {Box, Center, Heading, Link, Text} from '@chakra-ui/react'

const codesandbox = require('remark-codesandbox')
const SEO = dynamic(() => import('components/SEO'), {ssr: false})
const Ad = dynamic(() => import('components/ad'), {ssr: false})
const PostPage = dynamic(() => import('components/PostPage'), {ssr: false})
const Random = dynamic(() => import('components/RandomPost'), {ssr: false})
const Share = dynamic(() => import('components/Share'), {ssr: false})
const Comments = dynamic(() => import('components/Comments'), {ssr: false})

const Post = ({
  title,
  description,
  date,
  tags,
  originalUrl,
  mdxSource,
  randomPost,
  cover,
  handle
}) => {
  const router = useRouter()
  if (!router.isFallback && !mdxSource) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Box
      px={6}
      pt={20}
      h={'100vh'}
      overflowY={'scroll'}
      scrollBehavior={'smooth'}
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
          <Center color="gray.500" fontSize="sm">
            本文翻译自：
            <NextLink legacyBehavior href={originalUrl} passHref>
              <Link>{originalUrl}</Link>
            </NextLink>
          </Center>
        )}
        <Share title={title} tag={tags} handle={handle} />
      </Box>
      {/* <Center> */}
      {/*   <Image */}
      {/*     fit={'cover'} */}
      {/*     loading={'lazy'} */}
      {/*     src={ */}
      {/*       cover ?? */}
      {/*       'https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/NhSU3O.jpg' */}
      {/*     } */}
      {/*     alt={title} */}
      {/*   /> */}
      {/* </Center> */}

      {/* 头部广告 */}
      <Ad />
      {/* 头部广告结束 */}
      <PostPage>
        <MDXRemote {...mdxSource} components={components} />

        {/* 底部广告 */}
        <Ad />
        {/* 底部广告结束 */}

        <Random randomPost={randomPost} />

        <Comments />
      </PostPage>
    </Box>
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
