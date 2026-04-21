import { describe, expect, it } from "vitest";
import { buildRouteMetadata } from "../../../src/domain/seo/meta-builder";

describe("buildRouteMetadata", () => {
  it("应为 blog-detail 构建包含 slug 的 canonical", () => {
    const meta = buildRouteMetadata("blog-detail", { slug: "hello" });

    expect(meta.alternates.canonical).toContain("/blog/hello");
  });
});
