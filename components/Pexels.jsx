import {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('components/Image'))

export default function Pexels(props) {
  const {tag} = props
  const [photo, setPhoto] = useState('')
  const [alt, setAlt] = useState(() => {
    return Array.isArray(tag)
      ? tag[Math.floor(Math.random(tag.length - 1))]
      : tag
  })
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=rqPMZ8Ur7rQa6x2P1oPOSziry4m5XXod9KWStukAAy4&query=${tag}`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const random = Math.floor(Math.random() * data.results.length)
        setPhoto(data?.results[random]?.urls?.full)
        setAlt(data?.results[random]?.description)
      })
  }, [tag])

  return (
    <div
      className="w-full h-[200px] bg-cover bg-center bg-no-repeat rounded"
      style={{backgroundImage: `url(${photo})`}}
    />
  )
}
