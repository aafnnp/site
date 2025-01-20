"use client";
import React, { useEffect } from "react";
import "@/assets/styles/main.css";
import dynamic from "next/dynamic";
import Clarity from "@microsoft/clarity";
import Script from "next/script";

// 动态导入菜单组件以优化首屏加载
const Menu = dynamic(() => import("@/components/Menu"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

// 定义 Clarity ID 常量
const CLARITY_ID = "lv84p8uuy6";

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
        <Menu />
        <main>{children}</main>
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
