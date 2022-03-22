import Link from 'next/link';
import React from 'react';
import { FaGithub, FaSitemap, FaTwitter } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('components/Image'));

export default function Sidebar() {
  return (
    <div className="relative flex flex-col flex-none w-[360px] justify-between bg-white px-8 py-4">
      <div className="site-header flex gap-2 items-center">
        <Image
          className="w-5 h-5"
          src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/terminal.svg"
          alt="Manon.icu"
          loading="lazy"
          width={20}
          height={20}
        />

        <h1>
          <Link href="/">
            <a>Manon.Icu</a>
          </Link>
        </h1>
      </div>
      <div className="flex flex-col gap-4 site-description">
        <Image
          className="w-1/2 h-1/2 rounded-full overflow-hidden mx-auto"
          src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/avatar.jpeg"
          alt="Manon.icu"
          loading="lazy"
          layout="fill"
          width={240}
          height={240}
        />
        <div className="text-sm text-gray-400">
          <h2 className="font-bold text-3xl text-black">Frontend Developer</h2>
          <p className="mb-8">Hi! My name is Manon,Based in China.</p>
          <p className="mb-8">
            My specialties are:
            <br />
            - SPA (Single Page Apps) with Vue React and Next.js.
            <br />- Backend solutions with Node.js .
          </p>
          <p>
            I will be happy to be part of your team or make a great product for
            you!
          </p>
        </div>
        <p className="flex gap-4 text-white text-sm">
          <Link href="/challenges">
            <a className="flex items-center justify-center rounded p-1.5 bg-twitter">
              Challenges
            </a>
          </Link>
          <Link href="/playground">
            <a className="flex items-center justify-center rounded p-1.5 bg-twitter">
              Playground
            </a>
          </Link>
        </p>
        <p className="skills-tag flex gap-2">
          {[
            'html',
            'javascript',
            'css',
            'vue',
            'react',
            'sass',
            'nodejs',
            'swift',
            'linux',
            'docker',
          ].map((item) => (
            <Image
              className="w-6 h-6"
              key={item}
              src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${item}.svg`}
              alt={item}
              loading="lazy"
              width={24}
              height={24}
            />
          ))}
        </p>
      </div>
      <div className="social flex gap-4">
        <Link href='https://twitter.com/Manonicu'><a target='_blank'><FaTwitter /></a></Link>
        <Link href='https://github.com/Manonicu'><a target='_blank'><FaGithub /></a></Link>
        <Link href='/'><a><FaSitemap /></a></Link>
      </div>
    </div>
  );
}
