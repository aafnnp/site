import Link from 'next/link'
import {FaGithub, FaSitemap, FaTwitter} from 'react-icons/fa'
import styles from 'styles/about.module.scss'

export default function Index({isOpen}) {
  return (
    <div className={styles.about}>
      <div className={styles['about-bg']}>
        {[1, 2, 3, 4].map((i) => {
          return (
            <div
              key={i}
              className={`${styles['swiper-slide']} ${
                styles[`swiper-slide-${i}`]
              }`}
            />
          )
        })}
      </div>

      <div className={styles.footer}>
        <div className="intro">
          <div className={styles.brand}>Freelancer</div>
          <div className={styles.description}>Fullstack Developer</div>
          <div className={styles.description}>Particular Frontend</div>
        </div>
        <div className={styles.social}>
          <Link href="https://twitter.com/Manonicu">
            <FaTwitter />
          </Link>
          <Link href="https://github.com/Manonicu">
            <FaGithub />
          </Link>
          <Link href="/about">
            <FaSitemap />
          </Link>
        </div>
      </div>

      <div className={`${styles.slogan}  ${isOpen ? styles.active : ''}`}></div>
      <div className={`${styles.menu}  ${isOpen ? styles.active : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/challenges">Challenges</Link>
        <Link href="/playground">Playground</Link>
        <Link href="/http-status">Http Status</Link>
        {/* <Link href="/contact"><a>Contact</a></Link> */}
      </div>

      <div className={styles['scroll-indicator']}>
        <div className={styles['scroll-indicator-wrapper']}>
          <div className={styles['scroll-line']}></div>
        </div>
      </div>
    </div>
  )
}
