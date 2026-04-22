import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("framework config files", () => {
  it("should have next and open-next configs", () => {
    expect(existsSync("next.config.ts")).toBe(true);
    expect(existsSync("open-next.config.ts")).toBe(true);
  });
});
