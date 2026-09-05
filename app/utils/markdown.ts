import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import type { Tokens } from "marked";

import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";
import swift from "highlight.js/lib/languages/swift";
import bash from "highlight.js/lib/languages/bash";
import kotlin from "highlight.js/lib/languages/kotlin";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import sql from "highlight.js/lib/languages/sql";
import xml from "highlight.js/lib/languages/xml";
import json from "highlight.js/lib/languages/json";
import yaml from "highlight.js/lib/languages/yaml";
import dockerfile from "highlight.js/lib/languages/dockerfile";

// Register only the languages actually used in the site's content.
// Aliases are handled by each language definition (js/jsx, ts/tsx,
// sh/zsh, html, etc.), so no extra registration is needed.
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("swift", swift);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("kotlin", kotlin);
hljs.registerLanguage("css", css);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("json", json);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("dockerfile", dockerfile);

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Configure marked renderer to use highlight.js for code highlighting
 */
const renderer = new marked.Renderer();

renderer.code = function (token: Tokens.Code): string {
  const { text, lang } = token;
  let highlightedCode: string;

  if (lang && hljs.getLanguage(lang)) {
    try {
      highlightedCode = hljs.highlight(text, { language: lang }).value;
    } catch {
      highlightedCode = escapeHtml(text);
    }
  } else {
    // No registered language: just escape to keep output safe.
    highlightedCode = escapeHtml(text);
  }

  const langClass = lang ? ` class="hljs language-${lang}"` : ' class="hljs"';
  return `<pre><code${langClass}>${highlightedCode}</code></pre>`;
};

marked.setOptions({
  renderer: renderer,
});

/**
 * Parse markdown content with syntax highlighting
 * @param content - Markdown content string
 * @returns HTML string with highlighted code blocks
 */
export async function parseMarkdown(content: string): Promise<string> {
  return await marked.parse(content);
}
