import Link from 'next/link'
import Image from 'next/image'

const IndexPage = ({posts,tags}) => {
  console.log(tags)
  return (
    <div
      className={
        'grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-8 px-6 pt-12 h-screen overflow-y-scroll'
      }
    >
      {posts.map((post) => {
        return (
          <div key={post.title}>
            <div className={'relative mb-4 w-full sm:h-28 lg:h-48 overflow-hidden'}>
              <img
                src={
                  post.cover ??
                  'https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/NhSU3O.jpg'
                }
                className={'block w-full object-cover rounded aspect-video'}
                alt={post.title}
              />
            </div>
            <div className={'mt-4'}>
              <div className="flex gap-2 tags">
                {post.tags.map((tag) => {
                  return (
                    <div className={'relative w-4 h-4'} key={tag}>
                      <Image
                        fill
                        alt={tag}
                        src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`}
                      />
                    </div>
                  )
                })}
                <div className={'text-slate-400 text-sm'}>{post.date}</div>
              </div>
              <div className={'font-bold text-slate-700 leading-snug'}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
  const tags = [...new Set(posts.map(item=>item.tags).flat(Infinity))]
  return {
    props: {
      posts,
      tags
    }
  }
}
