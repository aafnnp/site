import React from 'react'
import styles from 'assets/styles/challenges/css/3dcard.module.scss'

export default function ErrorPage() {
  return (
    <div className={styles['card-list']}>
      <div className={styles.card}>
        <div className={styles['card-content']}>
          <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
            className={styles['cover-image']}
          />
        </div>
        <img
          src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
          className={styles['title']}
        />
        <img
          src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
          className={styles['character']}
        />
      </div>

      <div className={styles.card}>
        <div className={styles['card-content']}>
          <img
            src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
            className={styles['cover-image']}
          />
        </div>
        <img
          src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
          className={styles['title']}
        />
        <img
          src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
          className={styles['character']}
        />
      </div>
    </div>
  )
}
