import { globFiles } from 'api/globFiles';
import dynamic from 'next/dynamic';
import React from 'react';

export default function Playground(props) {
  const CustomComponent = dynamic(() => import(`_playground/${props.slug.join('/')}`));

  return <CustomComponent />;
}

export async function getStaticPaths() {
  const paths = await globFiles('_playground');
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => ({
  props: {
    slug: params.slug,
  },
});
