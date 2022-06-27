import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
// import {motion} from 'framer-motion'
// import {AiFillHome} from 'react-icons/ai'
// import {FaBlogger, FaSolarPanel} from 'react-icons/fa'
// import {SiAboutdotme} from 'react-icons/si'
// import {IoMdContact} from 'react-icons/io'
// import {RiMarkupLine} from 'react-icons/ri'

const Navigation = () => {
  const router = useRouter()
  const cls = `flex fixed top-0 left-0 w-screen h-[64px] justify-center gap-4 items-center capitalize shadow bg-white z-[999] ${
    router.asPath === '/about' && 'bg-transparent text-white shadow-none'
  }`
  return (
    <div className={cls}>
      {LinkItems.map((i, key) => (
        <div className="menu-item" key={key}>
          <Link href={i.href}>{i.name}</Link>
        </div>
      ))}
    </div>
  )
}

const LinkItems = [
  {name: 'home', href: '/'},
  {name: 'blog', href: '/blog'},
  {name: 'challenges', href: '/challenges'},
  {name: 'playground', href: '/playground'},
  {name: 'about', href: '/about'},
  {name: 'contact', href: '/contact'}
]

export default Navigation
