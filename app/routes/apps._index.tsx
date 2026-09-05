import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { motion } from "motion/react";
import { SITE_URL, SITE_NAME } from "../utils/seo";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
} from "~/components/ui/Card";
import { Badge } from "~/components/ui/Badge";
import { FiBox, FiZap } from "react-icons/fi";

export const meta: MetaFunction = () => {
  const title = "应用中心";
  const description = "探索我们开发的各种实用工具和应用";

  return [
    { title: `${title} - ${SITE_NAME}` },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/apps` },
  ];
};

/**
 * 应用信息接口
 */
interface AppInfo {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  tags: string[];
  features: string[];
  status: "active" | "beta" | "coming-soon";
}

/**
 * 应用列表数据
 */
const apps: AppInfo[] = [
  {
    id: "kit",
    name: "Kit",
    description:
      "现代化多功能工具箱，集成70+种高频开发与生活工具，完全本地运行，保护数据隐私",
    icon: <FiBox className="w-8 h-8" />,
    href: "/apps/kit",
    tags: ["工具", "开发", "生产力"],
    features: ["70+ 工具", "本地运行", "隐私安全", "跨平台"],
    status: "active",
  },
  // 可以在这里添加更多应用
];

export default function AppsIndex() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            应用中心
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            探索我们开发的各种实用工具和应用，提升您的工作效率
          </p>
        </div>

        {/* 应用列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={app.href}>
                <Card hoverable className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        {app.icon}
                      </div>
                      {app.status === "active" && (
                        <Badge variant="success">可用</Badge>
                      )}
                      {app.status === "beta" && (
                        <Badge variant="warning">测试版</Badge>
                      )}
                      {app.status === "coming-soon" && (
                        <Badge variant="default">即将推出</Badge>
                      )}
                    </div>
                    <CardTitle className="mb-2">{app.name}</CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.tags.map((tag) => (
                        <Badge key={tag} variant="default">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {app.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <FiZap className="w-4 h-4 text-primary-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 空状态提示 */}
        {apps.length === 0 && (
          <div className="text-center py-16">
            <FiBox className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">暂无应用</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
