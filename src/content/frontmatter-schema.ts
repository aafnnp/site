export interface Frontmatter {
  title: string;
  date: string;
}

/**
 * 校验并规范化 frontmatter，只保留当前索引所需字段。
 */
export function parseFrontmatter(input: Record<string, unknown>): Frontmatter {
  const title = typeof input.title === "string" ? input.title.trim() : "";
  const rawDate = input.date;
  const date =
    typeof rawDate === "string"
      ? rawDate.trim()
      : rawDate instanceof Date
        ? rawDate.toISOString()
        : "";

  if (!title) {
    throw new Error("frontmatter 缺少 title");
  }

  if (!date) {
    throw new Error("frontmatter 缺少 date");
  }

  if (Number.isNaN(Date.parse(date))) {
    throw new Error(`frontmatter date 非法: ${date}`);
  }

  return { title, date };
}
