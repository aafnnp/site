import { describe, expect, it } from "vitest";

import { getSeoRuleByPageKind } from "../seo-rules";

describe("seo-rules", () => {
  it("detail 页面应默认开启完整字段", () => {
    const rule = getSeoRuleByPageKind("detail");

    expect(rule.enableOg).toBe(true);
    expect(rule.enableTwitter).toBe(true);
    expect(rule.requireCanonical).toBe(true);
  });

  it("utility 页面应默认精简字段", () => {
    const rule = getSeoRuleByPageKind("utility");

    expect(rule.requireCanonical).toBe(true);
    expect(rule.enableOg).toBe(false);
    expect(rule.enableTwitter).toBe(false);
  });

  it("list 页面应默认开启标准字段", () => {
    const rule = getSeoRuleByPageKind("list");

    expect(rule.enableOg).toBe(true);
    expect(rule.enableTwitter).toBe(true);
    expect(rule.requireCanonical).toBe(true);
  });
});
