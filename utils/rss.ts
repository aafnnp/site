import RSS from 'rss'
import fs from 'node:fs'
import {GetAllPosts} from './getAllPosts'

export default async function generateRssFeed() {
  const site_url = 'https://manon.icu/blog'

  const allPosts = await GetAllPosts()

  const feedOptions = {
    // ...
  }

  const feed = new RSS(feedOptions)

  allPosts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${site_url}/${post.slug}`,
      date: post.date
    })
  })

  fs.writeFileSync('./public/rss.xml', feed.xml({indent: true}))
}
