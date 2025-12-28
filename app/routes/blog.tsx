import { Outlet } from "@remix-run/react";

/**
 * 博客布局组件
 * 
 * 提供博客页面的统一布局
 */
export default function BlogLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}
