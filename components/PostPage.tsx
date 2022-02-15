import hljs from 'highlight.js'
import 'highlight.js/styles/agate.css'
import React, { useEffect } from 'react'

const PostPage:React.FC = ({ children }) => {
  const updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll('pre code').forEach((el:any) => {
      hljs.highlightElement(el)
    })
  }

  useEffect(() => {
    updateCodeSyntaxHighlighting()
  }, [])
  return (<div className="post text-sm">{children}</div>)
}
export default PostPage
