import {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('components/Image'))

export default function Pexels(props) {
  const {tag, cover} = props
  const [photo, setPhoto] = useState('')

  useEffect(() => {
    const fetchPhoto = async () => {
      if (cover) {
        setPhoto(cover)
        return false
      }
      const res = await fetch(
        `https://api.unsplash.com/search/photos?client_id=rqPMZ8Ur7rQa6x2P1oPOSziry4m5XXod9KWStukAAy4&query=${tag}`
      )
      const data = await res.json()
      const random = Math.floor(Math.random() * data.results.length)
      setPhoto(data?.results[random]?.urls?.full)
    }
    fetchPhoto().then(() => {})
  }, [cover, tag])

  return (
    <div
      className="w-full h-[200px] bg-cover bg-center bg-no-repeat rounded"
      style={{backgroundImage: `url(${photo})`}}
    />
  )
}
