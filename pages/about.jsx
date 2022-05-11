import Link from 'next/link'
import {FaGithub, FaSitemap, FaTwitter} from 'react-icons/fa'
import styles from 'styles/index.module.scss'

export default function Index({isOpen}) {
  return (
    <div className={styles.home}>
      <div className={styles['home-bg']}>
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
            <a target="_blank">
              <FaTwitter />
            </a>
          </Link>
          <Link href="https://github.com/Manonicu">
            <a target="_blank">
              <FaGithub />
            </a>
          </Link>
          <Link href="/about">
            <a>
              <FaSitemap />
            </a>
          </Link>
        </div>
      </div>

      <div className={`${styles.slogan}  ${isOpen ? styles.active : ''}`}></div>
      <div className={`${styles.menu}  ${isOpen ? styles.active : ''}`}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/challenges">
          <a>Challenges</a>
        </Link>
        <Link href="/playground">
          <a>Playground</a>
        </Link>
        <Link href="/http-status">
          <a>Http Status</a>
        </Link>
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
