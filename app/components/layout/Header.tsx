import React from "react";

/**
 * 页头组件属性接口
 */
export interface HeaderProps {
  /** 子元素 */
  children: React.ReactNode;
  /** 自定义类名 */
  className?: string;
}

/**
 * 页头组件
 *
 * 提供统一的页头容器样式
 */
export const Header: React.FC<HeaderProps> = ({ children, className = "" }) => {
  return (
    <header
      className={`sticky top-0 z-sticky bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 ${className}`}
    >
      {children}
    </header>
  );
};
