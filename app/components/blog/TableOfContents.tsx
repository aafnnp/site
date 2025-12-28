import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

/**
 * 目录项接口
 */
interface TocItem {
  id: string;
  text: string;
  level: number;
}

/**
 * 目录组件
 * 
 * 自动生成文章目录，支持平滑滚动
 */
export const TableOfContents: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // 提取所有标题
    const headingElements = Array.from(
      document.querySelectorAll('article h2, article h3, article h4')
    );

    const tocItems: TocItem[] = headingElements.map((el, index) => {
      const id = el.id || `heading-${index}`;
      if (!el.id) {
        el.id = id;
      }
      return {
        id,
        text: el.textContent || '',
        level: parseInt(el.tagName.charAt(1)),
      };
    });

    setHeadings(tocItems);

    // 监听滚动，高亮当前章节
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">目录</h3>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <motion.a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToHeading(heading.id);
            }}
            className={`block py-1 px-2 rounded text-sm transition-colors ${
              heading.level === 2
                ? 'font-medium'
                : heading.level === 3
                ? 'pl-4'
                : 'pl-6'
            } ${
              activeId === heading.id
                ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {heading.text}
          </motion.a>
        ))}
      </nav>
    </div>
  );
};

