import { useRouter } from "next/router"
import { GetPostByTag } from "../../getAllPosts"
import List  from "../../components/List"

export default function Tag() {
    const router = useRouter();
    const { id } = router.query;
    const AllPosts = GetPostByTag(id)
    return (
        <>
            {
                AllPosts.map((item, key) => (
                    <List post={item} key={key} />
                ))
            }
        </>
    );
}