import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact - Manon.icu" },
    { name: "description", content: "Get in touch with me" },
  ];
};

export default function Contact() {
  return (
    <div className={"mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-8"}>
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
    </div>
  );
}