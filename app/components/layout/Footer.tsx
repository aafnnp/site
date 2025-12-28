import React from "react";
import { Link } from "@remix-run/react";
import { FiGithub, FiHeart } from "react-icons/fi";

/**
 * 页脚组件属性接口
 */
export interface FooterProps {
  /** 自定义类名 */
  className?: string;
}

/**
 * 页脚组件
 *
 * 提供统一的页脚样式和链接
 */
export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-12 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Manon.icu
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            技术博客与开发工具集合
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://github.com/aafnnp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors duration-200"
            >
              <FiGithub className="w-4 h-4 mr-2" />
              GitHub
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors duration-200"
            >
              <FiHeart className="w-4 h-4 mr-2" />
              联系
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-500">
            © {currentYear} Manon.icu. Made with{" "}
            <FiHeart className="inline w-3 h-3 text-red-500" /> by aafnnp
          </div>
        </div>
      </div>
    </footer>
  );
};
