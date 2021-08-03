import React, { Component } from 'react'
import Link from 'next/link'

export default class Index extends Component {
  componentDidMount () {}

  render () {
    return (
      <div className="home-page">
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/">
                <a>Projects</a>
            </Link>
            <Link href="/">
                <a>Portfolio</a>
            </Link>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/">
                <a>Contact me</a>
            </Link>
        </nav>
          <div className="title">
            <span>Manon.icu</span>
            <span>
              <Link href="/">
                <a>FullStack Developer</a>
              </Link>
            </span>
          </div>
      </div>
    )
  }
}
