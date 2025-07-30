"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  FiZap,
  FiShield,
  FiSmartphone,
  FiDownload,
  FiGithub,
  FiStar,
  FiImage,
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

export default function LandingPage() {
  const [_, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: FiFileText,
      title: "文本处理",
      description: "字数统计、大小写转换、Markdown预览、正则测试等",
      count: "10+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiImage,
      title: "颜色设计",
      description: "取色器、渐变生成、阴影制作、圆角可视化等",
      count: "8+",
      color: "from-purple-500 to-pink-500",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <FiAward className="w-4 h-4 mr-2" />
              现代化多功能工具箱
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent leading-tight">
              Kit
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-gray-600 dark:text-gray-400 font-normal">
                开箱即用的工具集合
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              集成{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                70+ 种
              </span>{" "}
              高频开发与生活工具，
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                完全本地运行
              </span>
              ， 保护数据隐私，提升工作效率
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                className="inline-flex items-center px-8 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 group"
                onClick={() => {
                  window.open("https://kit-khaki-pi.vercel.app/", "_blank");
                }}
              >
                <FiMonitor className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                立即体验 Web 版
                <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                className="inline-flex items-center px-8 py-3 text-lg font-medium border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200 group"
                onClick={() => {
                  window.open(
                    "https://github.com/aafnnp/kit/releases",
                    "_blank"
                  );
                }}
              >
                <FiDownload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                下载桌面版
              </button>

              <button
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200 group"
                onClick={() => {
                  window.open("https://github.com/aafnnp/kit", "_blank");
                }}
              >
                <FiGithub className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                查看源码
              </button>
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
                    <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              功能丰富的工具集合
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              涵盖开发、设计、办公等多个场景，满足您的各种需求
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
              >
                <div className="h-full group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500/40 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300">
                      {feature.count}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              为什么选择 Kit？
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              现代化设计理念，注重用户体验与数据安全
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <highlight.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              现代化技术栈
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              基于最新的前端技术构建，性能卓越，体验流畅
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
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
                className="text-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-sm font-semibold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {tech.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-blue-500/10 border border-blue-500/20">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                开始使用 Kit
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                立即体验这个强大的工具集合，提升您的工作效率
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="inline-flex items-center px-8 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 group"
                  onClick={() => {
                    window.open("https://kit-khaki-pi.vercel.app/", "_blank");
                  }}
                >
                  <FiTrendingUp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  立即开始
                  <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  className="inline-flex items-center px-8 py-3 text-lg font-medium border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200 group"
                  onClick={() => {
                    window.open("https://github.com/aafnnp/kit", "_blank");
                  }}
                >
                  <FiStar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  GitHub Star
                </button>
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Kit
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              现代化、开箱即用的多功能工具箱
            </p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200">
                <FiGithub className="w-4 h-4 mr-2" />
                GitHub
              </button>
              <button className="inline-flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200">
                <FiHeart className="w-4 h-4 mr-2" />
                赞助
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-500">
              © 2025 Kit. MIT License. Made with ❤️
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
