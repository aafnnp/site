import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Google AdSense
    if (
      typeof window !== "undefined" &&
      !document.querySelector('[data-ad-client="ca-pub-3854566314387093"]')
    ) {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3854566314387093";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
