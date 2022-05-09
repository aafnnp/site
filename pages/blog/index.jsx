import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, {useState} from 'react'
import styles from 'styles/blog.module.scss'
import {chunk} from 'utils'

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
          <div className={styles.blog} key={slug}>
            <div className={styles.date}>{data.date}</div>
            <div className={styles.link}>
              <Link href={`/blog/${slug}`}>
                <a className={styles.a}>{data.title}</a>
              </Link>
              {data.tags?.map((tag) => (
                <Image
                  className={styles.tag}
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
      posts: chunk(posts, 30)
    }
  }
}
