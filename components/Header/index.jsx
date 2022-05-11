import Link from 'next/link'
import styles from './index.module.scss'

const Header = (props) => {
  const {isOpen, toggleDrapes} = props

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.link}>ABOUT ME</a>
      </Link>
      <Link href="/">
        <a className={styles.link}>BLOG</a>
      </Link>

      <Link href="/">
        <h1 className={styles.circle}>
          <a>M</a>
        </h1>
      </Link>
      <Link href="/">
        <a className={styles.link}>CHALLENGES</a>
      </Link>
      <Link href="/">
        <a className={styles.link}>PLAYGROUND</a>
      </Link>
    </header>
  )
}

export default Header
