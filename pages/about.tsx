import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function Index () {
  return (
    <>
      <style jsx>{`
        .about {
          background: url('https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/about-bg.jpg')
            no-repeat center center fixed;
          background-size: cover;
          color: #fff;
        }
      `}</style>
      <div className="flex flex-col items-center justify-center absolute w-screen h-screen top-0 left-0 about">
        <div className="absolute top-24 left-14">
          <motion.h1
            className="text-xl"
            animate={{ x: 0, opacity: 1 }}
            initial={{
              x: -100,
              opacity: 0
            }}
            transition={{ ease: 'easeOut', duration: 1.5 }}
          >
            Manon.icu
          </motion.h1>
          <motion.h3
            className="text-4xl"
            animate={{ x: 0, opacity: 1 }}
            initial={{
              x: -100,
              opacity: 0
            }}
            transition={{ ease: 'easeOut', duration: 1.5, delay: 0.8 }}
          >
            FullStack Developer.
          </motion.h3>
        </div>

        <div className="absolute bottom-24 right-14">
          <Link href="/challenges">
            <a>
              <motion.button
                className="w-32 mr-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full"
                animate={{ y: 0, opacity: 1 }}
                initial={{
                  y: 100,
                  opacity: 0
                }}
                transition={{ ease: 'easeOut', duration: 1.5, delay: 0.8 }}
              >
                Challenges
              </motion.button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <motion.button
                className="w-32 mr-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full"
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 1.5, delay: 1.6 }}
              >
                Blog
              </motion.button>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
