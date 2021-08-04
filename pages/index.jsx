import React from 'react';
import Link from 'next/link';

export default function Index() {
  return (
    <div className="home-page">
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/challenges">
          <a>Challenges</a>
        </Link>
        <Link href="/">
          <a>Portfolio</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact-me">
          <a>Contact me</a>
        </Link>
      </nav>
      <div className="title">
        <span>Manon.icu</span>
        <span>
          <Link href="/">
            <a>FullStack Developer</a>
          </Link>
        </span>
      </div>
    </div>
  );
}
