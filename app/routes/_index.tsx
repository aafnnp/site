import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData, Link } from "@remix-run/react";
import { motion } from "motion/react";
import {
  FiBookOpen,
  FiArrowRight,
  FiCode,
  FiGithub,
  FiTwitter,
  FiBox,
  FiTrendingUp,
} from "react-icons/fi";
import { SITE_URL, SITE_NAME, TWITTER_HANDLE } from "../utils/seo";
import { PostCard } from "~/components/blog/PostCard";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
} from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";
import { Badge } from "~/components/ui/Badge";
import { Footer } from "~/components/layout";

export const meta: MetaFunction = () => {
  const title = `${SITE_NAME} - 技术博客与开发工具集合`;
  const description =
    "分享技术文章、开发指南和实用工具，帮助开发者提升技能和工作效率";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content: "技术博客, 开发工具, 前端开发, 全栈开发, Web开发, 编程教程",
    },
    { tagName: "link", rel: "canonical", href: SITE_URL },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${SITE_URL}/og-default.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${SITE_URL}/og-default.png` },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { getPostsSorted } = await import("../utils/posts.server");

  // 获取最新文章
  const allPosts = getPostsSorted();
  const latestPosts = allPosts.slice(0, 6);

  return json({ latestPosts });
}

export default function HomePage() {
  const { latestPosts } = useLoaderData<typeof loader>();

  const features = [
    {
      icon: FiBookOpen,
      title: "技术博客",
      description: "分享前端、后端、移动端等各领域的技术文章和开发经验",
      href: "/blog",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiBox,
      title: "实用工具",
      description: "提供各种开发工具和应用，提升工作效率",
      href: "/apps",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FiCode,
      title: "开源项目",
      description: "参与开源社区，分享代码和经验",
      href: "https://github.com/aafnnp",
      color: "from-green-500 to-emerald-500",
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="primary" className="mb-6">
              <FiTrendingUp className="w-3 h-3 mr-1" />
              技术博客与开发工具
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent leading-tight">
              {SITE_NAME}
              <span className="block text-xl sm:text-2xl lg:text-3xl mt-2 text-gray-600 dark:text-gray-400 font-normal">
                分享技术，创造价值
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              专注于技术文章分享和实用工具开发，帮助开发者提升技能和工作效率
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/blog">
                <Button size="lg" variant="primary">
                  <FiBookOpen className="w-5 h-5 mr-2" />
                  浏览文章
                  <FiArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/apps">
                <Button size="lg" variant="outline">
                  <FiBox className="w-5 h-5 mr-2" />
                  探索应用
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              主要功能
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              提供技术内容分享和实用工具开发
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.external ? (
                  <a
                    href={feature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card hoverable className="h-full">
                      <CardHeader>
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white w-fit mb-3`}
                        >
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardBody>
                    </Card>
                  </a>
                ) : (
                  <Link to={feature.href}>
                    <Card hoverable className="h-full">
                      <CardHeader>
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white w-fit mb-3`}
                        >
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardBody>
                    </Card>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      {latestPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  最新文章
                </h2>
                <Link to="/blog">
                  <Button variant="ghost" size="sm">
                    查看更多
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                分享最新的技术文章和开发经验
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PostCard
                    slug={post.slug}
                    title={post.data?.title || "无标题"}
                    date={post.data?.date}
                    description={
                      (post.data as any)?.description || post.excerpt
                    }
                    tags={post.data?.tags}
                    cover={(post.data as any)?.cover}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-primary-500/10 border-primary-500/20">
              <CardBody>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  开始探索
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  浏览技术文章，使用实用工具，提升开发技能
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/blog">
                    <Button size="lg" variant="primary">
                      <FiBookOpen className="w-5 h-5 mr-2" />
                      阅读文章
                    </Button>
                  </Link>
                  <Link to="/apps">
                    <Button size="lg" variant="outline">
                      <FiBox className="w-5 h-5 mr-2" />
                      查看应用
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-6 mt-8">
                  <a
                    href="https://github.com/aafnnp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://twitter.com/aafnnp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiTwitter className="w-5 h-5" />
                    <span>Twitter</span>
                  </a>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
