"use client";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.min.css";

export default function MarkdownContent({
  html,
}: {
  html: string | Promise<string>;
}) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
