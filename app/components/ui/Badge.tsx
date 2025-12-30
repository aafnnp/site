import React from "react";

/**
 * 徽章组件的变体类型
 */
export type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info";

/**
 * 徽章组件属性接口
 */
export interface BadgeProps {
  /** 徽章文本 */
  children: React.ReactNode;
  /** 徽章变体 */
  variant?: BadgeVariant;
  /** 自定义类名 */
  className?: string;
  /** 是否显示为点状 */
  dot?: boolean;
}

/**
 * 徽章组件样式映射
 */
const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100",
  primary:
    "bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-100",
  success:
    "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-100",
  warning:
    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-100",
  error: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-100",
  info: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-100",
};

/**
 * 徽章组件
 *
 * 用于显示标签、状态等信息的徽章组件
 *
 * @example
 * ```tsx
 * <Badge variant="primary">新</Badge>
 * <Badge variant="success" dot>已完成</Badge>
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
  dot = false,
}) => {
  const baseStyles =
    "inline-flex items-center px-2 py-1 text-xs font-medium rounded-full";
  const variantStyle = variantStyles[variant];

  return (
    <span className={`${baseStyles} ${variantStyle} ${className}`}>
      {dot && (
        <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-current opacity-75" />
      )}
      {children}
    </span>
  );
};
