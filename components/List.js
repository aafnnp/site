import Link from "next/link";

const List = ({post}) => {
	const {
		link,
		data: {date, title, tags}
	} = post;

	return (
		<li className="py-3 px-4">
			<span>{date}</span>
			<Link href={`/posts${link}`}>
				<a>{title}</a>
			</Link>
			{tags.map(tag => (
				<img
					alt={tag}
					key={tag}
					src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`}
					width={16}
					height={16}
					className={`tag inline-block mr-2 w-4 h-4 ${tag}`}
				/>
			))}
		</li>
	);
};

export default List;
