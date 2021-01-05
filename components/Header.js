import Link from "next/link";
import { tags } from "../getAllPosts";


export default function Header() {
	return (
		<nav className="w-1/5 pt-8">
			<h1 className="text-center text-4xl mb-4 font-bold font-serif"><Link href="/"><a>Manon.icu</a></Link></h1>
			<div className="nav-items mb-4 flex justify-center my-8 text-2xl">
				<Link href="/">
					<a className="mr-2 block mb-4"><ion-icon name="logo-twitter" /></a>
				</Link>
				<Link href="/">
					<a className="mr-2 block mb-4"><ion-icon name="logo-github" /></a>
				</Link>
				<Link href="/">
					<a className="block mb-4"><ion-icon name="mail-outline" /></a>
				</Link>
			</div>
			<div className="tags">
				{tags.map((item, key) => (
					<Link href={`/tag/${item}`} key={key}>
						<a className={`tag mr-4 ${item}`}>{item}</a>
					</Link>
				))}
			</div>
		</nav>
	);
}
