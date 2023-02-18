import dynamic from 'next/dynamic'
import React from 'react'
import {Container} from '@chakra-ui/react'

export default function Playground(props) {
  const CustomComponent = dynamic(
    () => import(`_playground/${props.slug.join('/')}`),
    {ssr: false}
  )

  return (
    <Container maxW={['768px', '1200px', '1200px', '1400px']} py={32}>
      <CustomComponent />
    </Container>
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
