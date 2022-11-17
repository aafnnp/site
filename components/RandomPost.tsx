import Link from 'next/link'
import React from 'react'
import styles from 'assets/styles/blog.module.scss'

export default function RandomPost({randomPost}) {
  return (
    <div className={styles['random-post']}>
      <h2 className={styles.h2}>更多文章</h2>
      <ul>
        {randomPost.map((item, key) => (
          <li key={key} className={styles.li}>
            <Link href={`/blog/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
