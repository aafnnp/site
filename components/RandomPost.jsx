import Link from 'next/link';
import React from 'react';

export default function RandomPost({ data }) {
  return (
    <>
      <h2 className="relative font-bold text-base mb-4">更多文章</h2>
      <ul>
        {data.map((item, key) => (
          <li key={key} className="list-disc list-inside">
            <Link href={`/blog/${item.slug}`}>
              <a className="text-gray-500 underline text-sm">
                {item.data.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
