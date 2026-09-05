import { useEffect } from "react";
import { useLocation } from "@remix-run/react";

// 声明全局window对象的adsbygoogle属性
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const ADSENSE_URL =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3854566314387093";

/**
 * 按需延迟加载 AdSense 脚本，避免在没有广告的页面产生额外请求。
 */
function loadAdSense() {
  if (document.querySelector(`script[src="${ADSENSE_URL}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = ADSENSE_URL;
  document.head.appendChild(script);
}

export default function Ad() {
  const location = useLocation();
  const pathName = location.pathname;
  // 当路径改变时重新初始化广告
  useEffect(() => {
    if (typeof window === "undefined") return;

    loadAdSense();

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log("AdSense error:", error);
    }
  }, [pathName]);

  return (
    <div className={"my-8"} key={pathName}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3854566314387093"
        data-ad-slot="9901453595"
        data-ad-format="auto"
        data-full-width-responsive="true"
        // data-adtest={process.env.NODE_ENV === "development" ? "on" : "off"}
      />
    </div>
  );
}
