import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("remix cleanup", () => {
  it("should remove legacy remix index route before one-shot switch", () => {
    expect(existsSync("app/routes/_index.tsx")).toBe(false);
  });
});
