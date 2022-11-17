import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Navigation = () => {
  const {asPath} = useRouter()
  const cls = `flex fixed top-0 left-0 w-screen h-[64px] justify-center gap-4 items-center shadow bg-white z-[999] ${
    asPath === '/about' && 'bg-transparent text-white shadow-none'
  }`
  return (
    <div className={cls}>
      {LinkItems.map((i, key) => (
        <Link
          href={i.href}
          className={`menu-item ${i.href === asPath && 'text-twitter'} `}
          key={key}
        >
          {i.name}
        </Link>
      ))}
    </div>
  )
}

const LinkItems = [
  {name: 'Home', href: '/'},
  {name: 'Blog', href: '/blog'},
  {name: 'Challenges', href: '/challenges'},
  {name: 'Playground', href: '/playground'},
  {name: 'About', href: '/about'},
  {name: 'Contact', href: '/contact'}
]

export default Navigation
