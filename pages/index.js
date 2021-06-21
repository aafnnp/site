import {useRouter} from "next/router";
import {posts} from "../getAllPosts";
import dynamic from "next/dynamic";

const List = dynamic(() => import("../components/List"));
const Pagination = dynamic(() => import("../components/Pagination"));

export default function IndexPage(props) {
	const {
		query: {page = 1}
	} = useRouter();

	const {allposts} = props;

	return (
		<>
			<ul>
				{allposts[page - 1].map(post => (
					<List post={post} key={post.link} />
				))}
			</ul>

			<Pagination curPage={page} total={allposts.length} />
		</>
	);
}

export async function getStaticProps() {
	const POSTS = posts();

	return {
		props: {
			allposts: POSTS
		}
	};
}
