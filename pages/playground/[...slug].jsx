import dynamic from 'next/dynamic'
import React from 'react'

export default function Playground (props) {
  const CustomComponent = dynamic(() =>
    import(`_playground/${props.slug.join('/')}`)
  )

  return <CustomComponent />
}

export const getStaticPaths = async () => {
  const {globFiles} = await import('api/globFiles')
  const paths = await globFiles('_playground')
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      slug: params.slug
    }
  }
}