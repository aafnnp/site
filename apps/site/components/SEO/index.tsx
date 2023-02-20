import { NextSeo } from "next-seo";

export default function SEO(props) {
  const {url, cover, description, title} = props
  return (
    <NextSeo
      titleTemplate="%s - Manon.icu"
      openGraph={{
        type: 'website',
        url,
        description:
          description ??
          'The personal website for Manon, Frontend Web Developer.',
        site_name: title ?? 'Manon | manon.icu',
        images: [
          {
            url: cover ?? 'https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/9oh25b.jpg',
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
