import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import type {
  ExecutionContext,
  IncomingRequestCfProperties,
} from "@cloudflare/workers-types";

// @ts-ignore - 这里需要引入构建后的文件
// eslint-disable-next-line import/no-unresolved
import * as build from "../build/server/index.js";

export const onRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => ({
    cloudflare: {
      env: context.env,
      ctx: {
        props: {},
        waitUntil: context.waitUntil,
        passThroughOnException: context.passThroughOnException,
      } as ExecutionContext,
      caches: caches,
      cf: (context.request.cf ?? {}) as IncomingRequestCfProperties,
    },
  }),
});
