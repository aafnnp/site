const hljs = require('highlight.js');
const MarkdownIt = require('markdown-it')({
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return (
					'<pre class="hljs"><code>' +
					hljs.highlight(lang, str, true).value +
					'</code></pre>'
				);
			} catch (__) {}
		}

		return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
	},
});

export default function Markdown({ content }) {
	const result = MarkdownIt.render(content);
	return <section dangerouslySetInnerHTML={{ __html: result }}></section>;
}
