import dynamic from 'next/dynamic'
import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {Avatar} from '@chakra-ui/react'

const DarkModeSwitch = dynamic(() => import('components/DarkModeSwitch'), {
  ssr: false
})

const Navigation = () => {
  const {asPath} = useRouter()
  const pathArr = asPath.split('/')
  return (
    <div className={'flex flex-col gap-4 items-center px-6 pt-12'}>
      <div className={'flex gap-4 items-center mb-8 font-bold'}>
        <Avatar src={'/avatar.webp'} boxSize={10} />
        <Link href={'/'}>Manon.icu</Link>
      </div>
      {LinkItems.map((i) => (
        <Link
          key={i.name}
          href={i.href}
          className={pathArr[1] === i.name ? 'capitalize text-brand hover:text-brand':'capitalize hover:text-brand'}
        >
          {i.name}
        </Link>
      ))}
      <DarkModeSwitch />
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
