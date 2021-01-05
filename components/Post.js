import Link from "next/link";

export const Post = ({ post }) => {
	const { link, data } = post;
	return (
		<article className="py-8 border-b border-dashed hover:bg-blue-50 transition cursor-pointer">
			<h2 className="flex justify-between text-2xl mb-4">
				<Link href={`/posts${link}`}><a className="font-bold">{data.title}</a></Link>
				<span className="text-sm font-normal">{data.date}</span>
			</h2>
			<div className="flex justify-between">
				<p className="text-gray-500">{data.description}</p>
				<p className={`tag ${data.tags}`}>{data.tags}</p>
			</div>
		</article>
	);
};
