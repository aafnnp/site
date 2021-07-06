import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
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
  return await serialize(mdx);
}

/**
 * Render string back to react components
 */
export function stringToMdx(source) {
  return <MDXRemote {...source} components={components} />;
}
