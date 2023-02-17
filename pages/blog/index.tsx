import NextLink from 'next/link'
import {
  Image,
} from '@chakra-ui/react'

const IndexPage = ({groupByMonthPosts, posts}) => {
  console.log(groupByMonthPosts)
  return (
    <div
      className={
        'grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-8 px-6 pt-12 h-screen overflow-y-scroll'
      }
    >
      {posts.map((post) => {
        return (
          <div key={post.title}>
            <div className={'mb-4'}>
              <Image
                src={
                  post.cover ??
                  'https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/NhSU3O.jpg'
                }
                className={'rounded aspect-video'}
                objectFit={'cover'}
                alt={post.title}
              />
            </div>
            <div className={'mt-4'}>
              <div className="flex gap-2 tags">
                {post.tags.map((tag) => {
                  return (
                    <Image
                      key={tag}
                      objectFit="cover"
                      alt={tag}
                      boxSize={4}
                      src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`}
                    />
                  )
                })}
              </div>
              <div className={'font-bold text-slate-700 leading-snug'}>
                <NextLink href={`/blog/${post.slug}`}>{post.title}</NextLink>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default IndexPage

export async function getStaticProps() {
  const {GetAllPosts} = await import('utils/getAllPosts')
  const posts = await GetAllPosts()
  const groupByMonthPosts = posts.reduce((prev, next) => {
    if (Array.isArray(prev[next.group])) {
      prev[next.group].push(next)
    } else {
      prev[next.group] = []
      prev[next.group].push(next)
    }
    return prev
  }, {})
  return {
    props: {
      posts,
      groupByMonthPosts
    }
  }
}
