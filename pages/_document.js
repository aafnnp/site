import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
					<script
						defer
						src="https://static.cloudflareinsights.com/beacon.min.js"
						data-cf-beacon='{"token": "f47ddfde9a164f9fabe6d0143a7f26be"}'
					></script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
