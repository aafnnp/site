import Link from "next/link"

const RandomPost = ({ data }) => {
    return <ul className="related-post">
        {
            data.map((item, key) => {
                return <li key={key}>
                    <Link href={`/posts${item.link}`}><a>{item.data.title}</a></Link>
                </li>
            }
            )
        }
    </ul>
}

export default RandomPost;