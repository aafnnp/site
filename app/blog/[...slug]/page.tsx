import dynamic from 'next/dynamic'
import Link from 'next/link'
import {getMDXComponent} from 'next-contentlayer/hooks'
import {allPosts, Post} from 'contentlayer/generated'
import {notFound} from 'next/navigation'

const Ad = dynamic(() => import('components/ad'), {ssr: false})
const Share = dynamic(() => import('components/Share'), {ssr: false})

const Page = ({params}: {params: {slug: string[]}}) => {
  const post: Post | undefined = allPosts.find((post) => {
    return post.slug === params.slug.join('/')
  })

  if (!post) return notFound()

  const Component = getMDXComponent(post?.body?.code)
  return (
    <div className={'prose mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8'}>
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

export default Page

export const generateMetadata = ({params}: any) => {
  const post = allPosts.find((post) => {
    return post.slug === params.slug.join('/')
  })

  return {
    title: post?.title,
    description: post?.description,
    image: post?.cover
  }
}
