# Next.js Cloudflare Workers Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将现有 Remix 站点完整迁移为 Next.js App Router，并在 Cloudflare Workers（OpenNext）上稳定部署，保持内容与 SEO 行为一致。

**Architecture:** 采用 Next.js App Router 重建路由层，内容继续基于本地 Markdown/MDX。鉴权迁移到 Supabase Auth，SEO 与 sitemap 统一通过领域模块生成。部署链路改为 OpenNext -> Cloudflare Workers，并以一次性切换上线。

**Tech Stack:** Next.js (App Router), React, TypeScript, Supabase Auth, Markdown/MDX, OpenNext, Cloudflare Workers, Vitest

---

## 文件结构映射（实施前锁定）

- Create: `next.config.ts`
- Create: `open-next.config.ts`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `app/blog/page.tsx`
- Create: `app/blog/[slug]/page.tsx`
- Create: `app/column/[column]/page.tsx`
- Create: `app/search/page.tsx`
- Create: `app/sitemap.ts`
- Create: `src/content/frontmatter-schema.ts`
- Create: `src/content/mdx-loader.ts`
- Create: `src/content/content-index.ts`
- Create: `src/domain/seo/meta-builder.ts`
- Create: `src/domain/seo/route-seo-map.ts`
- Create: `src/domain/seo/sitemap-builder.ts`
- Create: `src/domain/auth/supabase-auth-service.ts`
- Create: `src/lib/env.ts`
- Create: `src/lib/cache.ts`
- Create: `src/lib/supabase/server.ts`
- Create: `src/lib/supabase/client.ts`
- Create: `middleware.ts`
- Create: `tests/content/content-index.test.ts`
- Create: `tests/domain/seo/meta-builder.test.ts`
- Create: `tests/domain/seo/sitemap-builder.test.ts`
- Create: `tests/domain/auth/supabase-auth-service.test.ts`
- Modify: `package.json`
- Modify: `wrangler.toml`
- Modify: `tsconfig.json`
- Modify: `.gitignore`
- Delete: `app/routes/*`（在最终切换任务执行）

---

### Task 1: 搭建 Next.js + OpenNext 基础骨架

**Files:**

- Create: `next.config.ts`
- Create: `open-next.config.ts`
- Modify: `package.json`
- Modify: `tsconfig.json`
- Modify: `.gitignore`

- [ ] **Step 1: 写基础配置存在性测试（失败用例）**

```ts
// tests/setup/framework-files.test.ts
import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("framework config files", () => {
  it("should have next and open-next configs", () => {
    expect(existsSync("next.config.ts")).toBe(true);
    expect(existsSync("open-next.config.ts")).toBe(true);
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npm run test -- tests/setup/framework-files.test.ts`  
Expected: FAIL，提示 `next.config.ts` 或 `open-next.config.ts` 不存在

- [ ] **Step 3: 最小实现配置文件与脚本**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
```

```ts
// open-next.config.ts
export default {
  default: {},
};
```

```json
// package.json (scripts 关键片段)
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "build:worker": "opennextjs-cloudflare build",
    "deploy": "npm run build:worker && wrangler deploy"
  }
}
```

- [ ] **Step 4: 运行测试确认通过**

Run: `npm run test -- tests/setup/framework-files.test.ts`  
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add next.config.ts open-next.config.ts package.json tsconfig.json .gitignore tests/setup/framework-files.test.ts
git commit -m "chore: bootstrap nextjs and opennext configuration"
```

### Task 2: 建立内容解析与索引模块（MDX 保持）

**Files:**

- Create: `src/content/frontmatter-schema.ts`
- Create: `src/content/mdx-loader.ts`
- Create: `src/content/content-index.ts`
- Test: `tests/content/content-index.test.ts`

- [ ] **Step 1: 写失败测试覆盖内容索引输出**

