import hljs from 'highlight.js';
import 'highlight.js/styles/agate.css';
import React from 'react';
export default class PostPage extends React.Component {
  componentDidMount() {
    this.updateCodeSyntaxHighlighting();
  }

  componentDidUpdate() {
    this.updateCodeSyntaxHighlighting();
  }

  updateCodeSyntaxHighlighting() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  }

  render() {
    return <div className="post text-sm">{this.props.children}</div>;
  }
}
