import { createElement } from "react";

/**
 * 首页。
 */
export default function HomePage() {
  return createElement(
    "main",
    null,
    createElement("h1", null, "首页"),
  );
}
