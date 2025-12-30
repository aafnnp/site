import React from "react";
import { Link } from "@remix-run/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
} from "~/components/ui/Card";
import { Badge } from "~/components/ui/Badge";

/**
 * 文章卡片属性接口
 */
export interface PostCardProps {
  /** 文章 slug */
  slug: string;
  /** 文章标题 */
  title: string;
  /** 发布日期 */
  date?: string;
  /** 文章描述/摘要 */
  description?: string;
  /** 标签列表 */
  tags?: string[];
  /** 封面图 */
  cover?: string;
}

/**
 * 基于 slug 生成稳定的随机图片 URL
 * 使用 Picsum Photos 服务，通过 seed 确保同一文章始终显示同一张图片
 *
 * @param slug - 文章 slug，用作生成图片的种子
 * @param width - 图片宽度，默认 800
 * @param height - 图片高度，默认 400
 * @returns 随机图片 URL
 */
function getRandomImageUrl(
  slug: string,
  width: number = 800,
  height: number = 400
): string {
  // 将 slug 转换为数字种子（简单哈希）
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    const char = slug.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // 转换为 32 位整数
  }
  // 使用绝对值确保为正数，并限制范围
  const seed = Math.abs(hash) % 1000;

  // 使用 Picsum Photos 服务，支持基于 seed 的稳定随机图片
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

/**
 * 文章卡片组件
 *
 * 用于在博客列表页展示文章信息
 */
export const PostCard: React.FC<PostCardProps> = ({
  slug,
  title,
  date,
  description,
  tags = [],
  cover,
}) => {
  // 如果没有封面图，使用基于 slug 的随机图片
  const imageUrl = cover || getRandomImageUrl(slug);

  return (
    <Link to={slug} className="block">
      <Card hoverable className="h-full">
        <div className="w-full h-48 mb-4 overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-700">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            onError={(e) => {
              // 图片加载失败时使用备用图片
              e.currentTarget.src = `https://picsum.photos/800/400?random=${Date.now()}`;
            }}
          />
        </div>
        <CardHeader>
          {date && (
            <time className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-300 mb-2">
              {date}
            </time>
          )}
          <CardTitle className="mb-2 line-clamp-2">{title}</CardTitle>
          {description && (
            <CardDescription className="line-clamp-3">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        {tags.length > 0 && (
          <CardBody>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="default">+{tags.length - 3}</Badge>
              )}
            </div>
          </CardBody>
        )}
      </Card>
    </Link>
  );
};
