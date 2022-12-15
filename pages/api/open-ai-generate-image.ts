import type { NextApiRequest, NextApiResponse } from "next";

const {Configuration, OpenAIApi} = require('openai')
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY
})
const openai = new OpenAIApi(configuration)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {prompt = 'JavaScript - The Battery Status API', size = 'medium'} =
    req.body

  const imageSize =
    size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024'
  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: imageSize
    })

    const imageUrl = response.data.data[0].url
    res.status(200).json({
      success: true,
      data: imageUrl
    })
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }

    res.status(400).json({
      success: false,
      error: 'The image could not be generated'
    })
  }
}
