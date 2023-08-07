import dynamic from 'next/dynamic'

export default function Playground(props) {
  const CustomComponent = dynamic(
    () => import(`_challenges/${props.slug.join('/')}`),
    {ssr: false}
  )

  return <CustomComponent />
}

export const getStaticPaths = async () => {
  const {globFiles} = await import('utils/globFiles')
  const paths = await globFiles('_challenges')
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
