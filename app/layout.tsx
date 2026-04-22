interface RootLayoutProps {
  children: any;
}

/**
 * 应用根布局。
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
