import React from 'react';
import { challenges } from '../../getAllChallenges';
import Image from 'next/image';
import Link from 'next/link';

export default function IndexPage(props) {
  const { allChallenges } = props;
  return (
    <div className="challenges p-4">
      <h1 className="text-5xl text-center my-10">Challenges</h1>
      <div className="list">
        <div className="item ml-4 grid grid-cols-3 gap-4">
          {allChallenges.map((item) => {
            return (
              <div className="flex items-center h-10" key={item.link}>
                <Link href={item.link}>
                  <a className="cursor-pointer mr-2 underline">
                    {item.title[0]}
                  </a>
                </Link>
                {item.group.map((tag) => (
                  <Image
                    alt={tag}
                    className={`tag inline-block mr-2 w-4 h-4 ${tag}`}
                    height={20}
                    key={tag}
                    src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`}
                    width={20}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allChallenges = await challenges();
  return {
    props: {
      allChallenges,
    },
  };
}
