import Link from 'next/link'
import React, {useState} from 'react'
import dynamic from 'next/dynamic'
import { chunk } from "utils";

const Layout = dynamic(() => import('components/Layout'))
const Image = dynamic(() => import('components/Image'))
const Pagination = dynamic(() => import('components/Pagination'))

const IndexPage = ({posts}) => {
  const [curPage, setCurPage] = useState(1)
  const postList = posts[curPage - 1]

  return (
    <Layout>
      {postList.map(({slug, data}) => {
        return (
          <div
            className="grid grid-cols-[30%_auto] gap-4 py-2 xs:py-1 xs:grid-cols-1 sm:grid-cols-[25%_auto] md:grid-cols-[30%_auto] xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-base"
            key={slug}
          >
            <div className="text-gray-500 text-right xs:hidden sm:block">
              {data.date}
            </div>
            <div className="flex gap-2 items-center">
              <Link href={`/blog/${slug}`}>
                <a className="max-w-[90%] whitespace-nowrap text-ellipsis overflow-hidden">
                  {data.title}
                </a>
              </Link>
              {data.tags?.map((tag) => (
                <Image
                  className="w-4 h-4"
                  key={tag}
                  src={`https://pics-rust.vercel.app/uPic/icons/${tag}.svg`}
                  alt={tag}
                  width={16}
                  height={16}
                />
              ))}
            </div>
          </div>
        )
      })}
      <Pagination len={posts.length} page={curPage} setPage={setCurPage} />
    </Layout>
  )
}

export default IndexPage

export async function getStaticProps() {
  const {GetAllPosts} = await import('api/getAllPosts')
  const posts = await GetAllPosts()

  return {
    props: {
      posts:chunk(posts,30)
    }
  }
}
