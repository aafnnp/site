import { Pagination } from '@nextui-org/react';
import { getAllPosts } from 'api/getAllPosts';
import Layout from 'components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function IndexPage(props) {
  const [curPage, setCurPage] = React.useState(1);
  const postList = props.posts[curPage - 1];

  return (
    <Layout>
      {postList.map((item) => {
        const { slug, data } = item;
        return (
          <div className="post-item" key={item.slug}>
            <div className="post-date">{data.date}</div>
            <div className="post-link">
              <Link href={`/blog/${slug}`}>{data.title}</Link>
              {data.tags?.map((tag) => (
                <Image
                  alt={tag}
                  className={`tag ${tag}`}
                  height={16}
                  key={tag}
                  src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`}
                  width={16}
                />
              ))}
            </div>
          </div>
        );
      })}
      <div className="flex justify-center items-center py-10">
        <Pagination
          total={props.posts.length}
          initialPage={curPage}
          onChange={(page) => setCurPage(page)}
        />
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
