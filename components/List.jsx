import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function List({ post }) {
  const {
    slug,
    data: { date, title, tags },
  } = post;
  return (
    <li className="py-3 px-4">
      <span>{date}</span>

      <Link href={`/blog/${slug}`}>
        <a>{title}</a>
      </Link>

      {tags &&
        tags.map((tag) => (
          <Image
            alt={tag}
            className={`tag inline-block mr-2 w-4 h-4 ${tag}`}
            height={16}
            key={tag}
            src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`}
            width={16}
          />
        ))}
    </li>
  );
}

export default List;
