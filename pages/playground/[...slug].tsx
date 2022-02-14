import { globFiles } from 'api'
import dynamic from 'next/dynamic'
import React from 'react'
import { ParsedUrlQuery } from 'querystring'
import { GetStaticProps } from 'next'

interface PageProps{
  slug:string[]
}

interface StaticPathParams extends ParsedUrlQuery {
  slug:string
}

export default function Playground (props:PageProps) {
  const CustomComponent = dynamic(() =>
    import(`_playground/${props.slug.join('/')}`)
  )

  return <CustomComponent />
}

export async function getStaticPaths () {
  const paths = await globFiles('_playground')
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps:GetStaticProps<StaticPathParams> = async (context) => {
  const params = context.params as StaticPathParams
  return {
    props: {
      slug: params.slug
    }
  }
}
