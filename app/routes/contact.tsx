import { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { motion } from "motion/react";
import {
  FiMail,
  FiTwitter,
  FiGithub,
  FiMessageCircle,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import Ad from "../components/ad";
import { SITE_URL, SITE_NAME, TWITTER_HANDLE } from "../utils/seo";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
} from "~/components/ui/Card";
import { Footer } from "~/components/layout";

export const meta: MetaFunction = () => {
  const title = "联系我";
  const description = "获取联系信息，发送反馈、建议和问题";
  const url = `${SITE_URL}/contact`;

  return [
    { title: `${title} - ${SITE_NAME}` },
    { name: "description", content: description },
    // Canonical
    { tagName: "link", rel: "canonical", href: url },
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${SITE_URL}/og-default.png` },
    // Twitter Card
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
};

/**
 * 联系方式数据配置
 */
const contactMethods = [
  {
    icon: FiMail,
    title: "邮箱",
    description: "发送邮件给我",
    value: "gemini0525@foxmail.com",
    href: "mailto:gemini0525@foxmail.com",
    color: "from-blue-500 to-cyan-500",
    action: "发送邮件",
  },
  {
    icon: FiTwitter,
    title: "Twitter",
    description: "在 Twitter 上联系我",
    value: "@aafnnp",
    href: "https://twitter.com/aafnnp",
    color: "from-sky-500 to-blue-500",
    action: "访问 Twitter",
    external: true,
  },
  {
    icon: FiGithub,
    title: "GitHub",
    description: "查看我的开源项目",
    value: "aafnnp",
    href: "https://github.com/aafnnp",
    color: "from-gray-700 to-gray-900",
    action: "访问 GitHub",
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
        <Ad />

        {/* Hero Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent">
              联系我
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4">
              有想法、建议或问题？欢迎通过以下方式联系我
            </p>
            <p className="text-base text-gray-500 dark:text-gray-500">
              如果发现文章中有过时信息，请发送链接给我，我会尽快更新
            </p>
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              const cardContent = (
                <Card hoverable className="h-full">
                  <CardHeader>
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${method.color} text-white w-fit mb-4`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription className="text-base">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardBody>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          联系方式
                        </p>
                        <p className="text-lg font-medium text-gray-900 dark:text-white break-all">
                          {method.value}
                        </p>
                      </div>
                      <div className="inline-flex items-center justify-center font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 text-sm w-full transition-colors duration-200 pointer-events-none">
                        <FiSend className="w-4 h-4 mr-2" />
                        {method.action}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              );

              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {method.external ? (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <Link to={method.href}>{cardContent}</Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-primary-500/10 border-primary-500/20">
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-500/20 text-primary-600 dark:text-primary-400 flex-shrink-0">
                    <FiMessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      反馈与建议
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      我欢迎任何形式的反馈和建议。无论是关于网站内容、功能改进，还是技术问题的讨论，都欢迎联系我。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <FiCheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                        <span>文章内容纠错和建议</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <FiCheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                        <span>功能需求和技术交流</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <FiCheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                        <span>合作与项目咨询</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </section>

        <Ad />
      </div>

      <Footer />
    </div>
  );
}
