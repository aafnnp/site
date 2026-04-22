# Next.js + Cloudflare Workers 架构迁移设计（重构版）

## 1. 背景与目标

当前项目基于 Remix + Vite + Cloudflare Pages。目标是迁移到 Next.js，并适配 Cloudflare Workers 部署，且采用一次性切换策略。

本设计遵循以下已确认约束：

- 完全重构（不限于目录平移）
- 内容数据源继续使用本地 Markdown/MDX
- 渲染策略以 SSR 为主
- 部署目标为 Cloudflare Workers（OpenNext 方案）
- 鉴权体系迁移到 Supabase Auth
- 发布采用一次性切换

## 2. 设计原则

- **最小认知复杂度**：模块边界清晰，每个模块职责单一，避免过度抽象。
- **SSR 优先但不过度动态化**：默认按 SSR 设计，纯内容路由允许静态化或缓存优化。
- **可测试与可回滚**：迁移过程分阶段验收，最终一次性切换前具备完整回归证据。
- **Cloudflare 友好**：尽量使用边缘兼容能力与标准 Web API，避免 Node 专属依赖。

## 3. 推荐方案（最终选型）

采用 **Next.js App Router + OpenNext（Cloudflare Workers 目标）+ Supabase Auth + 本地 MDX 内容流水线**。

### 3.1 方案理由

- 相比“全量动态 SSR”，该方案能在不违背 SSR 主策略前提下显著降低边缘计算成本。
- 相比“前后端强拆分”，该方案实现复杂度更低，更适配一次性切换目标。
- Next.js App Router 在路由布局、元数据、服务端渲染、缓存控制方面更利于长期演进。

## 4. 目标架构

## 4.1 分层结构

- **表示层（App Router）**

  - `app/` 路由、布局、页面组件、路由级 `metadata`
  - 仅负责请求编排与页面渲染，不直接包含复杂业务逻辑

- **内容层（Content Pipeline）**

  - 解析 Markdown/MDX、Frontmatter 校验、目录与标签索引构建
  - 统一输出内容领域模型（Post/Column/PageMeta）

- **领域层（Domain Services）**

  - SEO 规则、Sitemap 规则、路由映射、搜索索引读取
  - 独立于框架 API，便于单元测试

- **基础设施层（Infra）**
  - Supabase 客户端（服务端/浏览器端分离）
  - Cloudflare 运行时适配（环境变量、请求上下文、缓存）

## 4.2 关键模块设计

- `src/content/*`

  - `mdx-loader.ts`：内容读取与解析
  - `frontmatter-schema.ts`：Frontmatter 校验（类型安全）
  - `content-index.ts`：构建文章与专栏索引

- `src/domain/seo/*`

  - `meta-builder.ts`：统一生成 metadata 字段
  - `route-seo-map.ts`：路由到 SEO 策略映射
  - `sitemap-builder.ts`：站点地图条目构建

- `src/domain/auth/*`

  - `supabase-auth-service.ts`：会话读取、用户信息读取、权限判断

- `src/lib/*`
  - `env.ts`：环境变量读取与断言
  - `cache.ts`：缓存策略封装（页面/数据级）

## 5. 路由与渲染策略

## 5.1 路由迁移规则

- Remix `app/routes/*.tsx` 迁移为 Next App Router 的 `app/**/page.tsx`
- 原动态路由（如 `blog.$.tsx`、`column.$column.tsx`）迁移为 `[slug]` 形式
- 原 sitemap 路由迁移为 `app/sitemap.ts` 或 `app/sitemap.xml/route.ts`
- 原搜索页按业务需求保持 SSR，支持实时查询参数

## 5.2 SSR 优先策略

- 默认页面采用 SSR 路径。
- 纯内容详情页允许按内容更新时间做缓存或再验证，避免每次请求都触发完整解析。
- 对 SEO 强相关页面保证稳定首屏 HTML 输出，避免依赖客户端拼装。

## 6. 认证与会话（Supabase Auth）

- 使用 Supabase Auth 替代 Clerk。
- 认证能力边界：
  - 登录/登出
  - 服务端读取会话
  - 页面鉴权守卫（中间件或服务端判断）
- 鉴权模块与页面解耦：页面仅消费 `getCurrentUser()` 等抽象接口，不直接访问 SDK 细节。

## 7. SEO 与站点一致性

- SEO 采用单一元数据构建入口，避免页面各自拼接导致规则漂移。
- sitemap、页面 metadata、canonical 规则由同一套路由映射驱动。
- 保留并扩展现有 SEO 一致性测试思路，确保迁移后搜索引擎行为可预测。

## 8. Cloudflare Workers 部署设计

## 8.1 构建与产物

- 构建链路：Next.js 构建 -> OpenNext 适配 -> Cloudflare Workers 产物。
- 部署命令由 CI 统一执行，避免本地脚本分叉。

## 8.2 运行时约束

- 避免依赖 Node 专属 API（或通过兼容层明确隔离）。
- 所有密钥与环境变量通过 Cloudflare 平台注入，不写入仓库。
- 关键响应（HTML、sitemap、静态资源）配置明确缓存策略。

## 9. 一次性切换发布策略

- 新站在预发布域完成全量验收（功能、SEO、性能、错误监控）。
- 保持旧站线上运行直到新站达到切换门槛。
- 切换窗口执行 DNS/路由切流，完成后进入短期观测期。
- 预设回滚路径：若出现严重故障，在窗口内快速恢复旧站。

## 10. 测试与验收标准

## 10.1 测试分层

- **单元测试**：内容解析、SEO 规则、路由映射、鉴权服务
- **集成测试**：关键页面服务端渲染输出、metadata 与 sitemap 一致性
- **端到端冒烟**：首页、文章页、专栏页、搜索、登录状态关键路径

## 10.2 验收门槛

- 关键路由 100% 可访问且无阻断错误
- 核心 SEO 字段（title/description/canonical/og）与预期一致
- sitemap 与可索引路由一致
- 登录与会话行为正确
- Cloudflare Workers 部署成功且无严重运行时异常

## 11. 风险与缓解

- **风险：全量重构范围大，遗漏边缘路由**

  - 缓解：建立路由清单，逐项对照验收

- **风险：SSR 成本和延迟上升**

  - 缓解：内容路由启用缓存与再验证策略

- **风险：Auth 迁移导致会话行为差异**

  - 缓解：先做鉴权能力契约测试，再接入页面

- **风险：一次性切换放大发布风险**
  - 缓解：严格预发布回归 + 明确回滚流程

## 12. 范围边界（YAGNI）

本次不纳入：

- 与迁移无直接关系的视觉改版
- 非关键业务模块的大规模重构
- 新增复杂推荐系统/个性化引擎
- 多云部署抽象层

---

该设计已收敛为可执行基线，下一步将进入实现计划编写阶段（按模块拆分任务、顺序、检查点与回归策略）。
