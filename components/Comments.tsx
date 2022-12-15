import React, { Component } from "react";
import { Box } from "@chakra-ui/react";

export default class Comments extends Component {
  componentDidMount() {
    const script = document.createElement('script')
    const anchor = document.getElementById('inject-comments-for-uterances')

    script.setAttribute('src', 'https://giscus.app/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('data-repo', 'Manonicu/site')
    script.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkzMjY4ODQyMjM=')
    script.setAttribute('data-category', 'General')
    script.setAttribute(
      'data-category-id',
      'MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMzU1OTIz'
    )
    script.setAttribute('data-mapping', 'og:title')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '1')
    script.setAttribute('data-theme', 'light')
    // @ts-ignore
    anchor.appendChild(script)
  }

  render() {
    return <Box py={12} id="inject-comments-for-uterances" />
  }
}
