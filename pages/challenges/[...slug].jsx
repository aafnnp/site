import { getAllChallenges } from 'api/getAllChallenges';
import dynamic from 'next/dynamic';
import React from 'react';

export default function Playground(props) {
  const CustomComponent = dynamic(() =>
    import(`_challenges/${props.slug.join('/')}`)
  );

  return <CustomComponent />;
}

export async function getStaticPaths() {
  const paths = await getAllChallenges();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(
    '🚀 ~ file: [...slug].jsx ~ line 91 ~ getStaticProps ~ params',
    params
  );
  return {
    props: {
      slug: params.slug,
    },
  };
}
