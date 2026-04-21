import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, test } from "vitest";

describe("wrangler config", () => {
  test("should define worker entry with main field", () => {
    const wranglerConfigPath = resolve(process.cwd(), "wrangler.toml");
    const wranglerConfig = readFileSync(wranglerConfigPath, "utf-8");

    expect(wranglerConfig).toContain("main =");
    expect(wranglerConfig).toContain('.open-next/worker.js');
  });
});
