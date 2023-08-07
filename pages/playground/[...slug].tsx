import dynamic from 'next/dynamic'

export default function Playground(props) {
  const CustomComponent = dynamic(
    () => import(`_playground/${props.slug.join('/')}`),
    {ssr: false}
  )

  return (
    <div className={'prose mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8'}>
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
