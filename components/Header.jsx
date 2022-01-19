import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';

export default function Header() {
  const router = useRouter();
  return (
    <div
      className="flex relative justify-between items-center mb-4 z-50"
      style={{ color: router.route.startsWith('/about') ? 'white' : '' }}
    >
      <div className="flex items-center py-4">
        <Image
          alt="Manon.icu"
          src="/terminal.svg"
          width={20}
          height={20}
          layout="fixed"
        />
        <Link href="/">
          <a className="ml-4">Manon.Icu</a>
        </Link>
      </div>
      <div className="flex items-center py-4">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="https://twitter.com/Manonicu">
          <a className="flex items-center justify-center rounded p-1.5 text-sm bg-sky-500 text-white ml-4">
            <FaTwitter className="mr-2" />
            Follow Me
          </a>
        </Link>
      </div>
    </div>
  );
}
