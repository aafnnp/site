import Link from "next/link";
import { tags } from "../getAllPosts";


export default function Header() {
	return (
		<nav className="w-1/5 pt-8">
			<h1 className="text-center text-4xl mb-4 font-bold font-serif"><Link href="/"><a>Manon.icu</a></Link></h1>
			<div className="nav-items mb-8 flex justify-center my-8 text-2xl">
				<Link href="https://twitter.com/ManonIcu">
					<a className="mr-2 block"><ion-icon name="logo-twitter" /></a>
				</Link>
				<Link href="https://github.com/Manonicu">
					<a className="mr-2 block"><ion-icon name="logo-github" /></a>
				</Link>
				<Link href="mailto:gemini0525@foxmail.com">
					<a className="block"><ion-icon name="mail-outline" /></a>
				</Link>
			</div>
			<div className="tags mb-8">
				{tags.map((item, key) => (
					<Link href={`/tag/${item}`} key={key}>
						<a className={`tag mr-4 ${item}`}>{item}</a>
					</Link>
				))}
			</div>
			<div className="navs">
				<Link href="/http-status">
					<a className="mr-2 flex mb-4 border-b border-dotted items-center leading-10"><span className="mr-2"><ion-icon name="globe-outline" /></span>HTTP状态码</a>
				</Link>
			</div>
		</nav>
	);
}
