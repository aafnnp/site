import { Link, useLocation, useNavigate } from "@remix-run/react";
import {
  FaBookOpen,
  FaHouseChimney,
  FaMailchimp,
  FaBox,
} from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale } from "~/components/LocaleProvider";
import { ThemeToggle } from "~/components/ThemeToggle";
import { FiSearch, FiX, FiMenu, FiChevronDown } from "react-icons/fi";
import { Header } from "~/components/layout";
import { getAllColumns } from "~/utils/columns";

/**
 * 导航链接项类型定义
 */
type LinkItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
};

const LinkItems: LinkItem[] = [
  {
    name: "Home",
    href: "/",
    icon: <FaHouseChimney className="w-5 h-5" />,
  },
  {
    name: "Apps",
    href: "/apps",
    icon: <FaBox className="w-5 h-5" />,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <FaBookOpen className="w-5 h-5" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <FaMailchimp className="w-5 h-5" />,
  },
];

/**
 * 导航组件
 *
 * 提供响应式导航栏，支持移动端菜单和搜索功能
 */
const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;
  const [hoverPath, setHoverPath] = useState(pathName);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [columnsMenuOpen, setColumnsMenuOpen] = useState(false);
  const columnsMenuRef = useRef<HTMLLIElement>(null);
  const { messages } = useLocale();
  const columns = getAllColumns();

  // 检查是否在专栏页面
  const isColumnPage = pathName.startsWith("/column/");

  // 关闭移动端菜单当路由变化时
  useEffect(() => {
    setMobileMenuOpen(false);
    setColumnsMenuOpen(false);
  }, [pathName]);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        columnsMenuRef.current &&
        !columnsMenuRef.current.contains(event.target as Node)
      ) {
        setColumnsMenuOpen(false);
      }
    };

    if (columnsMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [columnsMenuOpen]);

  // 处理搜索
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  // 渲染导航链接
  const renderNavLinks = (items: LinkItem[], isMobile = false) => {
    return items.map((item) => {
      // 对于 /apps 路径，需要匹配 /apps 及其子路径
      const isActive =
        item.href === pathName ||
        (item.href === "/apps" && pathName.startsWith("/apps"));
      const linkContent = (
        <>
          {item.icon}
          <span className="font-medium leading-6 text-gray-700 dark:text-gray-300">
            {messages.menu[item.name]}
          </span>
          {isActive && !isMobile && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
              layoutId="navbar-indicator"
              aria-hidden="true"
              transition={{
                type: "spring",
                bounce: 0.25,
                stiffness: 130,
                damping: 9,
                duration: 0.3,
              }}
            />
          )}
        </>
      );

      const linkClassName = `group relative flex flex-row items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
        isActive
          ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      }`;

      if (item.external) {
        return (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
              onMouseOver={() => !isMobile && setHoverPath(item.href)}
              onMouseLeave={() => !isMobile && setHoverPath(pathName)}
            >
              {linkContent}
            </a>
          </li>
        );
      }

      return (
        <li key={item.name}>
          <Link
            to={item.href}
            className={linkClassName}
            onMouseOver={() => !isMobile && setHoverPath(item.href)}
            onMouseLeave={() => !isMobile && setHoverPath(pathName)}
          >
            {linkContent}
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <Header>
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <span>🎯</span>
              <span className="hidden sm:inline">Manon.icu</span>
            </Link>

            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center gap-2">
              <ul className="flex items-center gap-1">
                {renderNavLinks(LinkItems)}

                {/* 专栏下拉菜单 */}
                <li className="relative" ref={columnsMenuRef}>
                  <button
                    onClick={() => setColumnsMenuOpen(!columnsMenuOpen)}
                    className={`group relative flex flex-row items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isColumnPage
                        ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <FaBookOpen className="w-5 h-5" />
                    <span className="font-medium leading-6">
                      {messages.menu.Columns || "专栏"}
                    </span>
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        columnsMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                    {isColumnPage && !columnsMenuOpen && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                        layoutId="navbar-indicator"
                        aria-hidden="true"
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          stiffness: 130,
                          damping: 9,
                          duration: 0.3,
                        }}
                      />
                    )}
                  </button>

                  {/* 下拉菜单 */}
                  <AnimatePresence>
                    {columnsMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {columns.map((column) => {
                            const isActive =
                              pathName === `/column/${column.slug}`;
                            return (
                              <Link
                                key={column.slug}
                                to={`/column/${column.slug}`}
                                onClick={() => setColumnsMenuOpen(false)}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  isActive
                                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}
                              >
                                <div className="font-medium">{column.name}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                                  {column.description}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ul>

              {/* 搜索按钮 */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="搜索"
              >
                <FiSearch className="w-5 h-5" />
              </button>

              {/* 主题切换 */}
              <ThemeToggle />

              {/* 语言切换 */}
              <LanguageSwitcher />
            </div>

            {/* 移动端菜单按钮 */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="搜索"
              >
                <FiSearch className="w-5 h-5" />
              </button>
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="菜单"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-5 h-5" />
                ) : (
                  <FiMenu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </Header>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <ul className="container mx-auto px-4 py-4 space-y-1">
              {renderNavLinks(LinkItems, true)}

              {/* 移动端专栏菜单 */}
              <li>
                <div className="px-4 py-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    {messages.menu.Columns || "专栏"}
                  </div>
                  <div className="space-y-1">
                    {columns.map((column) => {
                      const isActive = pathName === `/column/${column.slug}`;
                      return (
                        <Link
                          key={column.slug}
                          to={`/column/${column.slug}`}
                          className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                            isActive
                              ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          <div className="font-medium">{column.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                            {column.description}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </li>

              <li>
                <LanguageSwitcher isMobile />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 搜索模态框 */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-modal-backdrop"
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery("");
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl mx-4 bg-white dark:bg-gray-900 rounded-xl shadow-2xl z-modal"
            >
              <form onSubmit={handleSearch} className="p-4">
                <div className="flex items-center gap-2">
                  <FiSearch className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索文章..."
                    className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/**
 * 语言切换组件
 */
function LanguageSwitcher({ isMobile = false }: { isMobile?: boolean }) {
  const { locale, setLocaleMessages } = useLocale();
  const className = isMobile
    ? "w-full flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    : "px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-900 rounded-lg shadow hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors";

  return (
    <button
      onClick={() => setLocaleMessages(locale === "zh-CN" ? "en-US" : "zh-CN")}
      className={className}
    >
      {locale === "zh-CN" ? "English" : "中文"}
    </button>
  );
}

export default Navigation;
