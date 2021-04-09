import Link from "next/link";
import Head from "next/head";
import {tags} from "../getAllPosts";

export default function Layout({children, pageTitle, description}) {
	return (
		<html lang="zh">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="Description" content={description} />
				<title>{pageTitle}</title>
			</Head>
			<main className="container mx-auto px-4 flex flex-col">
				<header className="py-6 text-4xl text-center">
					<h1>Manon.icu</h1>
				</header>
				<nav className="relative w-screen border-b">
					<ul className="container mx-auto px-4 flex py-2">
						{tags.map((item, key) => {
							const NAME = `${item.charAt(0).toUpperCase()}${item.slice(1)}`;
							return (
								<li>
									<Link href={`/tag/${item}`} key={key}>
										<a className="p-2 text-blue-400">{NAME}</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className="content">{children}</div>
			</main>
		</html>
	);
}
