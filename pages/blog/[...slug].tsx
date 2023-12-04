import dynamic from 'next/dynamic'
import Link from 'next/link'
import {allPosts, Post} from 'contentlayer/generated'
import {useMDXComponent} from 'next-contentlayer/hooks'
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage
} from 'next'

const SEO = dynamic(() => import('components/SEO'), {ssr: false})
const Ad = dynamic(() => import('components/ad'), {ssr: false})
const Share = dynamic(() => import('components/Share'), {ssr: false})

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post
}) => {
  const Component = useMDXComponent(post?.body?.code)
  return (
    <div className={'prose mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8'}>
      <SEO
        title={post?.title}
        description={post?.description}
        cover={post?.cover}
        openGraph={{title: post?.title, description: post?.description}}
      />
      <hgroup>
        <div className={'text-center text-slate-500 text-xs'}>
          Published {post?.date}
        </div>
        <h1 className={'text-center mt-4 mb-2'}>{post?.title}</h1>
        {post?.originalUrl && (
          <div className={'text-center text-slate-500 text-sm'}>
            本文翻译自：
            <Link href={post?.originalUrl}>{post?.originalUrl}</Link>
          </div>
        )}
        <Share title={post?.title} tag={post?.tags} handle={post?.handle} />
      </hgroup>

      {/* 头部广告 */}
      <Ad />
      {/* 头部广告结束 */}
      <Component />

      {/* 底部广告 */}
      <Ad />
      {/* 底部广告结束 */}
    </div>
  )
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({
  params
}: GetStaticPropsContext): Promise<GetStaticPropsResult<{post: Post}>> => {
  const post = allPosts.find((post) => {
    // @ts-ignore
    return post.slug === params?.slug?.join('/')
  })

  return typeof post === 'undefined'
    ? {
        notFound: true
      }
    : {
        props: {
          post
        }
      }
}

export default Page
