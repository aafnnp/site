import Link from 'next/link'

export default function RandomPost({randomPost}) {
  return (
    <div className={'random-post'}>
      <h2 className={'text-base mb-4'}>更多文章</h2>
      <ul>
        {randomPost.map((item) => (
          <li key={item.title}>
            <Link
              href={`/blog/${item.slug}`}
              className={'flex items-center gap-2'}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
