import { useRouter } from 'next/router';
import { GetAllPosts, GetPostBySlug, GetRandomPost } from '../../getAllPosts';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Markdown = dynamic(
	() => {
		return import('../../components/Markdown');
	},
	{ ssr: false },
);

const Random = dynamic(() => {
	return import('../../components/RandomPost');
});

const Comments = dynamic(() => {
	return import('../../components/Comments');
});

export default function Post({ post }) {
	const router = useRouter();
	const { data, content } = post;
	const { tags } = data;
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
					<img
						src="/github.svg"
						alt="manonicu"
						width="18"
						height="18"
						className="rounded-full mr-2"
					/>
					<span className="mr-2">Manon.icu</span>/ {data.date}（{data.fromNow}）
				</div>
			</div>
			<div className="markdown-body text-sm">
				<Markdown content={content} tag={tags} />
				<Random data={randomPost} />
				<Comments />
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const AllPosts = await GetAllPosts();
	return {
		paths: AllPosts.map((posts) => {
			return {
				params: {
					slug: posts.link.substr(1).split('/'),
				},
			};
		}),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { data, content } = await GetPostBySlug(params.slug);
	return {
		props: {
			post: {
				data,
				content,
			},
		},
	};
}
