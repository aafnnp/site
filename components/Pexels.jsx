import { createApi } from 'unsplash-js';
import {useEffect, useState} from 'react'

export default function Pexels(props) {
  const {tag} = props
  const [photo, setPhoto] = useState('')
  const [alt, setAlt] = useState(tag)
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?client_id=rqPMZ8Ur7rQa6x2P1oPOSziry4m5XXod9KWStukAAy4&query=${tag}`).then(res=>{
      return res.json()
    }).then(data=>{
      console.log(data)
      setPhoto(data?.results[0]?.urls?.full)
      setAlt(data?.results[0]?.description)
    })
  }, [tag])

  return <img src={photo} alt={alt} className="w-screen h-auto mb-4" loading="lazy"/>
}
