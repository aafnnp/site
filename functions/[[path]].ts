import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// @ts-ignore - 这里需要引入构建后的文件
// eslint-disable-next-line import/no-unresolved
import * as build from "../build/server/index.js";

export const onRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => ({
    cloudflare: context,
  }),
});
