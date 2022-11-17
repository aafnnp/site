import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import {FaGithub, FaLink} from 'react-icons/fa'
import styles from 'styles/playground.module.scss'

const Image = dynamic(() => import('components/Image'))

export default function IndexPage(props) {
  const {allChallenges} = props

  return (
    <div className={styles.challenges}>
      <h1 className={styles.h1}>Web API Playground</h1>
      <div className={styles.list}>
        <ul>
          {allChallenges.map((challenge, i) => {
            return (
              <li className={styles.item} key={challenge.link}>
                <div className={styles.title}>
                  <i>{i + 1}.</i> {challenge.title}
                </div>
                <div className={styles.icons}>
                  <Image
                    className={styles.icon}
                    src={`https://pics-rust.vercel.app/uPic/icons/${challenge.group}.svg`}
                    alt={challenge.group}
                    loading="lazy"
                    width={16}
                    height={16}
                  />
                  <Link href={challenge.link} className={styles.link}>
                    <FaLink />
                  </Link>
                  <Link
                    className={styles.source}
                    href={`https://github.com/Manonicu/site/tree/master/_playground/${challenge.group}/${challenge.title}.jsx`}
                  >
                    <FaGithub />
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const {globFiles} = await import('utils/globFiles')
  const allChallenges = await globFiles('_playground')
  const challenges = allChallenges.map((item) => {
    const {
      params: {
        slug: [group, title]
      }
    } = item
    return {
      title: title,
      group: group,
      link: `/playground/${group}/${title}`
    }
  })
  return {
    props: {
      allChallenges: challenges
    }
  }
}
