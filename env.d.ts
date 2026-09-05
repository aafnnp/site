/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

export {};

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    cloudflare: {
      env: {
        [key: string]: any;
      };
      ctx: ExecutionContext;
      caches: CacheStorage;
      cf: IncomingRequestCfProperties;
    };
  }
}
