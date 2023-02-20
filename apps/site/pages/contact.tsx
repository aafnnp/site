import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className={'relative px-6 pb-20 pt-12'}>
      <h1 className={'text-3xl'}>Feedback</h1>
      <p className={'mb-4'}>
        You can send me feedback, suggestions and questions by emailing me at{' '}
        <Link href="mailto:gemini0525@foxmail.com">gemini0525@foxmail.com</Link>
      </p>
      <p className={'mb-4'}>
        Alternatively, you can send me a message on{' '}
        <Link href="https://twitter.com/Manonicu">Twitter</Link>
      </p>
      <p>
        If you spot outdated information in any of my articles, send me a link
        and I will make sure to update the article ASAP.
      </p>
    </div>
  )
}
