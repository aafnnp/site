import "../styles/main.scss";
import "../styles/markdown.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout description="My Personal Blog" pageTitle="Blog">
      <Component {...pageProps} />
    </Layout>
  );
}
