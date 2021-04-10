import {GetAllPosts} from "../getAllPosts";
import List from "../components/List";

const IndexPage = props => {
	const {AllPosts} = props;
	return (
		<ul>
			{AllPosts.map((item, key) => (
				<List post={item} key={key} />
			))}
		</ul>
	);
};

export default IndexPage;

export const getStaticProps = async () => {
	const AllPosts = await GetAllPosts();
	return {
		props: {
			AllPosts
		}
	};
};
