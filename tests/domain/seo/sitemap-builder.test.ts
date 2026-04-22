import { describe, expect, it } from "vitest";
import { buildSitemapItems } from "../../../src/domain/seo/sitemap-builder";

describe("buildSitemapItems", () => {
  it("应包含首页 URL", () => {
    const items = buildSitemapItems([], "https://example.com");

    expect(items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          url: "https://example.com/",
        }),
      ]),
    );
  });
});
