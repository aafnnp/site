import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {FaGithub, FaLink} from 'react-icons/fa'

export default function IndexPage(props) {
  const {allChallenges} = props

  return (
    <div className={'relative prose max-w-full pt-20'}>
      <h1 className={'mb-12 text-center'}>
        Challenges
      </h1>
      <div className={'grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4'}>
        {allChallenges.map((challenge, i) => {
          return <Challenge {...challenge} key={i} />
        })}
      </div>
    </div>
  )
}

const Challenge = ({link, title, group}) => {
  return (
    <div className={'flex gap-4 flex-col flex-[1_1_20ch]'}>
      <div className={'relative w-full h-44'}>
        <Image fill src={`/screenshots/${title}.webp`} alt={title} />
      </div>

      <div className={'flex gap-2 relative items-center px-4'}>
        <Image
          width={16}
          height={16}
          src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${group}.svg`}
          alt={title}
        />
        {title}
      </div>
      <div className={'flex gap-4 px-4 items-center justify-between'}>
        <Link
          href={link}
          className={
            'flex w-1/2 items-center justify-center gap-2 bg-white text-twitter py-1 rounded-md shadow-md text-sm'
          }
        >
          <FaLink />
          Link
        </Link>
        <Link
          href={`https://github.com/Manonicu/site/tree/master/_challenges/${group}/${title}.jsx`}
          className={
            'flex w-1/2 items-center justify-center gap-2 bg-twitter text-white py-2 rounded-md shadow-md text-sm'
          }
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
