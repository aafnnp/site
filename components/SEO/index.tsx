import {NextSeo} from 'next-seo'

export default function SEO(props) {
  const {url} = props
  return (
    <NextSeo
      titleTemplate="%s - Manon.icu"
      openGraph={{
        type: 'website',
        url,
        description: 'The personal website for Manon, Frontend Web Developer.',
        site_name: 'Manon | manon.icu',
        images: [
          {
            url: 'https://pics-rust.vercel.app/uPic/9oh25b.jpg',
            width: 900,
            height: 900
          }
        ]
      }}
      canonical={url}
      twitter={{
        handle: '@Manonicu',
        cardType: 'summary_large_image'
      }}
    />
  )
}
