import Link from "next/link";

const RandomPost = ({data}) => {
	return (
		<>
			<h4>更多文章</h4>
			<ul className="related-post">
				{data.map((item, key) => {
					return (
						<li key={key}>
							<Link href={`/posts${item.link}`}>
								<a>{item.data.title}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default RandomPost;
