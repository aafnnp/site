import {HeadPost} from "./HeadPost";
import dynamic from "next/dynamic";

const Comments=dynamic(()=>{
	return import("./Comments");
}, { ssr: false })

export default function BlogPost({ children, meta }) {
	console.log(meta)
	return (
		<>
			<HeadPost meta={meta} isBlogPost />
			<article className="blogpost">{children}</article>
			<Comments data={ meta }/>
		</>
	);
}
