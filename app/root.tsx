import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { LocaleProvider, useLocale } from "~/components/LocaleProvider";
import Navigation from "~/components/Menu";

import "./styles/main.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const loader = (args: LoaderFunctionArgs) => {
  return null;
};

function LanguageSwitcher() {
  const { locale, setLocaleMessages } = useLocale();
  return (
    <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 9999 }}>
      <button
        onClick={() =>
          setLocaleMessages(locale === "zh-CN" ? "en-US" : "zh-CN")
        }
        className="px-3 py-1 bg-gray-200 rounded shadow hover:bg-gray-300"
      >
        {locale === "zh-CN" ? "English" : "中文"}
      </button>
    </div>
  );
}

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <LocaleProvider>
          <Navigation />
          <main>
            <Outlet />
          </main>
          <LanguageSwitcher />
        </LocaleProvider>
        <ScrollRestoration />
        <Scripts />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3854566314387093"
          crossOrigin="anonymous"
        />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default App;