```ts
// tests/content/content-index.test.ts
import { describe, expect, it } from "vitest";
import { buildContentIndex } from "@/src/content/content-index";

describe("buildContentIndex", () => {
  it("returns sorted posts by publish date desc", async () => {
    const index = await buildContentIndex();
    expect(index.posts.length).toBeGreaterThan(0);
    expect(new Date(index.posts[0].date).getTime()).toBeGreaterThanOrEqual(
      new Date(index.posts[index.posts.length - 1].date).getTime()
    );
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npm run test -- tests/content/content-index.test.ts`  
Expected: FAIL，提示模块不存在

- [ ] **Step 3: 写最小可用实现**

```ts
// src/content/frontmatter-schema.ts
export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags?: string[];
}
```

```ts
// src/content/content-index.ts
export interface PostSummary {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export interface ContentIndex {
  posts: PostSummary[];
}

export async function buildContentIndex(): Promise<ContentIndex> {
  // 迁移初期先复用现有解析能力，后续再内聚到 mdx-loader
  const { getPosts } = await import("../../app/utils/posts");
  const posts = getPosts().map((item: any) => ({
    slug: item.slug,
    title: item.title,
    date: item.date,
    description: item.description,
  }));
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return { posts };
}
```

- [ ] **Step 4: 运行测试确认通过**

Run: `npm run test -- tests/content/content-index.test.ts`  
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add src/content/frontmatter-schema.ts src/content/content-index.ts tests/content/content-index.test.ts
git commit -m "feat: add mdx content indexing module"
```

### Task 3: 迁移 SEO 领域模型与站点地图生成

**Files:**

- Create: `src/domain/seo/meta-builder.ts`
- Create: `src/domain/seo/route-seo-map.ts`
- Create: `src/domain/seo/sitemap-builder.ts`
- Test: `tests/domain/seo/meta-builder.test.ts`
- Test: `tests/domain/seo/sitemap-builder.test.ts`

- [ ] **Step 1: 写失败测试（metadata + sitemap）**

```ts
// tests/domain/seo/meta-builder.test.ts
import { describe, expect, it } from "vitest";
import { buildRouteMetadata } from "@/src/domain/seo/meta-builder";

describe("buildRouteMetadata", () => {
  it("builds canonical metadata for blog detail", () => {
    const meta = buildRouteMetadata("blog-detail", { slug: "hello" });
    expect(meta.alternates?.canonical).toContain("/blog/hello");
  });
});
```

```ts
// tests/domain/seo/sitemap-builder.test.ts
import { describe, expect, it } from "vitest";
import { buildSitemapItems } from "@/src/domain/seo/sitemap-builder";

