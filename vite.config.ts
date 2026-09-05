import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    cloudflareDevProxyVitePlugin(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        v3_singleFetch: true,
      },
      serverBuildFile: "index.js",
    }),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes("node_modules")) return undefined;
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) {
            return "react-vendor";
          }
          if (id.includes("node_modules/motion")) return "motion";
          if (id.includes("node_modules/react-icons")) return "icons";
          return undefined;
        },
      },
    },
  },
  ssr: {
    resolve: {
      conditions: ["workerd", "worker", "browser"],
    },
  },
});
