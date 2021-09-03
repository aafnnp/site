import { getAllPosts } from '@api/getAllPosts';
import dynamic from 'next/dynamic';
import React from 'react';

const List = dynamic(() => import('components/List'));
const Pagination = dynamic(() => import('components/Pagination'));
const Header = dynamic(() => import('components/Header'));

export default function IndexPage(props) {
  // const {
  //   query: { page = 1 },
  // } = useRouter();

  const { posts } = props;
  const postList = posts.flat(2);
  return (
    <main className="p-4">
      <div className="content mx-auto">
        <Header />
        <ul>
          {postList.map((post) => (
            <List post={post} key={post.slug} />
          ))}
        </ul>

        {/* <Pagination curPage={page} total={allPosts.length} /> */}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
