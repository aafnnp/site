import { MetaFunction } from "@remix-run/cloudflare";
import { motion } from "motion/react";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiDownload,
  FiFilter,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLock,
  FiMonitor,
  FiSettings,
  FiShield,
} from "react-icons/fi";
import { SITE_URL, TWITTER_HANDLE } from "../utils/seo";
import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import { Badge } from "~/components/ui/Badge";
import { Footer } from "~/components/layout";

const REPOSITORY_URL = "https://github.com/aafnnp/packet-sniffer";
const RELEASES_URL = `${REPOSITORY_URL}/releases`;

export const meta: MetaFunction = () => {
  const title = "Packet Sniffer - 本地 HTTP / HTTPS 抓包与调试工具";
  const description =
    "使用 Packet Sniffer 在本机捕获和检查 HTTP / HTTPS 请求，支持 HTTPS 解密、规则过滤、系统代理集成与 macOS、Windows、Linux。";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content: "Packet Sniffer, HTTP抓包, HTTPS解密, 网络调试, Rust, NSH",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: `${SITE_URL}/apps/packet-sniffer`,
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE_URL}/apps/packet-sniffer` },
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

export default function PacketSnifferPage() {
  const features = [
    {
      icon: FiActivity,
      title: "HTTP / HTTPS 抓包",
      description:
        "通过本地代理统一捕获 HTTP 与 HTTPS 请求，查看请求和响应的状态、耗时、首部与正文。",
    },
    {
      icon: FiLock,
      title: "HTTPS 解密",
      description:
        "使用本机根证书解密 HTTPS 流量进行调试；也可以关闭解密，让 CONNECT 连接仅透明转发。",
    },
    {
      icon: FiFilter,
      title: "筛选与规则",
      description:
        "按 URL、域名、方法和请求类型快速筛选，也可配置规则来阻断请求或调整请求、响应首部。",
    },
    {
      icon: FiLayers,
      title: "请求与响应检查",
      description:
        "并排检查请求和响应详情，支持查看查询参数、首部、JSON 正文以及原始 HTTP 内容。",
    },
    {
      icon: FiDatabase,
      title: "历史记录与标注",
      description:
        "图形界面将请求历史保存在本机，并支持固定请求、高亮和备注，便于回看与对比。",
    },
    {
      icon: FiSettings,
      title: "系统代理集成",
      description:
        "从应用内接管或释放系统代理，并管理 HTTPS 解密使用的根证书。",
    },
  ];

  const highlights = [
    {
      icon: FiShield,
      title: "本地运行",
      description:
        "代理和抓包引擎运行在本机，适用于开发过程中的接口检查与网络问题排查。",
    },
    {
      icon: FiMonitor,
      title: "原生桌面体验",
      description:
        "图形界面基于 NSH 的原生组件构建，同时提供可在无图形界面环境运行的命令行形态。",
    },
    {
      icon: FiGlobe,
      title: "多平台支持",
      description:
        "提供 macOS（Apple Silicon / Intel）、Windows x86_64 与 Linux x86_64 版本。",
    },
    {
      icon: FiCode,
      title: "开源免费",
      description: "基于 Rust 构建并采用 MIT 协议开源，可查看源码和参与项目。",
    },
  ];

  const platforms = [
    { name: "macOS", description: "Apple Silicon / Intel" },
    { name: "Windows", description: "x86_64" },
    { name: "Linux", description: "x86_64" },
  ];

  const stats = [
    { label: "运行方式", value: "本地代理", icon: FiActivity },
    { label: "核心技术", value: "Rust", icon: FiCode },
    { label: "应用形态", value: "CLI + GUI", icon: FiLayers },
    { label: "开源协议", value: "MIT", icon: FiCheckCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
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
              <FiActivity className="w-3 h-3 mr-1" />
              本地网络调试工具
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent leading-tight">
              Packet Sniffer
              <span className="block text-xl sm:text-2xl lg:text-3xl mt-2 text-gray-600 dark:text-gray-400 font-normal">
                看清每一次 HTTP / HTTPS 请求
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              一款基于 Rust 与 NSH 构建的本地抓包代理工具，捕获并检查 HTTP
              与 HTTPS 流量，让接口调试和网络问题排查更直观。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                variant="primary"
                onClick={() => window.open(RELEASES_URL, "_blank")}
              >
                <FiDownload className="w-5 h-5 mr-2" />
                查看版本与下载
                <FiArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(REPOSITORY_URL, "_blank")}
              >
                <FiGithub className="w-5 h-5 mr-2" />
                查看项目源码
              </Button>
            </div>

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
              从流量捕获到请求分析
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              在一个桌面界面中捕获请求、筛选流量，并检查请求与响应细节
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
                <Card hoverable className="h-full">
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-fit mb-3">
                      <feature.icon className="w-6 h-6" />
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
              为日常开发调试而设计
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              本地处理流量，结合原生桌面界面和实用的请求检查能力
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
                <Card hoverable className="h-full">
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
              支持主流桌面平台
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              前往项目 Releases 页面获取对应平台的安装包
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardBody className="text-center">
                    <FiMonitor className="w-7 h-7 mx-auto mb-3 text-primary-600 dark:text-primary-400" />
                    <div className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                      {platform.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {platform.description}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                  开始检查你的网络请求
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  查看项目说明、下载适用于你平台的版本，或浏览源代码了解更多细节。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="primary"
                    onClick={() => window.open(RELEASES_URL, "_blank")}
                  >
                    <FiDownload className="w-5 h-5 mr-2" />
                    前往下载
                    <FiArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open(REPOSITORY_URL, "_blank")}
                  >
                    <FiGithub className="w-5 h-5 mr-2" />
                    浏览 GitHub
                  </Button>
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
