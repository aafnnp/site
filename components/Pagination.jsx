import React, { Component } from 'react';
import Link from 'next/link';

export default class Pagination extends Component {
  render() {
    // eslint-disable-next-line eqeqeq
    const CLASS = (key) => (this.props.curPage == key ? 'active' : '');

    return (
      <nav className="my-4 flex items-center pagination">
        {Array.from(Array(this.props.total), (_, i) => i + 1).map((item) => (
          <Link href={`/blog?page=${item}`} key={item}>
            <a className={CLASS(item)}>{item}</a>
          </Link>
        ))}
      </nav>
    );
  }
}
