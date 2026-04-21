import { describe, expect, it } from "vitest";

describe("next app routes", () => {
  it("应可导入首页并且 default 导出为函数", async () => {
    const module = await import("@/app/page");

    expect(module.default).toBeTypeOf("function");
  });
});
