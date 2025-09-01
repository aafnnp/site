# Cloudflare Pages 部署指南

本项目已经配置为支持 Cloudflare Pages 部署。

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 构建项目

```bash
npm run build
```

### 3. 本地开发

```bash
# 使用 Remix 开发服务器
npm run dev

# 或使用 Wrangler 开发服务器（模拟 Cloudflare 环境）
npm run dev:wrangler
```

### 4. 部署到 Cloudflare Pages

#### 方法一：使用 Wrangler CLI

```bash
# 首次部署需要登录
npx wrangler login

# 部署
npm run deploy
```

#### 方法二：通过 Cloudflare Dashboard

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 Pages 部分
3. 连接你的 GitHub 仓库
4. 设置构建配置：
   - 构建命令: `npm run build`
   - 输出目录: `build/client`
   - 根目录: `/`

## 配置文件说明

### wrangler.toml

Cloudflare Workers/Pages 的配置文件，包含：

- 项目名称和兼容性设置
- 构建命令配置
- 环境变量配置

### functions/[[path]].ts

Cloudflare Pages Functions 的入口文件，处理所有服务器端请求。

### vite.config.ts

已添加 `cloudflareDevProxyVitePlugin` 以支持本地 Cloudflare 环境模拟。

## 环境变量

在 Cloudflare Pages 设置中添加必要的环境变量：

- `NODE_ENV=production`
- 其他应用需要的环境变量

## 注意事项

1. **构建要求**: 部署前必须先运行 `npm run build`
2. **Node.js 兼容性**: 已启用 `nodejs_compat` 标志以支持 Node.js API
3. **静态资源**: 放在 `public/` 目录下的文件会自动部署到 CDN

## 故障排除

### 构建失败

- 检查所有依赖是否正确安装
- 确保 TypeScript 配置正确

### 部署失败

- 检查 `wrangler.toml` 配置
- 确保 Cloudflare 账户有足够权限
- 检查构建输出目录是否正确

## 性能优化

- 所有静态资源通过 Cloudflare CDN 分发
- 服务器端渲染在边缘节点执行
- 自动启用 HTTP/2 和 Brotli 压缩
