'use client'
import Link from 'next/link'
import {
  FaBookOpen,
  FaHouseChimney,
  FaMailchimp,
  FaGithub,
  FaTwitter
} from 'react-icons/fa6'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import {motion} from 'framer-motion'

const Navigation = () => {
  const pathName = usePathname()
  const [hoverPath, setHoverPath] = useState(pathName)
  return (
    <>
      <div className="bg-light">
        <section className="mx-auto flex justify-center max-w-4xl flex-wrap gap-8 px-4 py-8 sm:px-8">
          <div
            className="flex-grow text-center font-medium"
            style={{flexBasis: '25rem'}}
          >
            <p aria-hidden className="text-4xl">
              Hi, I'm
            </p>
            <h1 className="mb-8 text-5xl">
              <Link href={'/'}>Manon.icu</Link>
            </h1>
            <h2 className="mx-auto max-w-[35ch] text-xl ">
              I'm here to make you a better developer by teaching you everything
              I know about building for the web.
            </h2>
          </div>
        </section>
      </div>
      <div className="bg-light sticky top-0 z-30 mb-8 border-b border-gray-100 py-1">
        <ul className="flex flex-row flex-wrap justify-center print:flex-col print:gap-2">
          {LinkItems.map((i) => {
            return (
              <li key={i.name} className="rounded">
                <Link
                  href={i.href}
                  className={`translate-0 group relative flex flex-row items-center rounded-lg px-4 py-2`}
                  onMouseOver={() => setHoverPath(i.href)}
                  onMouseLeave={() => setHoverPath(pathName)}
                >
                  {i.icon}
                  <span className="mx-2 font-medium leading-6 print:md:inline">
                    {i.name}
                  </span>
                  {i.href === hoverPath ? (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-full bg-black/10 rounded-md -z-10"
                      layoutId="navbar"
                      aria-hidden="true"
                      transition={{
                        type: 'spring',
                        bounce: 0.25,
                        stiffness: 130,
                        damping: 9,
                        duration: 0.3
                      }}
                    ></motion.div>
                  ) : null}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

const LinkItems = [
  {name: 'Home', href: '/', icon: <FaHouseChimney className="w-6 h-6" />},
  {name: 'Blog', href: '/blog', icon: <FaBookOpen className="w-6 h-6" />},
  // {name: 'Challenges', href: '/challenges', icon: <FaDev />},
  // {
  //   name: 'Playground',
  //   href: '/playground',
  //   icon: <FaDev className="w-6 h-6" />
  // },
  {
    name: 'Contact',
    href: '/contact',
    icon: <FaMailchimp className="w-6 h-6" />
  },
  {
    name: 'Github',
    href: 'https://github.com/aafnnp',
    icon: <FaGithub className="w-6 h-6" />
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/aafnnp',
    icon: <FaTwitter className="w-6 h-6" />
  }
]

export default Navigation
