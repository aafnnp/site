import { getAllPosts } from '@api/getAllPosts';
import Layout from '@components/Layout';
import dynamic from 'next/dynamic';
const List = dynamic(() => import('components/List'));
const Pagination = dynamic(() => import('components/Pagination'));

export default function IndexPage(props) {
  const { posts } = props;
  const postList = posts.flat(2);
  return (
    <Layout>
      {postList.map((post) => (
        <List post={post} key={post.slug} />
      ))}
    </Layout>
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
