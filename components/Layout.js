import Head from "next/head";
import Header from "./Header";

export default function Layout({children, pageTitle, description}) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="Description" content={description} />
				<title>{pageTitle}</title>
			</Head>
			<main className="flex min-h-screen px-10 py-4">
				<Header />
				<div className="content px-10 w-4/5">{children}</div>
			</main>
		</>
	);
}
