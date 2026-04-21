import { defineConfig } from "vitest/config";
import path from "node:path";

/**
 * 锁定当前 worktree 的 Vitest 配置，避免向上级目录拾取旧版 Remix Vite 配置。
 */
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "~": path.resolve(__dirname, "app"),
    },
  },
  test: {
    environment: "node",
  },
});
