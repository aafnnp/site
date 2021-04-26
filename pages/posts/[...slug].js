import {useRouter} from "next/router";
import ErrorPage from "next/error";
import {GetPostBySlug, posts, GetRandomPost} from "../../getAllPosts";
import dynamic from "next/dynamic";
import Head from "next/head";
// import {connectToDatabase} from "../../utils/db";
import PostPage from "../../components/PostPage";
import {mdxToString, stringToMdx} from "../../utils/mdx";

const Random = dynamic(() => {
	return import("../../components/RandomPost");
});

const Comments = dynamic(() => import("../../components/Comments"));

const Post = ({post, randomPost}) => {
	const router = useRouter();
	if (!router.isFallback && !post?.data) return <ErrorPage statusCode={404} />;

	const {data, content} = post;

	return (
		<>
			<Head>
				<title>{data.title}</title>
			</Head>
			<h1 className="font-bold text-2xl pb-2">{data.title}</h1>
			<div className="post-info text-sm flex justify-between">
				<div className="flex items-center">
					<img src="/github.svg" alt="manonicu" width="18" height="18" className="rounded-full mr-2" />
					<span className="mr-2">Manon.icu</span>/ {data.date}（{data.fromNow}）
				</div>
				{/* <span>{data.count} views</span> */}
			</div>
			<div className="markdown-body text-sm">
				<PostPage>{stringToMdx(content)}</PostPage>
				<Random data={randomPost} />
				<Comments />
			</div>
		</>
	);
};

export async function getStaticPaths() {
	const allposts = posts();
	return {
		paths: allposts.map(posts => {
			return {
				params: {
					slug: posts.link.substr(1).split("/")
				}
			};
		}),
		fallback: false
	};
}

export async function getStaticProps({params}) {
	const post = await GetPostBySlug(params.slug);
	const content = await mdxToString(post.content || "");
	// const {client, db} = await connectToDatabase();
	// const isConnected = await client.isConnected();
	// if (isConnected) {
	// 	let result;
	// 	result = await db.collection("Post").findOne({name: data.title});
	// 	await db.collection("Post").updateOne({name: data.title}, {$set: {count: result ? +result.count + 1 : 1}}, {upsert: true});
	// 	result = await db.collection("Post").findOne({name: data.title});
	// 	data.count = result ? result.count : 0;
	// }

	return {
		props: {
			post: {
				...post,
				content
			},
			randomPost: GetRandomPost(post.data.tags)
		}
	};
}

export default Post;
