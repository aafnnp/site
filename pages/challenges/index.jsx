import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import {FaGithub, FaLink} from 'react-icons/fa'
import styles from 'styles/challenges.module.scss'
import {motion} from 'framer-motion'
const Image = dynamic(() => import('components/Image'))

export default function IndexPage(props) {
  const {allChallenges} = props
  const list = {
    visible: {
      opacity: 1,
      transition: {when: 'beforeChildren', staggerChildren: 0.3}
    },
    hidden: {opacity: 0}
  }

  return (
    <div className={styles.challenges}>
      <h1 className={styles.h1}>Challenges</h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className={styles.list}
      >
        {allChallenges.map((challenge, i) => {
          return <Challenge {...challenge} key={i} />
        })}
      </motion.div>
    </div>
  )
}

const Challenge = ({link, title, group}) => {
  const item = {
    visible: {opacity: 1, y: 0},
    hidden: {opacity: 0, y: 100}
  }
  return (
    <motion.div variants={item} className={styles.item} key={link}>
      <img
        className={styles.image}
        src={`/screenshots/${title}.webp`}
        alt={title}
      />

      <h3 className={styles.h3}>
        <Image
          className={styles.icon}
          src={`https://pics-rust.vercel.app/uPic/icons/${group}.svg`}
          alt={group}
          loading="lazy"
          width={16}
          height={16}
        />
        {title}
      </h3>
      <div className={styles.btn}>
        <Link href={link}>
          <a className={styles.link}>
            <FaLink />
            Link
          </a>
        </Link>
        <Link
          href={`https://github.com/Manonicu/site/tree/master/_challenges/${group}/${title}.jsx`}
        >
          <a className={styles.source}>
            <FaGithub />
            Source
          </a>
        </Link>
      </div>
    </motion.div>
  )
}

export const getStaticProps = async () => {
  const {globFiles} = await import('api/globFiles')
  const allChallenges = await globFiles('_challenges')
  const challenges = allChallenges.map((item) => {
    const {
      params: {
        slug: [group, title]
      }
    } = item
    return {
      title: title,
      group: group,
      link: `/challenges/${group}/${title}`
    }
  })
  return {
    props: {
      allChallenges: challenges
    }
  }
}
