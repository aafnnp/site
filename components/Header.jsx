import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header () {
  return <>
    <header className="header flex justify-between items-center text-base mb-5">
      <Link href="/">
        <a className="flex items-center text-lg font-bold">
          <Image
              alt="logo"
              className="mr-2 w-5 h-5"
              height={20}
              src="/terminal.svg"
              width={20}
          />
          Manon.Icu
        </a>
      </Link>

      <nav className="text-xs">
        <Link href="https://github.com/Manonicu/site">
          <a className="py-2 px-3">Source</a>
        </Link>

        <Link href="https://github.com/Manonicu">
          <a className="py-2 px-3 bg-black text-white">Follow Me</a>
        </Link>
      </nav>
    </header></>
}