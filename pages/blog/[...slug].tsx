import {MDXRemote} from 'next-mdx-remote'
import {serialize} from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import ErrorPage from 'next/error'
import Link from 'next/link'
import {useRouter} from 'next/router'
// import remarkGfm from 'remark-gfm'
import components from 'utils/components'

const SEO = dynamic(() => import('components/SEO'), {ssr: false})
const Ad = dynamic(() => import('components/ad'), {ssr: false})
const PostPage = dynamic(() => import('components/PostPage'), {ssr: false})
const Random = dynamic(() => import('components/RandomPost'), {ssr: false})
const Share = dynamic(() => import('components/Share'), {ssr: false})

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
    <div className={'prose mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8'}>
      <SEO
        title={title}
        description={description}
        cover={cover}
        openGraph={{title, description}}
      />
      <hgroup>
        <div className={'text-center text-slate-500 text-xs'}>
          Published {date}
        </div>
        <h1 className={'text-center mt-4 mb-2'}>{title}</h1>
        {originalUrl && (
          <div className={'text-center text-slate-500 text-sm'}>
            本文翻译自：
            <Link href={originalUrl}>{originalUrl}</Link>
          </div>
        )}
        <Share title={title} tag={tags} handle={handle} />
      </hgroup>

      {/* 头部广告 */}
      <Ad />
      {/* 头部广告结束 */}
      <PostPage>
        <MDXRemote {...mdxSource} components={components} />

        {/* 底部广告 */}
        <Ad />
        {/* 底部广告结束 */}

        <Random randomPost={randomPost} />
      </PostPage>
    </div>
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
      remarkPlugins: [],
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
