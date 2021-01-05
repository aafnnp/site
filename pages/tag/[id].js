import { useRouter } from "next/router"
import { GetPostByTag } from "../../getAllPosts"
import { Post } from "../../components/Post"

export default function Tag() {
    const router = useRouter();
    const { id } = router.query;
    const AllPosts = GetPostByTag(id)
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