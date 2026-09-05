import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { LocaleProvider } from "~/components/LocaleProvider";
import Navigation from "~/components/Menu";
import { SITE_URL, SITE_NAME } from "~/utils/seo";

import "./styles/main.css";

export const meta: MetaFunction = () => [
  { name: "theme-color", content: "#3b82f6" },
  { name: "robots", content: "index, follow" },
  { property: "og:site_name", content: SITE_NAME },
  { property: "og:locale", content: "zh_CN" },
];

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  // RSS Feed discovery
  {
    rel: "alternate",
    type: "application/rss+xml",
    title: `${SITE_NAME} RSS Feed`,
    href: `${SITE_URL}/rss.xml`,
  },
  // Sitemap
  {
    rel: "sitemap",
    type: "application/xml",
    href: `${SITE_URL}/sitemap.xml`,
  },
];

const FONT_STYLESHEET_URL =
  "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap";

function App() {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
        />
        <Meta />
        <Links />
        {/* Async, non-blocking stylesheets (fonts + self-hosted highlight theme) */}
        <link
          rel="stylesheet"
          href={FONT_STYLESHEET_URL}
          crossOrigin="anonymous"
          media="print"
          data-async-css
        />
        <link
          rel="stylesheet"
          href="/highlight-github-dark.css"
          media="print"
          data-async-css
        />
        <noscript>
          <link rel="stylesheet" href={FONT_STYLESHEET_URL} />
          <link rel="stylesheet" href="/highlight-github-dark.css" />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){var l=document.querySelectorAll("link[data-async-css]");for(var i=0;i<l.length;i++){(function(x){function a(){x.media="all";}try{if(x.sheet&&x.sheet.cssRules){a();return;}}catch(e){}x.addEventListener("load",a);})(l[i]);}})();',
          }}
        />
      </head>
      <body>
        <LocaleProvider>
          <Navigation />
          <main>
            <Outlet />
          </main>
        </LocaleProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default App;
