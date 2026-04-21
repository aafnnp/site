import { describe, expect, it } from "vitest";

describe("sitemap route", () => {
  it("应包含首页 URL", async () => {
    const module = await import("@/app/sitemap");
    const items = await module.default();

    expect(items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          url: expect.stringMatching(/\/$/),
        }),
      ]),
    );
  });
});
