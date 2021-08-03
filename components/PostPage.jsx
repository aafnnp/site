import React from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/base16/default-dark.css'

export default class PostPage extends React.Component {
  componentDidMount () {
    this.updateCodeSyntaxHighlighting()
  }

  componentDidUpdate () {
    this.updateCodeSyntaxHighlighting()
  }

  updateCodeSyntaxHighlighting () {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el)
    })
  }

  render () {
    return <>{this.props.children}</>
  }
}
