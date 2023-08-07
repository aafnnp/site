import Link from 'next/link'
import Image from 'next/image'
import {FaGithub, FaLink} from 'react-icons/fa'

export default function IndexPage(props) {
  const {allChallenges} = props

  return (
    <div className={'mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8'}>
      <h1 className={'mb-4 text-center'}>Web API Playground</h1>
      <div className={'grid grid-cols-3 gap-4'}>
        <ul>
          {allChallenges.map((challenge) => {
            return (
              <li key={challenge.link}>
                <div className={'flex gap-2 items-center'}>
                  <Link href={challenge.link}>
                    {challenge.title.replaceAll('-', ' ')}
                  </Link>
                  <Image
                    className={'m-0'}
                    width={16}
                    height={16}
                    src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${challenge.group}.svg`}
                    alt={challenge.group}
                  />

                  <Link href={challenge.link}>
                    <FaLink />
                  </Link>
                  <Link
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
