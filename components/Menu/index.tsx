import dynamic from "next/dynamic";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const DarkModeSwitch = dynamic(() => import('components/DarkModeSwitch'), {
  ssr: false
})

const Navigation = () => {
  const {asPath} = useRouter()
  const pathArr = asPath.split('/')
  return (
    <div className={'relative flex gap-4 flex-col items-center px-6 pt-12 h-screen'}>
      <div
        className="flex gap-4 items-center mb-8 font-bold manon"
      >
        <div className={'relative w-10 h-10 rounded-full overflow-hidden'}>
          <Image
            fill
            alt={'Manon.icu'}
            src={`/avatar.webp`}
          />
        </div>
        <Link href={'/'}>Manon.icu</Link>
      </div>
      {LinkItems.map((i) => (
        <Link key={i.name} href={i.href} className={'capitalize'} style={{
          ...(pathArr[1] === i.name && {
            backgroundGradient: "linear(to-l, #7928CA, #FF0080)",
            backgroundClip: "text"
          })
        }}>
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
