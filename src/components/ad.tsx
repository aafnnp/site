'use client'
import React, {useEffect} from 'react'
import {usePathname} from 'next/navigation'

export default function Ad() {
  const pathName = usePathname()
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.log(error)
    }
  }, [pathName])

  return (
    <div className={'my-8'} key={pathName}>
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
