import Link from 'next/link';

const List = ({ post }) => {
	const {
		link,
		data: { date, title, tags },
	} = post;
	console.log('🚀 ~ file: List.js ~ line 8 ~ List ~ tags', tags);
	return (
		<li className="py-3 px-4">
			<span>{date}</span>
			<Link href={`/posts${link}`}>
				<a className="mr-2">{title}</a>
			</Link>
			<img
				alt={tags}
				src={`/${tags}.svg`}
				width="16"
				height="16"
				className={`tag inline-block ${tags}`}
			/>
		</li>
	);
};

export default List;
