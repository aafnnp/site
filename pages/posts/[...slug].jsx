import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ErrorPage from 'next/error'
import Head from 'next/head'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { CodePen, CodeSandbox, Gist } from 'mdx-embed'
import { GetPostBySlug, GetRandomPost, posts } from '../../getAllPosts'

const PostPage = dynamic(() => import('../../components/PostPage'))
const Comments = dynamic(() => import('../../components/Comments'))
const Random = dynamic(() => import('../../components/RandomPost'))

const components = {
  CodePen,
  Gist,
  CodeSandbox
}

function Post ({ data, content, randomPost }) {
  const router = useRouter()

  if (!router.isFallback && !content) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

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
          <span className="mr-2">Manon.icu</span>/{data.date}（{data.fromNow}）
        </div>
      </div>

      <div className="markdown-body text-sm">
        <PostPage>
          <MDXRemote {...content} components={components} />
        </PostPage>

        <Random data={randomPost} />

        <Comments />
      </div>
    </>
  )
}

export async function getStaticPaths () {
  const allposts = posts()
  const paths = allposts.flat(Infinity).map((post) => ({
    params: {
      slug: post.link.substr(1).split('/')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const source = await GetPostBySlug(params.slug)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    scope: data
  })
  console.log(
    '🚀 ~ file: [...slug].js ~ line 87 ~ getStaticProps ~ mdxSource',
    content
  )

  return {
    props: {
      data,
      content: mdxSource,
      randomPost: GetRandomPost()
    }
  }
}

export default Post
