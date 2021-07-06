import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { CodePen, CodeSandbox, Gist } from "mdx-embed";

const components = {
  CodePen,
  Gist,
  CodeSandbox,
};

/**
 * Serialize mdx to string
 */
export async function mdxToString(mdx) {
  return await renderToString(mdx, { components });
}

/**
 * Render string back to react components
 */
export function stringToMdx(string) {
  return hydrate(string, { components });
}
