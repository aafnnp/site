"use client";
import React, { useEffect } from "react";
import "@/assets/styles/main.css";
import dynamic from "next/dynamic";
import Clarity from "@microsoft/clarity";
import Script from "next/script";
import { LocaleProvider, useLocale } from "@/components/LocaleProvider";
// import { ClerkProvider } from "@clerk/nextjs"; // Removed for Edge Runtime compatibility
import { SpeedInsights } from "@vercel/speed-insights/next";

// 动态导入菜单组件以优化首屏加载
const Menu = dynamic(() => import("@/components/Menu"));

// 定义 Clarity ID 常量
const CLARITY_ID = "lv84p8uuy6";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 仅在客户端初始化 Clarity
    if (typeof window !== "undefined") {
      Clarity.init(CLARITY_ID);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
        />
      </head>
      <body>
        <LocaleProvider>
          <Menu />
          <main>{children}</main>
          <LanguageSwitcher />
        </LocaleProvider>
        <SpeedInsights />

        <Script
          id="adsense"
          data-ad-client="ca-pub-3854566314387093"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
