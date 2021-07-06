import React, { Component } from "react";

export default class CodePen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: "Code",
        slug: "",
        tab: "result",
        team: "",
        user: "React",
        name: "",
        height: 300,
        theme: "39028",
        preview: true,
        editable: true,
        version: null,
      },
      href: "",
    };
  }

  componentDidMount() {
    const { team, user, slug } = this.props.options;

    this.setState({
      options: {
        ...this.state.options,
        ...this.props.options,
      },
      href: `https://codepen.io/${team ? "team" : ""}${user}/pen/${slug}`,
    });
    const SCRIPT = document.createElement("script");

    SCRIPT.setAttribute("src", "https://static.codepen.io/assets/embed/ei.js");
    SCRIPT.async = true;
    document.body.appendChild(SCRIPT);
  }

  render() {
    const {
      title,
      slug,
      tab,
      user,
      height,
      theme,
      preview = null,
      editable = null,
      version,
    } = this.state.options;
    const HEIGHT = { height: `${height}px` };

    return (
      <div
        className="codepen"
        data-default-tab={tab}
        data-editable={editable}
        data-embed-version={version}
        data-height={height}
        data-pen-title={title}
        data-preview={preview}
        data-slug-hash={slug}
        data-theme-id={theme}
        data-user={user}
        style={HEIGHT}
      />
    );
  }
}
