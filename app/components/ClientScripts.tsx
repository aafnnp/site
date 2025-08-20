import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Microsoft Clarity
    if (typeof window !== "undefined") {
      (function(c: any, l: any, a: any, r: any, i: any, t: any, y: any) {
        c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "lv84p8uuy6", undefined, undefined);
    }

    // Google AdSense
    if (typeof window !== "undefined" && !document.querySelector('[data-ad-client="ca-pub-3854566314387093"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.setAttribute('data-ad-client', 'ca-pub-3854566314387093');
      document.head.appendChild(script);
    }
  }, []);

  return null;
}