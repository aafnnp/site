import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import {GetPostBySlug, GetRandomPost, posts} from "../../getAllPosts";

// Import {connectToDatabase} from "../../utils/db";

import {mdxToString, stringToMdx} from "../../utils/mdx";

const PostPage = dynamic(() => import("../../components/PostPage"));
const Comments = dynamic(() => import("../../components/Comments"));
const Random = dynamic(() => import("../../components/RandomPost"));

function Post({post, randomPost}) {
	const router = useRouter();

	if (!router.isFallback && !post) {
		return <ErrorPage statusCode={404} />;
	}
	const {data, content} = post;

	return (
		<>
			<Head>
				<title>{data.title}</title>
			</Head>

			<h1 className="font-bold text-2xl pb-2">{data.title}</h1>

			<div className="post-info mb-10 text-sm flex justify-between">
				<div className="flex items-center">
					<img alt="manonicu" className="rounded-full mr-2" height="18" src="/github.svg" width="18" />
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
}

export async function getStaticPaths() {
	const allposts = posts();
	const paths = allposts.flat(Infinity).map(post => ({
		params: {
			slug: post.link.substr(1).split("/")
		}
	}));

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({params}) {
	const post = await GetPostBySlug(params.slug);
	const content = await mdxToString(post.content || "");

	/*
	 * Const {client, db} = await connectToDatabase();
	 * Const isConnected = await client.isConnected();
	 * If (isConnected) {
	 * Let result;
	 * Result = await db.collection("Post").findOne({name: data.title});
	 * Await db.collection("Post").updateOne({name: data.title}, {$set: {count: result ? +result.count + 1 : 1}}, {upsert: true});
	 * Result = await db.collection("Post").findOne({name: data.title});
	 * Data.count = result ? result.count : 0;
	 * }
	 */

	return {
		props: {
			post: {
				...post,
				content
			},
			randomPost: GetRandomPost()
		}
	};
}

export default Post;
