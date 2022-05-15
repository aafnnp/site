import Link from 'next/link'
import {useEffect,useState} from 'react'
import styles from './index.module.scss'

const Header = (props) => {
  const {isHome} = props
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${styles.header} ${isHome ? '':styles.extra} ${isScrolled ? styles['fix-header'] : ''}`}>
      <Link href="/about">
        <a className={styles.link}>ABOUT ME</a>
      </Link>
      <Link href="/blog">
        <a className={styles.link}>BLOG</a>
      </Link>

      <Link href="/">
        <h1 className={styles.circle}>
          <a>M</a>
        </h1>
      </Link>
      <Link href="/challenges">
        <a className={styles.link}>CHALLENGES</a>
      </Link>
      <Link href="/playground">
        <a className={styles.link}>PLAYGROUND</a>
      </Link>
    </header>
  )
}

export default Header
