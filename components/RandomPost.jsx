import React from 'react';
import Link from 'next/link';

function RandomPost({ data }) {
  return (
    <>
      <h2 className="font-medium text-xl mt-8">更多文章</h2>
      <ul className="related-post">
        {data.map((item, key) => (
          <li key={key}>
            <Link href={`/blog${item.link}`}>
              <a>{item.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RandomPost;
