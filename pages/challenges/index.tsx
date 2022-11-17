import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import {FaGithub, FaLink} from 'react-icons/fa'
import styles from 'styles/challenges.module.scss'

const Image = dynamic(() => import('components/Image'))

export default function IndexPage(props) {
  const {allChallenges} = props

  return (
    <div className={styles.challenges}>
      <h1 className={styles.h1}>Challenges</h1>
      <div className={styles.list}>
        {allChallenges.map((challenge, i) => {
          return <Challenge {...challenge} key={i} />
        })}
      </div>
    </div>
  )
}

const Challenge = ({link, title, group}) => {
  return (
    <div className={styles.item} key={link}>
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
        <Link href={link} className={styles.link}>
          <FaLink />
          Link
        </Link>
        <Link
          href={`https://github.com/Manonicu/site/tree/master/_challenges/${group}/${title}.jsx`}
          className={styles.source}
        >
          <FaGithub />
          Source
        </Link>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const {globFiles} = await import('utils/globFiles')
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
