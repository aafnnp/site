import dynamic from 'next/dynamic'
import Link from 'next/link'
import styles from 'styles/blog.module.scss'
import {motion} from 'framer-motion'
import {useState} from 'react'
import {chunk} from 'utils'

const Image = dynamic(() => import('components/Image'))
const Pexels = dynamic(() => import('components/Pexels'))
const Pagination = dynamic(() => import('components/Pagination'))

const IndexPage = ({posts}) => {
  const [page, setPage] = useState(0)

  return (
    <div className={styles.blog}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles['post-list']}>
        {posts[page].map((post) => {
          return (
            <motion.div
              whileHover={{y: -10}}
              className={styles['post-item']}
              key={post.title}
            >
              <div className={styles['post-item-image']}>
                {/* <img src={`/api/og?title=${post.title}&cover=${post.cover}`} alt="" /> */}
                <Pexels tag={post.tags} cover={post.cover} title={post.title} />
              </div>
              <div className={styles['post-item-meta']}>
                <div className={styles['post-item-meta-tags']}>
                  {post.tags?.map((tag) => (
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
                <div className="post-item-meta-date">{post.date}</div>
              </div>
              <div className="post-item-title hover:text-blue-500">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </div>
            </motion.div>
          )
        })}
      </div>
      <Pagination len={posts.length} page={page} setPage={setPage} />
    </div>
  )
}

export default IndexPage

export async function getStaticProps() {
  const {GetAllPosts} = await import('api/getAllPosts')
  const posts = await GetAllPosts()
  const chunkedPosts = chunk(posts, 24)
  return {
    props: {
      posts: chunkedPosts
    }
  }
}
