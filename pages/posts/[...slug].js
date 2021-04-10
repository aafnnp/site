import {useRouter} from "next/router";
import {GetAllPosts, GetPostBySlug, GetRandomPost} from "../../getAllPosts";
import dynamic from "next/dynamic";
import Head from "next/head";
import RandomPost from "../../components/RandomPost";
import Comments from "../../components/Comments";

const Markdown = dynamic(
	() => {
		return import("../../components/Markdown");
	},
	{ssr: false}
);

export default function Post({post}) {
	const router = useRouter();
	const {data, content} = post;
	console.log("🚀 ~ file: [...slug].js ~ line 18 ~ Post ~ data", data);
	const {tags} = data;
	const randomPost = GetRandomPost(tags);
	if (!router.isFallback && !post) {
		return <div>fallback</div>;
	}
	return (
		<>
			<Head>
				<title>{data.title}</title>
			</Head>
			<h1 className="font-bold text-2xl pb-2">{data.title}</h1>
			<div className="post-info text-sm">
				<div className="flex items-center">
					<img src="/github.svg" className="rounded-full w-5 h-5 mr-2" />
					<span className="mr-2">Manon.icu</span>/ {data.date}({data.fromNow})
				</div>
			</div>
			<div className="markdown-body text-sm">
				<Markdown content={content} tag={tags} />
				<RandomPost data={randomPost} />
				<Comments />
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const AllPosts = await GetAllPosts();
	return {
		paths: AllPosts.map(posts => {
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
	const {data, content} = await GetPostBySlug(params.slug);
	return {
		props: {
			post: {
				data,
				content
			}
		}
	};
}
