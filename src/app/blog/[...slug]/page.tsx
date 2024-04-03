import globFiles from '@/utils/globFiles'
import { marked } from 'marked'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const Ad = dynamic(() => import('@/components/ad'), { ssr: false })
const Share = dynamic(() => import('@/components/Share'), { ssr: false })

async function getData(slug: string[]) {
  const posts = globFiles(process.cwd() + '/src/content')
  return posts.find((post) => post.slug.includes(slug.join('/'))) ?? {}
}
export default async function Page({ params: { slug } }: { params: { slug: string[] } }) {
  const { data, content } = await getData(slug)
  if (!data) {
    return notFound()
  }
  return (
    <div className={'prose mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8'}>
      <hgroup>
        <div className={'text-center text-slate-500 text-xs'}>Published {data?.date}</div>
        <h1 className={'text-center mt-4 mb-2'}>{data?.title}</h1>
        {data?.originalUrl && (
          <div className={'text-center text-slate-500 text-sm'}>
            本文翻译自：
            <Link href={data?.originalUrl}>{data?.originalUrl}</Link>
          </div>
        )}
        <Share title={data?.title} tag={data?.tags} handle={data?.handle} />
      </hgroup>

      {/* 头部广告 */}
      <Ad />
      {/* 头部广告结束 */}
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>

      {/* 底部广告 */}
      <Ad />
      {/* 底部广告结束 */}
    </div>
  )
}
