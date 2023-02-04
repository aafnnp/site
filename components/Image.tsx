import React, {useEffect, useState} from 'react'
import {Image} from '@chakra-ui/react'

const {Configuration, OpenAIApi} = require('openai')
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY
})
const openai = new OpenAIApi(configuration)

export default function CoverImage({ title,tag }) {
  const [img, setImg] = useState(null)
  useEffect(() => {
    ;(async () => {
      if (tag) {
        const {data} = await openai.createImage({
          prompt: tag,
          n: 1,
          size: '1024x1024'
        })
        setImg(data.data[0].url)
      }
    })()
  }, [tag])

  return img ? (
    <Image
      src={img}
      htmlWidth={900}
      htmlHeight={300}
      loading="lazy"
      alt={title}
      objectFit={'cover'}
    />
  ) : null
}
