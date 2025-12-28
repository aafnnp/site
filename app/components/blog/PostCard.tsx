import React from 'react';
import { Link } from '@remix-run/react';
import { Card, CardHeader, CardTitle, CardDescription, CardBody } from '~/components/ui/Card';
import { Badge } from '~/components/ui/Badge';

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
  return (
    <Link to={slug} className="block">
      <Card hoverable className="h-full">
        {cover && (
          <div className="w-full h-48 mb-4 overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-700">
            <img
              src={cover}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              onError={(e) => {
                // 图片加载失败时隐藏
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
        <CardHeader>
          {date && (
            <time className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
              {date}
            </time>
          )}
          <CardTitle className="mb-2 line-clamp-2">{title}</CardTitle>
          {description && (
            <CardDescription className="line-clamp-3">{description}</CardDescription>
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

