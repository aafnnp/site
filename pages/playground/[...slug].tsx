import dynamic from 'next/dynamic'
import React from 'react'

export default function Playground(props) {
  const CustomComponent = dynamic(() =>
    import(`_playground/${props.slug.join('/')}`),
    {ssr:false}
  )

  return (
    <div className="mx-auto w-2/3 py-32">
      <CustomComponent />
    </div>
  )
}

export const getStaticPaths = async () => {
  const {globFiles} = await import('utils/globFiles')
  const paths = await globFiles('_playground')
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  return {
    props: {
      slug: params.slug
    }
  }
}
