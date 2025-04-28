"use client";
import Link from "next/link";
import {
  FaBookOpen,
  FaHouseChimney,
  FaMailchimp,
  FaGithub,
  FaTwitter,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";
import { useLocale } from "@/components/LocaleProvider";

// 导航链接项类型定义
type LinkItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

// 动画配置
const transitionConfig = {
  type: "spring",
  bounce: 0.25,
  stiffness: 130,
  damping: 9,
  duration: 0.3,
};

const Navigation = () => {
  const pathName = usePathname();
  const [hoverPath, setHoverPath] = useState(pathName);
  const { messages } = useLocale();

  // 菜单文本配置已抽离到 locale
  const renderNavLinks = (items: LinkItem[]) => {
    return items.map((item) => (
      <li key={item.name} className="rounded">
        <Link
          href={item.href}
          className="translate-0 group relative flex flex-row items-center rounded-lg px-4 py-2"
          onMouseOver={() => setHoverPath(item.href)}
          onMouseLeave={() => setHoverPath(pathName)}
        >
          {item.icon}
          <span className="mx-2 font-medium leading-6 print:md:inline">
            {messages.menu[item.name]}
          </span>
          {item.href === hoverPath && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-full bg-black/10 rounded-md -z-10"
              layoutId="navbar"
              aria-hidden="true"
              transition={transitionConfig}
            />
          )}
        </Link>
      </li>
    ));
  };

  return (
    <>
      <header className="bg-white">
        <section className="mx-auto flex justify-center max-w-4xl flex-wrap gap-8 px-4 py-8 sm:px-8">
          <div
            className="flex-grow text-center font-medium"
            style={{ flexBasis: "25rem" }}
          >
            <p aria-hidden className="text-4xl">
              Hi, I'm
            </p>
            <h1 className="mb-8 text-5xl">
              <Link href="/">Manon.icu</Link>
            </h1>
            <h2 className="mx-auto max-w-[35ch] text-xl">
              I'm here to make you a better developer by teaching you everything
              I know about building for the web.
            </h2>
          </div>
        </section>
      </header>
      <nav className="bg-white sticky top-0 z-30 mb-8 border-b border-gray-100 py-1">
        <ul className="flex flex-row flex-wrap justify-center">
          {renderNavLinks(LinkItems)}
        </ul>
      </nav>
    </>
  );
};

const LinkItems: LinkItem[] = [
  { name: "Home", href: "/", icon: <FaHouseChimney className="w-6 h-6" /> },
  { name: "Blog", href: "/blog", icon: <FaBookOpen className="w-6 h-6" /> },
  {
    name: "Contact",
    href: "/contact",
    icon: <FaMailchimp className="w-6 h-6" />,
  },
  {
    name: "Github",
    href: "https://github.com/aafnnp",
    icon: <FaGithub className="w-6 h-6" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/aafnnp",
    icon: <FaTwitter className="w-6 h-6" />,
  },
];

export default Navigation;
