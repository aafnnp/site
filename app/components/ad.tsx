import React, {useEffect} from 'react'
import {useLocation} from '@remix-run/react'

// 声明全局window对象的adsbygoogle属性
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function Ad() {
  const location = useLocation()
  const pathName = location.pathname
  // 当路径改变时重新初始化广告
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.log('AdSense error:', error)
      }
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
