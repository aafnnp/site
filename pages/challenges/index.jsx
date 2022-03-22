import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import dynamic from 'next/dynamic';

const Image = dynamic(()=>import('components/Image'))

export default function IndexPage (props) {
  const { allChallenges } = props

  return (
    <div className="pb-4">
      <motion.h1
        className="mb-12 text-center text-4xl font-bold"
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        Challenges
      </motion.h1>
      <motion.div
        className="grid gap-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
        initial="hidden"
        animate="visible"
      >
        {allChallenges.map((challenge, i) => {
          return (
            <motion.div
              className="shadow-lg rounded-md overflow-hidden"
              key={challenge.link}
              custom={i}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: 'easeOut', duration: 0.5, delay: i * 0.1 }}
            >
              <img
                className="flex-none rounded-l-md"
                src={`/screenshots/${challenge.title}.webp`}
                alt={challenge.title}
              />
              <div className="p-4">
                <div className="flex mb-2">
                  <Image className="w-4 h-4" src={`https://pics-rust.vercel.app/uPic/icons/${challenge.group}.svg`} alt={challenge.group} loading="lazy" width={16} height={16}/>
                  <h3 className="font-bold text-sm ml-2">{challenge.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <Link href={challenge.link}>
                    <a className="py-2 flex items-center justify-center text-gray-900 bg-gray-300 hover:bg-gray-600 hover:text-white rounded-md">
                      <FaLink className="mr-2" />
                      Link
                    </a>
                  </Link>
                  <Link
                    href={`https://github.com/Manonicu/site/tree/master/_challenges/${challenge.group}/${challenge.title}.jsx`}
                  >
                    <a className="py-2 flex items-center justify-center text-white bg-twitter rounded-md">
                      <FaGithub className="mr-2" />
                      Source
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export const getStaticProps =async () =>{
  const {globFiles} =await import('api/globFiles')
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
