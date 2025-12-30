import { useEffect, useState } from "react";

/**
 * 阅读进度组件
 *
 * 显示文章阅读进度条
 */
export const ReadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const scrolled = scrollTop / scrollableHeight;
      setProgress(Math.min(100, Math.max(0, scrolled * 100)));
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-fixed">
      <div
        className="h-full bg-primary-600 dark:bg-primary-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
