import Link from "next/link";

const List = ({post}) => {
	const {
		link,
		data: {date, title}
	} = post;
	return (
		<li className="py-3 px-4">
			<span>{date}</span>
			<Link href={`/posts${link}`}>
				<a>{title}</a>
			</Link>
		</li>
	);
};

export default List;
