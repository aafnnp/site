import styles from 'styles/index.module.scss'
import {AnimatePresence, motion} from 'framer-motion'
import {useEffect, useState} from 'react'

export default function Index(props) {
  const items = [
    `welcome<br/>to my site`,
    `Fullstack developer`,
    `check out <br/> all my work`
  ]
  const [key, setKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (key === items.length - 1) {
        setKey(0)
      } else {
        setKey((key) => key + 1)
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [items.length, key])

  return (
    <div className={styles.home}>
      <hgroup className={styles.hgroup}>
        <h1>
          Welcome
          <br />
          To My Site
        </h1>
        <p>Fullstack Developer</p>
        <p>
          Check out
          <br />
          all my work
        </p>
      </hgroup>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: 0.5}}}
          exit={{opacity: 0}}
          className={styles.slogan}
          key={key}
          dangerouslySetInnerHTML={{__html: items[key]}}
        />
      </AnimatePresence>
    </div>
  )
}
