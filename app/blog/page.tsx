import { buildContentIndex } from "@/src/content/content-index";

/**
 * 博客列表页。
 */
export default async function BlogPage() {
  const index = await buildContentIndex();

  return (
    <main>
      <h1>博客</h1>
      <ul>
        {index.posts.map((post) => (
          <li key={post.slug}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
