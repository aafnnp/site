import { getAllPosts } from 'api';
import Layout from 'components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ImgLoader } from 'utils/customLoader';

export default function IndexPage(props) {
  const [curPage, setCurPage] = React.useState(1);
  const postList = props.posts[curPage - 1];

  return (
    <Layout>
      {postList.map((item) => {
        const { slug, data } = item;
        return (
          <div
            className="grid grid-cols-[30%_auto] gap-4 py-2 xs:grid-cols-1 sm:grid-cols-[25%_auto] md:grid-cols-[30%_auto]"
            key={item.slug}
          >
            <div className="text-gray-500 text-right xs:hidden sm:block">
              {data.date}
            </div>
            <div className="flex gap-2 items-center">
              <Link href={`/blog/${slug}`}>
                <a>{data.title}</a>
              </Link>
              {data.tags?.map((tag) => (
                <Image
                  loader={ImgLoader}
                  width={16}
                  height={16}
                  alt={tag}
                  layout="fixed"
                  key={tag}
                  src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`}
                />
              ))}
            </div>
          </div>
        );
      })}
      <div className="pagination">
        {Array(props.posts.length)
          .fill(0)
          .map((_, index) => (
            <span
              className={curPage === index + 1 ? 'active' : ''}
              key={index}
              onClick={() => setCurPage(index + 1)}
            >
              {index + 1}
            </span>
          ))}
      </div>
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
