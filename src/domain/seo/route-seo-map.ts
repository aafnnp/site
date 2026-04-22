/**
 * 路由 SEO 项定义。
 */
export interface RouteSeoItem {
  path: string;
}

/**
 * 生成默认路由 SEO 映射。
 */
export function createDefaultRouteSeoMap(): RouteSeoItem[] {
  return [{ path: "/" }];
}
