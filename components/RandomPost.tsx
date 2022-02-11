import Link from 'next/link'
import React from 'react'

interface PageProps {
  randomPost:[]
}

interface PostProps{
  slug:string;
  data:{
    title:string
  }
}

export default function RandomPost ({ randomPost }:PageProps) {
  return (
    <div className="random-post">
      <h2>更多文章</h2>
      <ul>
        {randomPost.map((item:PostProps, key:number) => (
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
