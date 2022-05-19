import {MDXRemote} from 'next-mdx-remote'
import {serialize} from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import ErrorPage from 'next/error'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import remarkGfm from 'remark-gfm'
import styles from 'styles/blog.module.scss'
import components from 'utils/components'
const codesandbox = require('remark-codesandbox')

const Ad = dynamic(() => import('components/ad'))
const Pexels = dynamic(() => import('components/Pexels'))
const PostPage = dynamic(() => import('components/PostPage'))
const Layout = dynamic(() => import('components/Layout'))
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
  randomPost
}) => {
  const router = useRouter()
  if (!router.isFallback && !mdxSource) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout title={title} description={description}>
      <hgroup className={styles.hgroup}>
        <p className={styles.p}>Published {date}</p>
        <h1 className={styles.h1}>{title}</h1>
      </hgroup>

      {/* 头部广告 */}
      <Ad />
      {/* 头部广告结束 */}
      <Pexels tag={tags[0]} />
      <PostPage>
        <MDXRemote {...mdxSource} components={components} />
        {originalUrl && (
          <div className={styles.originalUrl}>
            本文翻译自：
            <Link href={originalUrl}>
              <a>{originalUrl}</a>
            </Link>
          </div>
        )}
        {/* 底部广告 */}
        <Ad />
        {/* 底部广告结束 */}
        <Share title={title} tag={tags} />

        <Random randomPost={randomPost} />

        <Comments />
      </PostPage>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const {GetAllPosts} = await import('api/getAllPosts')
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
  const {GetAllPosts, GetPostBySlug} = await import('api/getAllPosts')
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
