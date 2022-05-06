import {createClient} from 'pexels'
import {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('components/Image'))
const BackImg =
  'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

export default function Pexels(props) {
  const {tag} = props
  const [photo, setPhoto] = useState(BackImg)
  const [alt, setAlt] = useState(tag)
  useEffect(() => {
    const client = createClient(process.env.NEXT_PUBLIC_PEXELS_KEY)
    client.photos.search({query: tag, per_page: 80}).then((res) => {
      if (res.photos.length) {
        const random = Math.floor(Math.random() * res.photos.length)
        setPhoto(res.photos[random].src.large2x)
        setAlt(res.photos[random].alt)
      }
    })
  }, [tag])

  return <Image src={photo} alt={alt} width={900} height={350} />
}
