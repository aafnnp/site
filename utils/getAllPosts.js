import {globby} from 'globby'
import matter from 'gray-matter'
import {getRandomArrayElements} from './index'

const fs = require('fs')
const dayjs = require('dayjs')

const GetAllPosts = async () => {
  const posts = await globby(['_posts'])
  return posts
    .reduce((prev, next) => {
      const fileContents = fs.readFileSync(next, 'utf8')
      const {data, content} = matter(fileContents)
      const postData = {
        ...data,
        group: dayjs(data.date).format('MMM/YYYY'),
        date: new Intl.DateTimeFormat('en-US').format(data.date),
        fromNow: fromNow(data.date),
        modified: dayjs(data.modified).format('MMM DD, YYYY'),
        content,
        slug: next.replace(/^_posts\//, '').replace(/\.mdx$/, '')
      }
      !data.draft && prev.push(postData)
      return prev
    }, [])
    .sort((a, b) => dayjs(b.date) - dayjs(a.date))
}

// 根据slug导出文章
const GetPostBySlug = (slug) => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    GetAllPosts()
      .then((posts) => {
        const post = posts.find((post) =>
          post.slug.includes(`${slug.join('/')}`)
        )
        resolve(post)
      })
      .catch(() => {
        reject({})
      })
  })
}

// 根据tag导出随机文章
const GetRandomPost = () => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    GetAllPosts()
      .then((posts) => {
        const randomPosts = getRandomArrayElements(
          posts,
          posts.length < 6 ? posts.length - 1 : 6
        )
        resolve(randomPosts)
      })
      .catch(() => {
        reject([])
      })
  })
}

const fromNow = (date) => {
  return new Intl.RelativeTimeFormat('en', {numeric: 'auto'}).format(
    Math.round((new Date(date) - new Date()) / 86400000),
    'day'
  )
}

export {GetAllPosts, GetPostBySlug, GetRandomPost}
