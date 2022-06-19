import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {AiFillHome} from 'react-icons/ai'
import {FaBlogger, FaSolarPanel} from 'react-icons/fa'
import {SiAboutdotme} from 'react-icons/si'
import {IoMdContact} from 'react-icons/io'
import {RiMarkupLine} from 'react-icons/ri'

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.2}
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1}
  }
}

const Navigation = () => (
  <motion.div
    variants={variants}
    className="flex fixed top-0 left-0 w-screen h-[64px] justify-center gap-4 items-center capitalize shadow bg-white z-[999]"
  >
    {LinkItems.map((i, key) => (
      <div className='menu-item' key={key}>
        <Link href={i.href}>{i.name}</Link>
      </div>
    ))}
  </motion.div>
)

const LinkItems = [
  {name: 'home', href: '/', icon: <AiFillHome />},
  {name: 'blog', href: '/blog', icon: <FaBlogger />},
  {name: 'challenges', href: '/challenges', icon: <RiMarkupLine />},
  {name: 'playground', href: '/playground', icon: <FaSolarPanel />},
  {name: 'about', href: '/about', icon: <SiAboutdotme />},
  {name: 'contact', href: '/contact', icon: <IoMdContact />}
]

export default Navigation
