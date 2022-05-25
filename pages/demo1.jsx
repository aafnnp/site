import {useRouter} from 'next/router'
import {useEffect} from 'react'

export default function Demo1() {
  const router = useRouter()
  useEffect(() => {
    window.addEventListener('popstate', handleAndroidBackButton)
    return () => {
      window.removeEventListener('popstate', handleAndroidBackButton)
    }
  }, [])
  function handleAndroidBackButton() {
    history.pushState(null, null, location.href)
    router.push('https://www.google.com')
  }

  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is the content of the page</p>
    </div>
  )
}
