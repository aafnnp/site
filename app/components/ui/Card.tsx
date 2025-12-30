import React from "react";
import { motion } from "motion/react";

/**
 * 卡片组件属性接口
 */
export interface CardProps {
  /** 子元素 */
  children: React.ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 是否显示悬停效果 */
  hoverable?: boolean;
  /** 点击事件 */
  onClick?: () => void;
  /** 是否填充 */
  padding?: boolean;
}

/**
 * 卡片组件
 *
 * 提供统一的卡片容器样式
 *
 * @example
 * ```tsx
 * <Card hoverable>
 *   <CardHeader>标题</CardHeader>
 *   <CardBody>内容</CardBody>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverable = false,
  onClick,
  padding = true,
}) => {
  const baseStyles =
    "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl";
  const hoverStyles = hoverable
    ? "transition-all duration-300 hover:shadow-lg hover:border-primary-500/40 cursor-pointer"
    : "";
  const paddingStyles = padding ? "p-6" : "";

  const Component = hoverable ? motion.div : "div";
  const motionProps = hoverable
    ? {
        whileHover: { y: -2 },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Component
      className={`${baseStyles} ${hoverStyles} ${paddingStyles} ${className}`}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </Component>
  );
};

/**
 * 卡片头部组件
 */
export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

/**
 * 卡片标题组件
 */
export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h3
    className={`text-lg font-semibold text-gray-900 dark:text-white ${className}`}
  >
    {children}
  </h3>
);

/**
 * 卡片描述组件
 */
export const CardDescription: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <p className={`text-sm text-gray-600 dark:text-gray-300 ${className}`}>
    {children}
  </p>
);

/**
 * 卡片内容组件
 */
export const CardBody: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

/**
 * 卡片底部组件
 */
export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div
    className={`mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`}
  >
    {children}
  </div>
);
