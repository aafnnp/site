import {useRouter} from 'next/router'

export default function Demo() {
  const router = useRouter()
  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is the content of the page</p>
      <button onClick={() => router.push('/demo1')}>demo1</button>
    </div>
  )
}
