import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// @ts-ignore - 这里需要引入构建后的文件
// eslint-disable-next-line import/no-unresolved
import * as build from "../build/server/index.js";

export const onRequest = createPagesFunctionHandler({
  // @ts-ignore - build 产物类型与 ServerBuild 的 links 类型存在兼容差异
  build,
  mode: process.env.NODE_ENV,
  // @ts-ignore - Pages EventContext 与自定义 AppLoadContext 类型存在差异
  getLoadContext: (context) => ({
    cloudflare: context,
  }),
});
