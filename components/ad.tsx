import React, {useEffect} from 'react'
import {useRouter} from 'next/router'

export default function Ad() {
  const {asPath} = useRouter()
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.log(error)
    }
  }, [asPath])

  return (
    <div className={'my-8'} key={asPath}>
      <ins
        className="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client="ca-pub-3854566314387093"
        data-ad-slot="9901453595"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
