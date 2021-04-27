import React, {Component} from "react";
import Link from "next/link";

export default class Pagination extends Component {
	render() {
		const CLASS = key => (this.props.curPage == key ? "active" : "");
		return (
			<nav className="my-4 flex items-center pagination">
				{Array.from(Array(this.props.total), (_, i) => i + 1).map(item => {
					return (
						<Link href={`/?page=${item}`} key={item}>
							<a className={CLASS(item)}>{item}</a>
						</Link>
					);
				})}
			</nav>
		);
	}
}
