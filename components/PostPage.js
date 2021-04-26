import React from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

export default class PostPage extends React.Component {
	componentDidMount() {
		this.updateCodeSyntaxHighlighting();
	}

	componentDidUpdate() {
		this.updateCodeSyntaxHighlighting();
	}

	updateCodeSyntaxHighlighting() {
		document.querySelectorAll("pre code").forEach(block => {
			hljs.highlightBlock(block);
		});
	}

	render() {
		return <>{this.props.children}</>;
	}
}
