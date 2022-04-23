import Link from 'next/link'
import React from 'react'
import styles from 'styles/about.module.scss'

export default function Index() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.content}>
          <h1 className={styles.h1}>Manon.icu</h1>
          <h3 className={styles.h3}>FullStack Developer.</h3>
        </div>

        <div className={styles.btn}>
          <Link href="/challenges">
            <a className={styles.a}>Challenges</a>
          </Link>
          <Link href="/">
            <a className={styles.a}>Blog</a>
          </Link>
        </div>
      </div>
    </>
  )
}
