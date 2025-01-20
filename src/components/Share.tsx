"use client";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WeiboIcon,
  WeiboShareButton,
} from "next-share";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// 定义共享按钮的通用属性接口
interface ShareButtonProps {
  size?: number;
  round?: boolean;
}

// 定义组件属性接口
interface ShareProps {
  title?: string;
  tag?: string[];
  handle?: string;
}

// 定义共享按钮配置
const SHARE_BUTTONS = [
  {
    Component: TwitterShareButton,
    Icon: TwitterIcon,
    getProps: (url: string, props: ShareProps) => ({
      url,
      title: props.title,
      via: props.handle ?? "manon",
      hashtags: props.tag,
    }),
  },
  {
    Component: WeiboShareButton,
    Icon: WeiboIcon,
    getProps: (url: string, props: ShareProps) => ({
      url,
      title: props.title,
    }),
  },
  {
    Component: EmailShareButton,
    Icon: EmailIcon,
    getProps: (url: string, props: ShareProps) => ({
      url,
      subject: props.title,
      body: "body",
    }),
  },
  {
    Component: RedditShareButton,
    Icon: RedditIcon,
    getProps: (url: string, props: ShareProps) => ({
      url,
      title: props.title,
    }),
  },
  {
    Component: FacebookShareButton,
    Icon: FacebookIcon,
    getProps: (url: string, props: ShareProps) => ({
      url,
      quote: props.title,
      hashtag: props.tag?.[0],
    }),
  },
];

export default function Share({ title, tag, handle }: ShareProps) {
  const pathName = usePathname();
  const [url, setUrl] = useState(pathName);

  useEffect(() => {
    setUrl(window.location.href);
  }, [pathName]);

  if (pathName === "/") return null;

  const buttonProps: ShareButtonProps = {
    size: 24,
    round: true,
  };

  return (
    <div className="flex gap-2 py-4 mb-8 justify-center">
      {SHARE_BUTTONS.map(({ Component, Icon, getProps }, index) => (
        <Component key={index} {...getProps(url, { title, tag, handle })}>
          <Icon {...buttonProps} />
        </Component>
      ))}
    </div>
  );
}
