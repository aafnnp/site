import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { posts } from '../../getAllPosts';
import Link from "next/link";
import Image from "next/image";
import React from "react";

const List = dynamic(() => import('../../components/List'));
const Pagination = dynamic(() => import('../../components/Pagination'));

export default function IndexPage(props) {
  const {
    query: { page = 1 },
  } = useRouter();

  const { allposts } = props;

  return (
    <main className="p-4">
      <div className="content mx-auto">
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
        </header>
        <ul>
          {allposts[page - 1].map((post) => (
              <List post={post} key={post.link} />
          ))}
        </ul>

        <Pagination curPage={page} total={allposts.length} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const POSTS = posts();

  return {
    props: {
      allposts: POSTS,
    },
  };
}
