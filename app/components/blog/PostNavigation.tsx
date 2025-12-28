import { Link } from '@remix-run/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Card } from '~/components/ui/Card';

/**
 * 文章导航项接口
 */
interface PostNavItem {
  slug: string;
  title: string;
}

/**
 * 文章导航组件属性
 */
export interface PostNavigationProps {
  /** 上一篇文章 */
  prevPost?: PostNavItem;
  /** 下一篇文章 */
  nextPost?: PostNavItem;
}

/**
 * 文章导航组件
 * 
 * 显示上一篇/下一篇文章导航
 */
export const PostNavigation: React.FC<PostNavigationProps> = ({
  prevPost,
  nextPost,
}) => {
  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
      {prevPost && (
        <Link to={prevPost.slug}>
          <Card hoverable className="h-full">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                <FiChevronLeft className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">上一篇文章</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {prevPost.title}
                </div>
              </div>
            </div>
          </Card>
        </Link>
      )}

      {nextPost && (
        <Link to={nextPost.slug} className={prevPost ? '' : 'md:col-start-2'}>
          <Card hoverable className="h-full">
            <div className="flex items-center gap-3">
              <div className="flex-1 min-w-0 text-right">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">下一篇文章</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {nextPost.title}
                </div>
              </div>
              <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                <FiChevronRight className="w-5 h-5" />
              </div>
            </div>
          </Card>
        </Link>
      )}
    </div>
  );
};

