import { useRouter } from 'next/router'
import { GetAllPosts, GetPostBySlug, GetRandomPost } from "../../getAllPosts"
import dynamic from "next/dynamic";
import Head from "next/head"
import RandomPost from "../../components/RandomPost"

const Markdown = dynamic(() => {
    return import("../../components/Markdown");
}, { ssr: false })

export default function Post({ post }) {
    const router = useRouter();
    const { data, content } = post;
    const { tags } = data;
    const randomPost = GetRandomPost(tags)
    if (!router.isFallback && !post) {
        return <div>fallback</div>
    }
    return <>
        <Head>
            <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/atom-one-dark-reasonable.min.css"
            />
        </Head>
        <h2 className="text-3xl mb-8 py-4 font-bold border-b border-dashed">{data.title}</h2>
        <div className="markdown-body">
            <Markdown content={content} tag={tags} />
            <RandomPost data={randomPost} />
        </div>
    </>
}

export async function getStaticPaths() {
    const AllPosts = await GetAllPosts();
    return {
        paths: AllPosts.map(posts => {
            return {
                params: {
                    slug: posts.link.substr(1).split("/")
                }
            }
        }),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const { data, content } = await GetPostBySlug(params.slug)
    return {
        props: {
            post: {
                data,
                content
            }
        }
    }
}
