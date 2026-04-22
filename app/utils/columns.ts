/**
 * 专栏配置
 * 
 * 定义各个专栏的元数据和匹配规则
 */

/**
 * 专栏元数据接口
 */
export interface ColumnConfig {
  /** 专栏名称 */
  name: string;
  /** 专栏描述 */
  description: string;
  /** 专栏 slug（用于 URL） */
  slug: string;
  /** slug 匹配规则（用于识别文章是否属于该专栏） */
  slugPattern: string;
  /** 专栏图标（可选） */
  icon?: string;
  /** 专栏颜色主题（可选） */
  color?: string;
}

/**
 * 专栏配置映射
 */
export const COLUMNS: Record<string, ColumnConfig> = {
  harmony: {
    name: "HarmonyOS 开发",
    description: "鸿蒙应用开发教程和实战经验，包括 ArkTS 语言、ArkUI 框架、项目实战等内容，适合 Web 开发人员快速上手鸿蒙开发。",
    slug: "harmony",
    slugPattern: "/blog/harmony",
    color: "from-blue-500 to-cyan-500",
  },
  swift: {
    name: "Swift 开发",
    description: "Swift 编程语言学习指南和 iOS/macOS 开发教程，涵盖 Swift 基础语法、高级特性、框架使用等内容。",
    slug: "swift",
    slugPattern: "/blog/swift",
    color: "from-orange-500 to-red-500",
  },
};

/**
 * 获取所有专栏配置
 */
export function getAllColumns(): ColumnConfig[] {
  return Object.values(COLUMNS);
}

/**
 * 根据 slug 获取专栏配置
 */
export function getColumnBySlug(slug: string): ColumnConfig | undefined {
  return COLUMNS[slug];
}

/**
 * 检查专栏 slug 是否有效
 */
export function isValidColumnSlug(slug: string): boolean {
  return slug in COLUMNS;
}

/**
 * 根据文章 slug 判断所属专栏
 */
export function getColumnByPostSlug(postSlug: string): ColumnConfig | undefined {
  for (const column of Object.values(COLUMNS)) {
    if (postSlug.startsWith(column.slugPattern)) {
      return column;
    }
  }
  return undefined;
}

