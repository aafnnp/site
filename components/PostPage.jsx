import React, {useEffect} from 'react'
import Prism from 'prismjs'
require('prismjs/components/prism-go')
require('prismjs/components/prism-python')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-swift')
require('prismjs/components/prism-jsx')
require('prismjs/themes/prism-okaidia.min.css')

const PostPage = ({children}) => {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll()
    }
    highlight().then(() => {})
  }, [children])
  return <div className="post text-sm">{children}</div>
}
export default PostPage
