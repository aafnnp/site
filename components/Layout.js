import Link from "next/link";
import Head from "next/head";
import "../styles/header.module.css";

export default function Layout({children, pageTitle, description}) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="Description" content={description} />
				<title>{pageTitle}</title>
			</Head>

			<main className="p-3">
				<header className="header flex justify-between items-center text-base">
					<Link href="/">
						<a className="flex items-center text-lg font-bold">
							<img src="/terminal.svg" className="mr-2 w-5 h-5" />
							Manon.Icu
						</a>
					</Link>
					<nav className="text-xs">
						<Link href="https://github.com/Manonicu/site">
							<a className="py-2 px-3">Source</a>
						</Link>
						<Link href="https://github.com/Manonicu">
							<a className="py-2 px-3 bg-black text-white">Follow Me</a>
						</Link>
					</nav>
				</header>
				<div className="content py-5 mx-auto">{children}</div>
			</main>
		</>
	);
}
