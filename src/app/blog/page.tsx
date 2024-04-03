import globFiles from '@/utils/globFiles'
import Link from 'next/link'

async function getData() {
  const data = globFiles(process.cwd() + '/src/content')
  // 抽离年份并返回数组
  const years = data
    .reduce((acc, file) => {
      let year = file.data.date.split('-')[0]
      if (!acc.includes(year)) {
        acc.push(year)
      }
      return acc
    }, [])
    .sort()
  return { data, years }
}

export default async function Page() {
  const { data, years } = await getData()

  return (
    <div className={'mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8'}>
      <h1 className="mb-12 text-2xl">Articles, guides, and cheatsheets</h1>
      <ul className="mb-12 columns-2 gap-x-2 text-sm text-gray-700 sm:columns-4">
        {years.map((year: string) => {
          return (
            <li key={year} className="mb-3 pr-4 font-bold cursor-pointer hover:text-gray-900">
              {year}
            </li>
          )
        })}
      </ul>
      <ol className="grid gap-x-8">
        {data.map(({ data, slug }) => {
          return (
            <article key={slug}>
              <Link href={slug} className="group -ml-4 flex overflow-hidden rounded-lg hover:bg-gray-100">
                <div className="flex flex-col gap-2 px-4 py-4">
                  <div className="text-xs font-bold uppercase tracking-wide text-gray-500">{data?.date}</div>
                  <h2 className="text-xl font-bold text-gray-800" style={{ wordBreak: 'break-word' }}>
                    {data.title}
                  </h2>
                </div>
              </Link>
            </article>
          )
        })}
      </ol>
    </div>
  )
}
