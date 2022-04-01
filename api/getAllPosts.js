import fs from 'fs'
import {globby} from 'globby'
import matter from 'gray-matter'
import {chunk, getRandomArrayElements} from 'utils'
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(relativeTime)

const getAllPosts = async () => {
  const posts = await globby(['_posts'])
  return posts
    .reduce((prev, next) => {
      const fileContents = fs.readFileSync(next, 'utf8')
      const {data, content} = matter(fileContents)
      const postData = {
        data: {
          ...data,
          date: dayjs(data.date).format('MMM DD, YYYY'),
          fromNow: dayjs(data.date).fromNow()
        },
        content,
        slug: next.replace(/^_posts\//, '').replace(/\.mdx$/, '')
      }
      prev.push(postData)
      return prev
    }, [])
    .sort((a, b) => dayjs(b.data.date) - dayjs(a.data.date))
    .filter((post) => post.data.draft !== true)
}

// 根据slug导出文章
const GetPostBySlug = async (slug) => {
  const realSlug = `${slug.join('/')}`

  const allPosts = await getAllPosts()

  return allPosts.find((post) => post.slug.includes(realSlug))
}

// 根据tag导出随机文章
const GetRandomPost = async () => {
  const randomPost = await getAllPosts()

  return getRandomArrayElements(
    randomPost,
    randomPost.length < 6 ? randomPost.length - 1 : 6
  )
}

export {getAllPosts, GetPostBySlug, GetRandomPost}
