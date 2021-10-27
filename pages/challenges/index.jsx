import { getAllChallenges } from 'api/getAllChallenges';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export default function IndexPage(props) {
  const { allChallenges } = props;
  return (
    <Wrapper>
      <div className="challenges p-4">
        <h1 className="text-5xl text-center my-10">Challenges</h1>
        <ul className="grid grid-cols-3 gap-4">
          {allChallenges.map((challenge) => {
            return (
              <li key={challenge.link} className="flex bg-gray-100 rounded-md">
                <Image
                  className="flex-none rounded-l-md"
                  src={`/screenshots/${challenge.title}.png`}
                  alt={challenge.title}
                  width={192}
                  height={108}
                />
                <div className="p-4 space-y-4 flex-1 flex flex-col justify-between">
                  <h3 className="flex item-center justify-between text-sm font-semibold">
                    {challenge.title}
                    <Image
                      alt={challenge.group}
                      className={`tag inline-block mr-2 w-4 h-4 ${challenge.group}`}
                      height={20}
                      src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${challenge.group}.svg`}
                      width={20}
                    />
                  </h3>
                  <div className="flex gap-4 font-medium text-xs">
                    <Link href={challenge.link}>
                      <a className="transition duration-300 ease-linear px-3 py-1.5 rounded-md bg-white hover:bg-black text-black hover:text-white">
                        Link
                      </a>
                    </Link>
                    <Link
                      href={`https://github.com/Manonicu/site/tree/master/pages/challenges/${challenge.group}/${challenge.title}.jsx`}
                    >
                      <a className="transition duration-300 ease-linear px-3 py-1.5 rounded-md bg-black text-white hover:bg-white hover:text-black">
                        Source
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const allChallenges = await getAllChallenges();
  return {
    props: {
      allChallenges,
    },
  };
}

const Wrapper = styled.div`
  .challenges {
    position: absolute;
    left: 0;
    top: 4rem;
    width: 100vw;
  }
`;
