import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Index() {
  return (
    <div className="home">
      <div className="home-main">
        <div className="info">
          <h1>Manon.icu</h1>
          <p>
            FullStack Developer.
            <br />
            Helping people turn their ideas into sites & apps that work.
            <br />
            Professional and Cost-Effective.
            <br />
            Always.
          </p>
          <nav>
            <Link href="/challenges">
              <a>Challenges</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Link href="/contact-me">
              <a>Contact me</a>
            </Link>
          </nav>
        </div>
        <div className="slogan">
          <Image
            src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/heroMan.png"
            width={600}
            height={479}
          />
        </div>
      </div>
    </div>
  );
}
