import { Outlet } from "@remix-run/react";
import { motion } from "motion/react";
import { useLocation } from "@remix-run/react";

export default function BlogLayout() {
  const location = useLocation();

  return (
    <div className="flex">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-3xl px-4 py-12 flex-1"
      >
        <Outlet />
      </motion.div>
    </div>
  );
}