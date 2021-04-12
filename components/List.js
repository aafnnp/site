import Link from 'next/link';

const List = ({ post }) => {
	const {
		link,
		data: { date, title, tags },
	} = post;

	return (
		<li className="py-3 px-4">
			<span>{date}</span>
			<Link href={`/posts${link}`}>
				<a className="mr-2">{title}</a>
			</Link>
			<img
				alt={tags}
				src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tags}.svg`}
				className={`tag inline-block w-4 h-4 ${tags}`}
			/>
			{/*https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/*/}
		</li>
	);
};

export default List;
