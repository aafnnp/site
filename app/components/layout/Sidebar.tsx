import React from "react";

/**
 * 侧边栏组件属性接口
 */
export interface SidebarProps {
  /** 子元素 */
  children: React.ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 是否固定在右侧 */
  sticky?: boolean;
}

/**
 * 侧边栏组件
 *
 * 提供统一的侧边栏容器样式
 */
export const Sidebar: React.FC<SidebarProps> = ({
  children,
  className = "",
  sticky = false,
}) => {
  const stickyClass = sticky ? "sticky top-24" : "";

  return (
    <aside className={`flex-none w-64 ${stickyClass} ${className}`}>
      {children}
    </aside>
  );
};
