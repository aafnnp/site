import React from 'react'
import {motion} from 'framer-motion'
import MenuItem from './MenuItem'
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
  <motion.ul
    variants={variants}
    className="p-[25px] absolute top-[100px] w-[230px]"
  >
    {LinkItems.map((i, key) => (
      <MenuItem i={i} idx={key} key={i.name} />
    ))}
  </motion.ul>
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
