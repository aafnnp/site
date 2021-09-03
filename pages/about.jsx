import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Index() {
  return (
    <div className="about flex items-center justify-center w-screen h-screen">
      <div className="max-w-2xl flex items-center justify-center flex-col">
        <Image
          size="2xl"
          alt="Manon.icu"
          width={200}
          height={200}
          className="rounded-full"
          src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/KDdimu.jpg"
        />

        <hgroup className="my-8 text-4xl leading-relaxed">
          <h1>Manon.icu</h1>
          <h2 className="text-sm text-gray-400">FullStack Developer.</h2>
        </hgroup>
        <div className="description">
          Helping people turn their ideas into sites & apps that work.
          <br />
          Professional and Cost-Effective. <br />
          <span>Always.</span>
        </div>

        <nav className="mt-8">
          <Link href="/challenges">
            <a>Challenges</a>
          </Link>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
