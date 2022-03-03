import Link from 'next/link'
import React from 'react'

export default function RandomPost ({ randomPost }) {
  return (
    <div className="random-post">
      <h2>更多文章</h2>
      <ul>
        {randomPost.map((item, key) => (
          <li key={key}>
            <Link href={`/blog/${item.slug}`}>
              <a>{item.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
