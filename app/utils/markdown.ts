import { marked } from "marked";
import hljs from "highlight.js";
import type { Tokens } from "marked";

/**
 * Configure marked renderer to use highlight.js for code highlighting
 */
const renderer = new marked.Renderer();

renderer.code = function (token: Tokens.Code): string {
  const { text, lang } = token;
  let highlightedCode = text;

  if (lang && hljs.getLanguage(lang)) {
    try {
      highlightedCode = hljs.highlight(text, { language: lang }).value;
    } catch (err) {
      // Fallback to auto-detection if language is not supported
      highlightedCode = hljs.highlightAuto(text).value;
    }
  } else {
    // Auto-detect language if no language specified
    highlightedCode = hljs.highlightAuto(text).value;
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
