import React from 'react'
import styles from 'assets/styles/challenges/css/card-hover.module.scss'

const data = [
  {
    title: 'Mountain View',
    copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains',
    btn: 'View Trips'
  },
  {
    title: 'To The Beach',
    copy: 'Plan your next beach trip with these fabulous destinations',
    btn: 'View Trips'
  },
  {
    title: 'Desert Destinations',
    copy: "It's the desert you've always dreamed of",
    btn: 'Book Now'
  },
  {
    title: 'Explore The Galaxy',
    copy: 'Seriously, straight up, just blast off into outer space today',
    btn: 'Book Now'
  }
]

export default function ErrorPage() {
  return (
    <div className={styles['page-wrapper']}>
      <div className={styles['page-content']}>
        {data.map((item) => {
          return (
            <div className={styles.card} key={item.title}>
              <div className={styles.content}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.copy}>{item.copy}</p>
                <button className={styles.btn}>{item.btn}</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
