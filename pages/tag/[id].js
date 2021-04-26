import {useRouter} from "next/router";
import {GetPostBySlug} from "../../getAllPosts";
import List from "../../components/List";

export default function Tag() {
	const router = useRouter();
	const {id} = router.query;
	const AllPosts = GetPostBySlug(id);
	return (
		<>
			{AllPosts.map((item, key) => (
				<List post={item} key={key} />
			))}
		</>
	);
}
