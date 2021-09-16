import Image from 'next/image';
import Link from 'next/link';

function List({ post }) {
  const {
    slug,
    data: { date, title, tags },
  } = post;
  return (
    <div className="post-item">
      <div className="post-date">{date}</div>
      <div className="post-link">
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
        {tags &&
          tags.map((tag) => (
            <Image
              alt={tag}
              className={`tag ${tag}`}
              height={16}
              key={tag}
              src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`}
              width={16}
            />
          ))}
      </div>
    </div>
  );
}

export default List;
