import hljs from 'highlight.js'
import 'highlight.js/styles/agate.css'
import React from 'react'

interface PageProps{
  children:React.ReactNode
}

export default class PostPage extends React.Component<PageProps> {
  componentDidMount () {
    this.updateCodeSyntaxHighlighting()
  }

  componentDidUpdate () {
    this.updateCodeSyntaxHighlighting()
  }

  updateCodeSyntaxHighlighting () {
    document.querySelectorAll('pre code').forEach((el:any) => {
      hljs.highlightElement(el)
    })
  }

  render () {
    return <div className="post text-sm">{this.props.children}</div>
  }
}
