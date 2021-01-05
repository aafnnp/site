import Link from "next/link";
import { GetAllPosts } from "../getAllPosts";
import {Post} from "../components/Post"

const IndexPage = (props) => {
	const { AllPosts } = props
	return (
		<>
			{
				AllPosts.map((item, key) => (
					<Post post={item} key={key} />
				))
			}
		</>
	);
}

export default IndexPage;

export const getStaticProps = async () => {
	const AllPosts = await GetAllPosts()
	return {
		props: {
			AllPosts
		}
	}
}