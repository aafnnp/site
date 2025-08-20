// 浏览器枚举类型定义
export enum DesktopBrowser {
  Chrome = "chrome",
  Firefox = "firefox",
  IE = "ie",
  Edge = "edge",
  Safari = "safari",
}

export enum MobileBrowser {
  AndroidChrome = "chrome",
  AndroidFirefox = "firefox",
  Android = "android",
  IosSafari = "safari",
}

export const BrowserEnums = {
  desktop: DesktopBrowser,
  mobile: MobileBrowser,
};
