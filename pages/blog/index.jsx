import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import { posts } from '../../getallPosts';

const List = dynamic(() => import('../../components/List'));
const Pagination = dynamic(() => import('../../components/Pagination'));
const Header = dynamic(() => import('../../components/Header'));

export default function IndexPage(props) {
  const {
    query: { page = 1 },
  } = useRouter();

  const { allPosts } = props;

  return (
    <main className="p-4">
      <div className="content mx-auto">
        <Header />
        <ul>
          {allPosts[page - 1].map((post) => (
            <List post={post} key={post.link} />
          ))}
        </ul>

        <Pagination curPage={page} total={allPosts.length} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const POSTS = posts();

  return {
    props: {
      allPosts: POSTS,
    },
  };
}
