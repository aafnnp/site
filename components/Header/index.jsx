import Link from 'next/link'
import {BsFillTerminalFill} from 'react-icons/bs'
import styles from './index.module.scss'

const Header = (props) => {
  const {isOpen,toggleDrapes} = props

  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          <a className={styles.logo}>
            <BsFillTerminalFill />
            Manon.icu
          </a>
        </Link>
      </h1>

      <div className={styles.list} onClick={toggleDrapes}>
        <div className={`${styles.line} ${isOpen ? styles['line-down'] :''}`}></div>
        <div className={styles.line}></div>
        <div className={`${styles.line} ${isOpen ? styles['line-up'] :''}`}></div>
      </div>
    </header>
  )
}

export default Header
