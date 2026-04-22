import type { SeoPageKind, SeoRule } from "./seo-types";

const SEO_RULES: Readonly<Record<SeoPageKind, Readonly<SeoRule>>> = {
  detail: {
    requireCanonical: true,
    enableOg: true,
    enableTwitter: true,
  },
  list: {
    requireCanonical: true,
    enableOg: true,
    enableTwitter: true,
  },
  utility: {
    requireCanonical: true,
    enableOg: false,
    enableTwitter: false,
  },
};

/**
 * 根据页面分层读取对应的 SEO 默认规则。
 */
export function getSeoRuleByPageKind(kind: SeoPageKind): SeoRule {
  return { ...SEO_RULES[kind] };
}
