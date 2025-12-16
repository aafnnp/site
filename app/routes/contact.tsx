import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Ad from "../components/ad";
import { SITE_URL, SITE_NAME, TWITTER_HANDLE } from "../utils/seo";

export const meta: MetaFunction = () => {
  const title = "Contact";
  const description =
    "Get in touch with me - feedback, suggestions and questions";
  const url = `${SITE_URL}/contact`;

  return [
    { title: `${title} - ${SITE_NAME}` },
    { name: "description", content: description },
    // Canonical
    { tagName: "link", rel: "canonical", href: url },
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${SITE_URL}/og-default.png` },
    // Twitter Card
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
};

export default function Contact() {
  return (
    <div className={"mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8"}>
      <Ad />

      <h1 className={"text-3xl"}>Feedback</h1>
      <p className={"mb-4"}>
        You can send me feedback, suggestions and questions by emailing me at{" "}
        <Link to="mailto:gemini0525@foxmail.com">gemini0525@foxmail.com</Link>
      </p>
      <p className={"mb-4"}>
        Alternatively, you can send me a message on{" "}
        <Link to="https://twitter.com/Manonicu">Twitter</Link>
      </p>
      <p>
        If you spot outdated information in any of my articles, send me a link
        and I will make sure to update the article ASAP.
      </p>

      <Ad />
    </div>
  );
}
