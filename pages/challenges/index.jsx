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
          return (
            <div className={styles.item} key={challenge.link}>
              <img
                className={styles.image}
                src={`/screenshots/${challenge.title}.webp`}
                alt={challenge.title}
              />

              <h3 className={styles.h3}>
                <Image
                  className={styles.icon}
                  src={`https://pics-rust.vercel.app/uPic/icons/${challenge.group}.svg`}
                  alt={challenge.group}
                  loading="lazy"
                  width={16}
                  height={16}
                />
                {challenge.title}
              </h3>
              <div className={styles.btn}>
                <Link href={challenge.link}>
                  <a className={styles.link}>
                    <FaLink />
                    Link
                  </a>
                </Link>
                <Link
                  href={`https://github.com/Manonicu/site/tree/master/_challenges/${challenge.group}/${challenge.title}.jsx`}
                >
                  <a className={styles.source}>
                    <FaGithub />
                    Source
                  </a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
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
