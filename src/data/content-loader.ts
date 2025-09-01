// Edge Runtime兼容的内容加载器
import preprocessedData from './preprocessed-content.json';

export interface PreprocessedFile {
  path: string;
  content: string;
}

export interface PreprocessedContent {
  files: PreprocessedFile[];
  generatedAt: string;
}

// 加载预处理的内容数据
export function loadPreprocessedContent(): PreprocessedFile[] {
  return (preprocessedData as PreprocessedContent).files;
}

// 获取所有博客文章文件
export function getBlogFiles(): PreprocessedFile[] {
  const files = loadPreprocessedContent();
  return files.filter(file => 
    file.path.includes('/src/content') && 
    (file.path.endsWith('.mdx') || file.path.endsWith('.md'))
  );
}