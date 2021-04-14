const hljs = require('highlight.js');
const md = require('markdown-it')({
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return (
					'<pre class="hljs"><code>' +
					hljs.highlight(str, {
						language: lang,
						ignoreIllegals: true,
					}).value +
					'</code></pre>'
				);
			} catch (__) {}
		}

		return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
	},
});

export default function Markdown({ content }) {
	const result = md.render(content);
	return <section dangerouslySetInnerHTML={{ __html: result }}></section>;
}
