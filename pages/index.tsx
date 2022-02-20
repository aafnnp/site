import { getAllPosts } from 'api'
import { Layout } from 'components/Layout'
import Link from 'next/link'
import React, { useState } from 'react'
import { InferGetStaticPropsType } from 'next'
import { IPostArr, IPost } from '../types'

export default function IndexPage ({ posts }:InferGetStaticPropsType<typeof getStaticProps>) {
  const [curPage, setCurPage] = useState<number>(1)
  const postList:any = posts[curPage - 1]

  return (
    <Layout>
      {postList.map(({ slug, data }:IPost) => {
        return (
          <div
            className="grid grid-cols-[30%_auto] gap-4 py-2 xs:grid-cols-1 sm:grid-cols-[25%_auto] md:grid-cols-[30%_auto]"
            key={slug}
          >
            <div className="text-gray-500 text-right xs:hidden sm:block">
              {data.date}
            </div>
            <div className="flex gap-2 items-center">
              <Link href={`/blog/${slug}`}>
                <a>{data.title}</a>
              </Link>
              {data.tags?.map((tag:string) => (
                <picture className="w-4 h-4" key={tag}>
                  <img loading="lazy" src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`} alt={tag} width={16} height={16}/>
                </picture>
              ))}
            </div>
          </div>
        )
      })}
      <div className="pagination">
        {Array(posts.length)
          .fill(0)
          .map((_, index:number) => (
            <span
              className={curPage === index + 1 ? 'active' : ''}
              key={index}
              onClick={() => setCurPage(index + 1)}
            >
              {index + 1}
            </span>
          ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps () {
  const posts:IPostArr[] = await getAllPosts()

  return {
    props: {
      posts
    }
  }
}
