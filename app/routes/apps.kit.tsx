import { MetaFunction } from "@remix-run/node";
import { motion } from "motion/react";
import {
  FiZap,
  FiShield,
  FiSmartphone,
  FiDownload,
  FiGithub,
  FiStar,
  FiFileText,
  FiHash,
  FiClock,
  FiDatabase,
  FiGlobe,
  FiShuffle,
  FiCode,
  FiArrowRight,
  FiCheckCircle,
  FiAward,
  FiTrendingUp,
  FiHeart,
  FiMonitor,
  FiLayers,
} from "react-icons/fi";
import Ad from "../components/ad";
import { SITE_URL, TWITTER_HANDLE } from "../utils/seo";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
} from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import { Badge } from "~/components/ui/Badge";
import { Footer } from "~/components/layout";

export const meta: MetaFunction = () => {
  const title = "Kit - 现代化多功能工具箱";
  const description =
    "集成70+种高频开发与生活工具，完全本地运行，保护数据隐私，提升工作效率";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content: "工具箱, 开发工具, 在线工具, Kit, 文本处理, 图片处理, 加密解密",
    },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/apps/kit` },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE_URL}/apps/kit` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${SITE_URL}/og-default.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${SITE_URL}/og-default.png` },
  ];
};

export default function KitAppPage() {
  const features = [
    {
      icon: FiFileText,
      title: "文本处理",
      description: "字数统计、大小写转换、Markdown预览、正则测试等",
      count: "10+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiLayers,
      title: "图片音视频",
      description: "图片压缩、格式转换、视频剪辑、音频处理等",
      count: "12+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FiHash,
      title: "加解密哈希",
      description: "MD5、SHA-256、Bcrypt、文件校验、密码生成",
      count: "5+",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: FiClock,
      title: "日期时间",
      description: "时间戳转换、Cron解析、时区换算、日期计算",
      count: "4+",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: FiDatabase,
      title: "数据转换",
      description: "JSON美化、YAML转换、Base64编解码等",
      count: "9+",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: FiGlobe,
      title: "网络工具",
      description: "HTTP状态码、UA解析、DNS查询、IP信息等",
      count: "6+",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: FiShuffle,
      title: "随机生成",
      description: "UUID生成、二维码、条形码、虚拟用户等",
      count: "6+",
      color: "from-rose-500 to-pink-500",
    },
  ];

  const highlights = [
    {
      icon: FiShield,
      title: "隐私安全",
      description: "所有工具完全本地运行，数据不上传云端，保护您的隐私安全",
    },
    {
      icon: FiZap,
      title: "极速体验",
      description: "基于现代Web技术构建，响应迅速，支持离线使用",
    },
    {
      icon: FiSmartphone,
      title: "跨平台支持",
      description: "支持Web端和桌面端，Windows、macOS、Linux全平台覆盖",
    },
    {
      icon: FiCode,
      title: "开源免费",
      description: "MIT开源协议，完全免费使用，欢迎贡献代码",
    },
  ];

  const stats = [
    { label: "内置工具", value: "70+", icon: FiAward },
    { label: "工具分类", value: "8", icon: FiLayers },
    { label: "技术栈", value: "现代化", icon: FiTrendingUp },
    { label: "开源协议", value: "MIT", icon: FiHeart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="primary" className="mb-6">
              <FiAward className="w-3 h-3 mr-1" />
              现代化多功能工具箱
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent leading-tight">
              Kit
              <span className="block text-xl sm:text-2xl lg:text-3xl mt-2 text-gray-600 dark:text-gray-400 font-normal">
                开箱即用的工具集合
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              集成{" "}
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                70+ 种
              </span>{" "}
              高频开发与生活工具，
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                完全本地运行
              </span>
              ，保护数据隐私，提升工作效率
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                variant="primary"
                onClick={() => {
                  window.open("https://kit.manon.icu/", "_blank");
                }}
              >
                <FiMonitor className="w-5 h-5 mr-2" />
                立即体验 Web 版
                <FiArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  window.open(
                    "https://github.com/aafnnp/kit/releases",
                    "_blank"
                  );
                }}
              >
                <FiDownload className="w-5 h-5 mr-2" />
                下载桌面版
              </Button>

              <Button
                size="lg"
                variant="ghost"
                onClick={() => {
                  window.open("https://github.com/aafnnp/kit", "_blank");
                }}
              >
                <FiGithub className="w-5 h-5 mr-2" />
                查看源码
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Ad />

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              功能丰富的工具集合
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              涵盖开发、设计、办公等多个场景，满足您的各种需求
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hoverable>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white`}
                      >
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <Badge variant="default">{feature.count}</Badge>
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Ad />

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              为什么选择 Kit？
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              现代化设计理念，注重用户体验与数据安全
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card hoverable>
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 shrink-0">
                        <highlight.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">
                          {highlight.title}
                        </CardTitle>
                        <CardDescription>
                          {highlight.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              现代化技术栈
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              基于最新的前端技术构建，性能卓越，体验流畅
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { name: "React 18", desc: "现代UI框架" },
              { name: "TypeScript", desc: "类型安全" },
              { name: "Vite 6", desc: "极速构建" },
              { name: "TailwindCSS", desc: "原子化CSS" },
              { name: "Tauri 2", desc: "跨平台桌面" },
              { name: "Radix UI", desc: "无障碍组件" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardBody className="text-center">
                    <div className="text-sm font-semibold mb-1 text-gray-900 dark:text-white">
                      {tech.name}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {tech.desc}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-primary-500/10 border-primary-500/20">
              <CardBody>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  开始使用 Kit
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  立即体验这个强大的工具集合，提升您的工作效率
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="primary"
                    onClick={() => {
                      window.open("https://kit-khaki-pi.vercel.app/", "_blank");
                    }}
                  >
                    <FiTrendingUp className="w-5 h-5 mr-2" />
                    立即开始
                    <FiArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      window.open("https://github.com/aafnnp/kit", "_blank");
                    }}
                  >
                    <FiStar className="w-5 h-5 mr-2" />
                    GitHub Star
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-500" />
                    完全免费
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-500" />
                    开源项目
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-500" />
                    隐私安全
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
