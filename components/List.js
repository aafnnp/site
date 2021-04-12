import Link from 'next/link';

const List = ({ post }) => {
	const {
		link,
		data: { date, title, tags },
	} = post;

	const Tags = () => {
		const Tag = ({ tag }) => (
			<img
				alt={tag}
				src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`}
				className={`tag inline-block mr-2 w-4 h-4 ${tag}`}
			/>
		);
		return Array.isArray(tags) ? (
			tags.map((item) => <Tag tag={item} key={item} />)
		) : (
			<Tag tag={tags} />
		);
	};

	return (
		<li className="py-3 px-4">
			<span>{date}</span>
			<Link href={`/posts${link}`}>
				<a>{title}</a>
			</Link>
			<Tags />
		</li>
	);
};

export default List;
