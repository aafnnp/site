"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  const pathname = usePathname();

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
