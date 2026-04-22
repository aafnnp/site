import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { buildContentIndex } from "../../src/content/content-index";

const tempDirs: string[] = [];

function createTempContentDir(): string {
  const dir = mkdtempSync(join(tmpdir(), "content-index-test-"));
  tempDirs.push(dir);
  return dir;
}

function writePost(contentDir: string, slug: string, date: string, title: string): void {
  const postsDir = join(contentDir, "posts");
  mkdirSync(postsDir, { recursive: true });
  writeFileSync(
    join(postsDir, `${slug}.mdx`),
    `---
title: ${title}
date: ${date}
---

# ${title}
`,
    "utf-8",
  );
}

afterEach(() => {
  for (const dir of tempDirs.splice(0, tempDirs.length)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("buildContentIndex", () => {
  it("当 posts 目录不存在时应返回空数组", async () => {
    const contentDir = createTempContentDir();

    const index = await buildContentIndex({ contentDir });

    expect(index.posts).toEqual([]);
  });

  it("当 posts 目录存在但为空时应返回空数组", async () => {
    const contentDir = createTempContentDir();
    mkdirSync(join(contentDir, "posts"), { recursive: true });

    const index = await buildContentIndex({ contentDir });

    expect(index.posts).toEqual([]);
  });

  it("应按日期降序返回 posts", async () => {
    const contentDir = createTempContentDir();
    writePost(contentDir, "older", "2024-01-01", "旧文章");
    writePost(contentDir, "newer", "2025-01-01", "新文章");

    const index = await buildContentIndex({ contentDir });

    expect(index.posts.map((post) => post.slug)).toEqual(["newer", "older"]);
  });
});
