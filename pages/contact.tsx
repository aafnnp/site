import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="relative grid grid-cols-5 pt-40 p-20 w-screen h-screen">
      <div className="col-span-3 text-base">
        <h1 className="text-3xl font-bold">Feedback</h1>
        <p className="mb-4  text-slate-600">
          You can send me feedback, suggestions and questions by emailing me at{' '}
          <Link href="mailto:gemini0525@foxmail.com" className="text-twitter">
            gemini0525@foxmail.com
          </Link>
        </p>
        <p className="mb-4  text-slate-600">
          Alternatively, you can send me a message on{' '}
          <Link href="https://twitter.com/Manonicu" className="text-twitter">
            Twitter
          </Link>
        </p>
        <p className="text-slate-600">
          If you spot outdated information in any of my articles, send me a link
          and I will make sure to update the article ASAP.
        </p>
      </div>
      <div className="col-span-2"></div>
    </div>
  )
}
