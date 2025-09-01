// 构建时预处理内容文件的脚本
const fs = require('fs');
const path = require('path');

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    if (file === '.DS_Store') return;
    
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      fileList.push({
        path: filePath,
        content: content
      });
    }
  });
  
  return fileList;
}

function preprocessContent() {
  const contentDir = path.join(process.cwd(), 'src/content');
  const outputDir = path.join(process.cwd(), 'src/data');
  
  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const files = getAllFiles(contentDir);
  
  // 生成预处理的数据文件
  const output = {
    files: files,
    generatedAt: new Date().toISOString()
  };
  
  fs.writeFileSync(
    path.join(outputDir, 'preprocessed-content.json'),
    JSON.stringify(output, null, 2)
  );
  
  console.log(`Preprocessed ${files.length} content files`);
}

if (require.main === module) {
  preprocessContent();
}

module.exports = { preprocessContent };