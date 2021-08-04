import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function List({ post }) {
  const {
    link,
    data: { date, title, tags },
  } = post;

  return (
    <li className="py-3 px-4">
      <span>{date}</span>

      <Link href={`/blog${link}`}>
        <a>{title}</a>
      </Link>

      {tags.map((tag) => (
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
