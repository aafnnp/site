import RSS from 'rss'
import fs from 'node:fs'
import {allPosts} from 'contentlayer/generated'

export default async function generateRssFeed() {
  const site_url = 'https://manon.icu/blog'

  const feedOptions = {
    // ...
  }

  const feed = new RSS(feedOptions)

  allPosts.map((post) => {
    feed.item({
      title: post.title,
      published: true,
      description: post.description,
      url: `${site_url}/${post.slug}`,
      date: post.date,
      author: 'pfan',
      categories: post.tags
    })
  })

  fs.writeFileSync('./public/rss.xml', feed.xml({indent: true}))
}
