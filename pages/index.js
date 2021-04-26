import {posts} from "../getAllPosts";
import List from "../components/List";

export default function IndexPage(props) {
	const {allposts} = props;
	return (
		<ul>
			{allposts.map(post => {
				return <List post={post} key={post.link} />;
			})}
		</ul>
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