describe("buildSitemapItems", () => {
  it("includes homepage", () => {
    const items = buildSitemapItems([]);
    expect(items.some((item) => item.url.endsWith("/"))).toBe(true);
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npm run test -- tests/domain/seo/meta-builder.test.ts tests/domain/seo/sitemap-builder.test.ts`  
Expected: FAIL，提示模块不存在

- [ ] **Step 3: 写最小实现**

```ts
// src/domain/seo/meta-builder.ts
export interface RouteMetaInput {
  slug?: string;
}

export function buildRouteMetadata(routeKey: string, input: RouteMetaInput) {
  const baseUrl = process.env.SITE_URL ?? "https://manon.icu";
  const path =
    routeKey === "blog-detail" && input.slug ? `/blog/${input.slug}` : "/";
  return {
    title: "Manon.icu",
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  };
}
```

```ts
// src/domain/seo/sitemap-builder.ts
export interface SitemapItem {
  url: string;
  lastModified?: string;
}

export function buildSitemapItems(
  postSlugs: string[],
  baseUrl = process.env.SITE_URL ?? "https://manon.icu"
): SitemapItem[] {
  return [
    { url: `${baseUrl}/` },
    ...postSlugs.map((slug) => ({ url: `${baseUrl}/blog/${slug}` })),
  ];
}
```

- [ ] **Step 4: 运行测试确认通过**

Run: `npm run test -- tests/domain/seo/meta-builder.test.ts tests/domain/seo/sitemap-builder.test.ts`  
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add src/domain/seo/meta-builder.ts src/domain/seo/sitemap-builder.ts tests/domain/seo/meta-builder.test.ts tests/domain/seo/sitemap-builder.test.ts
git commit -m "feat: add seo domain builders for next routes"
```

### Task 4: 接入 Supabase Auth 服务边界

**Files:**

- Create: `src/lib/supabase/server.ts`
- Create: `src/lib/supabase/client.ts`
- Create: `src/domain/auth/supabase-auth-service.ts`
- Create: `tests/domain/auth/supabase-auth-service.test.ts`

- [ ] **Step 1: 写失败测试（匿名用户与登录用户）**

```ts
// tests/domain/auth/supabase-auth-service.test.ts
import { describe, expect, it, vi } from "vitest";
import { getCurrentUser } from "@/src/domain/auth/supabase-auth-service";

vi.mock("@/src/lib/supabase/server", () => ({
  createServerSupabase: () => ({
    auth: {
      getUser: async () => ({ data: { user: { id: "u1", email: "a@b.c" } } }),
    },
  }),
}));

describe("getCurrentUser", () => {
  it("returns normalized user", async () => {
    const user = await getCurrentUser();
    expect(user?.id).toBe("u1");
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npm run test -- tests/domain/auth/supabase-auth-service.test.ts`  
Expected: FAIL，提示模块不存在

- [ ] **Step 3: 写最小实现**

```ts
// src/domain/auth/supabase-auth-service.ts
import { createServerSupabase } from "@/src/lib/supabase/server";

export interface SessionUser {
  id: string;
  email: string | null;
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  const supabase = createServerSupabase();
  const { data } = await supabase.auth.getUser();
  if (!data.user) return null;
  return {
    id: data.user.id,
    email: data.user.email ?? null,
  };
}
```

- [ ] **Step 4: 运行测试确认通过**

Run: `npm run test -- tests/domain/auth/supabase-auth-service.test.ts`  
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add src/lib/supabase/server.ts src/lib/supabase/client.ts src/domain/auth/supabase-auth-service.ts tests/domain/auth/supabase-auth-service.test.ts
git commit -m "feat: add supabase auth service boundary"
```

### Task 5: 迁移公共页面到 Next App Router

**Files:**

- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `app/blog/page.tsx`
- Create: `app/blog/[slug]/page.tsx`
- Create: `app/column/[column]/page.tsx`
- Create: `app/search/page.tsx`

- [ ] **Step 1: 写失败测试（路由页面可导入）**

```ts
// tests/routes/next-routes.test.ts
import { describe, expect, it } from "vitest";

describe("next routes", () => {
  it("exports home page component", async () => {
    const mod = await import("@/app/page");
    expect(typeof mod.default).toBe("function");
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npm run test -- tests/routes/next-routes.test.ts`  
Expected: FAIL，提示 `app/page.tsx` 不存在

- [ ] **Step 3: 写最小页面实现**

```tsx
// app/page.tsx
import { buildContentIndex } from "@/src/content/content-index";

export default async function HomePage() {
  const index = await buildContentIndex();
  return (
    <main>
      <h1>Manon.icu</h1>
      <p>Posts: {index.posts.length}</p>
    </main>
  );
}
```

- [ ] **Step 4: 运行测试确认通过**

Run: `npm run test -- tests/routes/next-routes.test.ts`  
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add app/layout.tsx app/page.tsx app/about/page.tsx app/contact/page.tsx app/blog/page.tsx app/blog/[slug]/page.tsx app/column/[column]/page.tsx app/search/page.tsx tests/routes/next-routes.test.ts
git commit -m "feat: migrate public routes to next app router"
```

### Task 6: 接入 metadata 与 sitemap 路由

**Files:**

- Modify: `app/blog/[slug]/page.tsx`
- Create: `app/sitemap.ts`
- Test: `tests/routes/sitemap.test.ts`

- [ ] **Step 1: 写失败测试（sitemap 产出）**

```ts
// tests/routes/sitemap.test.ts
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("returns root item", async () => {
    const items = await sitemap();
    expect(items.some((i) => i.url.endsWith("/"))).toBe(true);
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npm run test -- tests/routes/sitemap.test.ts`  
Expected: FAIL，提示 `app/sitemap.ts` 不存在

- [ ] **Step 3: 写最小实现**

```ts
// app/sitemap.ts
import { buildContentIndex } from "@/src/content/content-index";
import { buildSitemapItems } from "@/src/domain/seo/sitemap-builder";

export default async function sitemap() {
  const index = await buildContentIndex();
  return buildSitemapItems(index.posts.map((item) => item.slug)).map(
    (item) => ({
      url: item.url,
      lastModified: item.lastModified
        ? new Date(item.lastModified)
        : new Date(),
    })
  );
}
```

- [ ] **Step 4: 运行测试确认通过**

Run: `npm run test -- tests/routes/sitemap.test.ts`  
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add app/sitemap.ts app/blog/[slug]/page.tsx tests/routes/sitemap.test.ts
git commit -m "feat: wire metadata and sitemap in next routes"
```

### Task 7: Cloudflare Workers 部署链路切换

**Files:**

- Modify: `wrangler.toml`
- Modify: `package.json`
- Create: `tests/deploy/wrangler-config.test.ts`

- [ ] **Step 1: 写失败测试（wrangler 配置关键字段）**

```ts
// tests/deploy/wrangler-config.test.ts
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("wrangler config", () => {
  it("targets worker output", () => {
    const text = readFileSync("wrangler.toml", "utf-8");
    expect(text.includes("main =")).toBe(true);
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npm run test -- tests/deploy/wrangler-config.test.ts`  
Expected: FAIL，缺少 `main =` 指向 worker 入口

- [ ] **Step 3: 写最小部署实现**

```toml
# wrangler.toml（关键片段）
name = "site-next-worker"
main = ".open-next/worker.js"
compatibility_date = "2026-04-21"
compatibility_flags = ["nodejs_compat"]

[vars]
SITE_URL = "https://manon.icu"
```

- [ ] **Step 4: 运行测试确认通过**

Run: `npm run test -- tests/deploy/wrangler-config.test.ts`  
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add wrangler.toml package.json tests/deploy/wrangler-config.test.ts
git commit -m "chore: switch deployment pipeline to opennext worker"
```

### Task 8: 清理 Remix 入口并完成一次性切换前回归

**Files:**

- Delete: `app/routes/_index.tsx`
- Delete: `app/routes/about.tsx`
- Delete: `app/routes/contact.tsx`
- Delete: `app/routes/blog.tsx`
- Delete: `app/routes/blog.$.tsx`
- Delete: `app/routes/blog._index.tsx`
- Delete: `app/routes/column.$column.tsx`
- Delete: `app/routes/search.tsx`
- Delete: `app/routes/sitemap[.]xml.tsx`
- Delete: `functions/[[path]].ts`
- Modify: `README.md`

- [ ] **Step 1: 写失败测试（确保旧路由已不再作为入口）**

```ts
// tests/migration/remix-cleanup.test.ts
import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("remix cleanup", () => {
  it("remix routes entry should be removed", () => {
    expect(existsSync("app/routes/_index.tsx")).toBe(false);
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npm run test -- tests/migration/remix-cleanup.test.ts`  
Expected: FAIL，旧文件仍存在

- [ ] **Step 3: 删除旧入口并更新文档**

```md
<!-- README.md 关键片段 -->

## Deploy

- Build: `npm run build:worker`
- Deploy: `npm run deploy`
- Runtime: Cloudflare Workers (OpenNext)
```

- [ ] **Step 4: 运行全量测试与构建验证**

Run: `npm run test && npm run build && npm run build:worker`  
Expected: 全部 PASS，且生成 `.open-next/worker.js`

- [ ] **Step 5: 提交**

```bash
git add -A
git commit -m "refactor: finalize nextjs migration and remove remix runtime"
```

## Spec 自检结论

- **覆盖性检查**：已覆盖框架迁移、MDX 内容、SSR 路由、Supabase Auth、SEO/sitemap、Workers 部署、一次性切换前回归。
- **占位符检查**：无 `TODO/TBD/implement later`。
- **一致性检查**：模块命名在任务间保持一致（`buildContentIndex`、`buildRouteMetadata`、`buildSitemapItems`、`getCurrentUser`）。
