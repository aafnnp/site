import dynamic from 'next/dynamic'
import Link from 'next/link'
import styles from 'styles/blog.module.scss'
import dayjs from 'dayjs'

const Image = dynamic(() => import('components/Image'))
const IndexPage = ({posts}) => {

  return (
    <div className={styles.blog}>
      <h1 className={styles.h1}>Blog</h1>
      {Object.entries(posts).map(([key,value]) => {
        return (
          <div className={styles.list} key={key}>
            <div className={styles["date-key"]}>{key}</div>
            <ul className={styles.posts}>
              {value.map((post) => {
                return (
                  <li className={styles.link} key={post.slug}>
                      <Link href={`/blog/${post.slug}`}>
                        <a className={styles.a}>{post.title}</a>
                      </Link>
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
                  </li>
                )
              })}
            </ul>

          </div>
        )
      })}
    </div>
  )
}

export default IndexPage

export async function getStaticProps() {
  const {GetAllPosts} = await import('api/getAllPosts')
  const posts = await GetAllPosts()
  const groupPostsByYearAndMonth = posts.reduce((acc, post) => {
    const year = dayjs(post.date).year()
    const month = dayjs(post.date).month()
    const key = `${year}-${month}`
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(post)
    return acc
  }, {})
  return {
    props: {
      posts: groupPostsByYearAndMonth,
    }
  }
}
