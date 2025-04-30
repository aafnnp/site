"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface BlogLayoutProps {
  children: ReactNode;
}

export default async function BlogLayout({ children }: BlogLayoutProps) {
  const pathname = usePathname();
  // 假设 allTags 通过 props 或 context 传入

  return (
    <div className="flex">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-3xl px-4 py-12 flex-1"
      >
        {children}
      </motion.div>
    </div>
  );
}
