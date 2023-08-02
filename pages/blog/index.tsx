import Link from 'next/link'
import {useMemo, useState} from 'react'
import dayjs from 'dayjs'

const IndexPage = ({posts}) => {
  const [year, setYear] = useState('2023')
  const post = useMemo(() => {
    return posts[year]
  }, [posts, year])
  return (
    <div className={'mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8'}>
      <h1 className="mb-12 text-2xl">Articles, guides, and cheatsheets</h1>
      <ul className="mb-12 columns-2 gap-x-2 text-sm text-gray-700 sm:columns-4">
        {Object.keys(posts).map((year) => {
          return (
            <li
              key={year}
              onClick={() => setYear(year)}
              className="mb-3 pr-4 font-bold cursor-pointer hover:text-gray-900"
            >
              {year}
            </li>
          )
        })}
      </ul>
      <ol className="grid gap-x-8">
        {post.map((post) => {
          return (
            <article key={post.title}>
              <Link
                href={`/blog/${post.slug}`}
                className="group -ml-4 flex overflow-hidden rounded-lg hover:bg-gray-100"
              >
                <div className="flex flex-col gap-2 px-4 py-4">
                  <time className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    {post.date}
                  </time>
                  <h2
                    className="text-xl font-bold text-gray-800"
                    style={{wordBreak: 'break-word'}}
                  >
                    {post.title}
                  </h2>
                </div>
              </Link>
            </article>
          )
        })}
      </ol>
    </div>
  )
}

export default IndexPage

export async function getStaticProps() {
  const {GetAllPosts} = await import('utils/getAllPosts')
  const posts = await GetAllPosts()
  // grouped by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = dayjs(post.date).get('year')
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {})
  const tags = [...new Set(posts.map((item) => item.tags).flat(Infinity))]
  return {
    props: {
      posts: postsByYear,
      tags
    }
  }
}
