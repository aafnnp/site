/**
 * SEO 页面分层类型。
 */
export type SeoPageKind = "detail" | "list" | "utility";

/**
 * SEO 规则基线。
 */
export interface SeoRule {
  readonly requireCanonical: boolean;
  readonly enableOg: boolean;
  readonly enableTwitter: boolean;
}
