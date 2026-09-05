import { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { FaGithub, FaHome, FaSitemap, FaTwitter } from "react-icons/fa";
import { motion } from "motion/react";
import { SITE_URL, SITE_NAME, TWITTER_HANDLE } from "../utils/seo";

export const meta: MetaFunction = () => {
  const title = "About";
  const description = "Freelancer, Fullstack Developer, Particular Frontend";
  const url = `${SITE_URL}/about`;

  return [
    { title: `${title} - ${SITE_NAME}` },
    { name: "description", content: description },
    // Canonical
    { tagName: "link", rel: "canonical", href: url },
    // Open Graph
    { property: "og:type", content: "profile" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${SITE_URL}/og-default.png` },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${SITE_URL}/og-default.png` },
  ];
};

// 定义动画和过渡效果的常量
const ANIMATION_CONFIG = {
  opacity: [0, 1, 1, 0, 0],
  scale: [1, 1, 1, 1.1, 1],
};

const TRANSITION_TIMES = [0, 0.05, 0.25, 0.3, 1];
const ANIMATION_DURATION = 12;

export default function About() {
  // 生成过渡效果配置的函数
  const getTransitionConfig = (index: number) => ({
    duration: ANIMATION_DURATION,
    ease: ["linear"],
    times: TRANSITION_TIMES,
    repeat: Infinity,
    delay: 3 * index,
  });

  // 社交媒体链接配置
  const socialLinks = [
    { href: "/", icon: FaHome },
    { href: "https://twitter.com/Manonicu", icon: FaTwitter },
    { href: "https://github.com/Manonicu", icon: FaGithub },
    { href: "/about", icon: FaSitemap },
  ];

  return (
    <div className="absolute flex flex-col justify-between w-screen h-screen overflow-hidden bg-slate-900 top-0 left-0 pt-[100px] px-8 pb-8">
      {/* 背景图片轮播 */}
      {[...Array(4)].map((_, index) => (
        <motion.img
          key={index}
          className="absolute w-screen h-screen top-0 left-0"
          animate={ANIMATION_CONFIG}
          transition={{
            ...getTransitionConfig(index),
            // 修复类型错误，将 ease 从字符串改为数组
            ease: ["linear"],
          }}
          alt="Manon.icu"
          src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/hero-bg-${
            index + 1
          }.jpeg`}
        />
      ))}

      <div className="absolute w-screen bottom-0 left-0 p-4 flex justify-between items-end text-white">
        {/* 个人简介 */}
        <h1>
          <p className="text-2xl">Freelancer</p>
          <p className="text-5xl">Fullstack Developer</p>
          <p className="text-5xl">Particular Frontend</p>
        </h1>

        {/* 滚动指示器 */}
        <div className="scroll-indicator">
          <div className="scroll-indicator-wrapper">
            <div className="scroll-line"></div>
          </div>
        </div>

        {/* 社交媒体链接 */}
        <div className="flex gap-4">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link key={index} to={href}>
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
