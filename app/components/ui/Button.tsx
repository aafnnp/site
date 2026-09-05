import React from "react";

/**
 * 按钮组件的尺寸类型
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * 按钮组件的变体类型
 */
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

/**
 * 按钮组件属性接口
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 按钮尺寸 */
  size?: ButtonSize;
  /** 按钮变体 */
  variant?: ButtonVariant;
  /** 是否显示加载状态 */
  loading?: boolean;
  /** 是否全宽 */
  fullWidth?: boolean;
  /** 子元素 */
  children: React.ReactNode;
}

/**
 * 按钮组件样式映射
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-600 hover:bg-primary-700 text-white border-transparent",
  secondary:
    "bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 border-transparent",
  outline:
    "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600",
  ghost:
    "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border-transparent",
  danger: "bg-red-600 hover:bg-red-700 text-white border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

/**
 * 按钮组件
 *
 * 提供多种样式和尺寸的可复用按钮组件
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">点击我</Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "primary",
  loading = false,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg border transition duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${widthStyle} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};
