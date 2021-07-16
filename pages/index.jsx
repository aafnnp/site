import React,{Component} from 'react';
import Link from 'next/link'

export default class Index extends Component{
  componentDidMount() {

  }

  render() {
    return <div className="home-page">
      <nav>
        <ul>
          <Link href='/'><li><a>Home</a></li></Link>
          <Link href='/'><li><a>About me</a></li></Link>
          <Link href='/'><li><a>Portfolio</a></li></Link>
          <Link href='/blog'><li><a>Blog</a></li></Link>
          <Link href='/'><li><a>Contact me</a></li></Link>
        </ul>
      </nav>
      <section>
        <div className="title"><span>Manon.icu</span><span><Link href='/'><a>FullStack Developer</a></Link></span></div>
      </section>
    </div>
  }
}
