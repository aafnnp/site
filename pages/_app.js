import "../styles/main.css";
import "../styles/markdown.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
	return (
		<Layout pageTitle="Blog" description="My Personal Blog">
			<Component {...pageProps} />
		</Layout>
	);
}
