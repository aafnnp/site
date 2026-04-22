# SEO 一致性人工验收清单

## 说明

本清单用于 `feature/seo-unified` 分支最终人工验收，重点核对核心路由的 SEO 输出是否已统一收敛，并确认 `noindex` 与 `sitemap` 规则保持一致。

建议验收方式：

- 本地打开对应页面，使用浏览器开发者工具检查 `<title>`、`meta`、`link[rel="canonical"]` 与结构化数据。
- 同时抽查 `sitemap.xml` 输出，确认收录页与 `noindex` 策略没有冲突。

## 页面验收清单

### 1. 首页 `/`

- [ ] 输出统一标题，格式为“页面标题 - 站点名”。
- [ ] 含 `description`。
- [ ] 含 `canonical`，地址为站点首页绝对 URL。
- [ ] 含 Open Graph 字段：至少检查 `og:type`、`og:url`、`og:title`、`og:description`、`og:image`。
- [ ] 含 Twitter 字段：至少检查 `twitter:card`、`twitter:title`、`twitter:description`、`twitter:image`。
- [ ] 页面未错误输出 `noindex`。

### 2. 博客列表页 `/blog`

- [ ] 输出统一标题，格式为“页面标题 - 站点名”。
- [ ] 含 `description`。
- [ ] 含 `canonical`，地址为 `/blog` 的绝对 URL。
- [ ] 含 Open Graph 字段。
- [ ] 含 Twitter 字段。
- [ ] 页面未错误输出 `noindex`。

### 3. 文章详情页 `/blog/:slug`

- [ ] 输出统一标题，格式为“页面标题 - 站点名”。
- [ ] 含 `description`，内容与文章摘要一致或合理降级。
- [ ] 含 `canonical`，地址与当前文章 slug 一致。
- [ ] 含 Open Graph 字段。
- [ ] 含 Twitter 字段。
- [ ] 含文章扩展字段：`article:published_time`、`article:modified_time`、`article:author`，有标签时应输出 `article:tag`。
- [ ] 页面内存在 `application/ld+json` 结构化数据脚本，类型为文章内容对应的 JSON-LD。

### 4. 专栏页 `/column/:column`

- [ ] 输出统一标题，格式为“页面标题 - 站点名”。
- [ ] 含 `description`。
- [ ] 含 `canonical`，地址与当前专栏 slug 一致。
- [ ] 含 Open Graph 字段。
- [ ] 含 Twitter 字段。
- [ ] 页面未错误输出 `noindex`。

### 5. 404 / 内容缺失场景

- [ ] 文章详情无数据时，输出 404 语义 SEO，至少包含 `robots=noindex, nofollow`。
- [ ] 专栏无数据时，输出 404 语义 SEO，至少包含 `robots=noindex, nofollow`。
- [ ] 404 场景不应继续输出可收录信号。

## Sitemap 对齐清单

- [ ] `sitemap.xml` 包含首页 `/`。
- [ ] `sitemap.xml` 包含博客列表 `/blog`。
- [ ] `sitemap.xml` 包含博客文章详情 URL。
- [ ] `sitemap.xml` 包含 `about`、`apps`、`contact` 等允许收录的静态页。
- [ ] `sitemap.xml` 不包含搜索页 `/search`。
- [ ] `sitemap.xml` 当前不包含专栏详情页 `/column/:column`；这是当前实现的预期行为，因为尚未接入动态专栏 URL 数据源。
- [ ] 所有带 `noindex` 的页面都不应进入 `sitemap.xml`。

## 本次验收结论口径

满足以下条件时，可认为本任务验收通过：

- 核心页面 SEO 输出已统一经由共享 builder 生成；
- 文章详情与专栏页缺失数据时保留 404 / `noindex` 语义；
- `sitemap.xml` 与路由收录策略一致，没有把显式不收录页面写入 sitemap；
- 自动化测试与 `typecheck` 通过。
