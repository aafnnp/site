import {NextApiRequest, NextApiResponse} from 'next'

export const config = {
  runtime: 'edge'
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {city} = req.query
  const url = `${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}?city=${city}`
  const response = await fetch(url)
  const data = await response.json()
  res.status(response.status).json(data)
}

export default handler
