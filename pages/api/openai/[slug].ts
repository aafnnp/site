//@ts-nocheck
import type {NextApiRequest, NextApiResponse} from 'next'

const {Configuration, OpenAIApi} = require('openai')
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY
})
const openai = new OpenAIApi(configuration)

const createImage = async ({
  prompt = 'JavaScript - The Battery Status API',
  size = 'medium'
}) => {
  const imageSize =
    size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024'
  const response = await openai.createImage({
    prompt,
    n: 1,
    size: imageSize
  })

  return response.data.data[0].url
}

const createText = async ({
  prompt = 'JavaScript - The Battery Status API',
  model = 'text-davinci-003'
}) => {
  const response = await openai.createCompletion({
    model,
    prompt,
    temperature: 0,
    max_tokens: 100
  })

  return response.data.choices[0].text
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req)
  try {
    const {
      prompt = 'JavaScript - The Battery Status API',
      size = 'medium',
      model,
      slug
    } = req.query
    let data
    if (slug==='text') {
      data = await createText({prompt, model})
    } else {
      data = await createImage({prompt, size})
    }

    return res.status(200).json({success: true, data})
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
