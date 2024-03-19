import Link from 'next/link'

export default async function IndexPage() {
  return (
    <div className={'mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8'}>
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
