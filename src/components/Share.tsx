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

export default function Share({
  title,
  tag,
  handle,
}: {
  title: string;
  tag: string[];
  handle?: string;
}) {
  const pathName = usePathname();
  const [url, setUrl] = useState(pathName);

  useEffect(() => {
    setUrl(location.href);
  }, [pathName]);

  return pathName === "/" ? null : (
    <div className={"flex gap-2 py-4 mb-8 justify-center"}>
      <TwitterShareButton
        url={url}
        title={title}
        via={handle ?? "manon"}
        hashtags={tag}
      >
        <TwitterIcon size={24} round />
      </TwitterShareButton>
      <WeiboShareButton url={url} title={title}>
        <WeiboIcon size={24} round />
      </WeiboShareButton>
      <EmailShareButton url={url} subject={title} body="body">
        <EmailIcon size={24} round />
      </EmailShareButton>
      <RedditShareButton url={url} title={title}>
        <RedditIcon size={24} round />
      </RedditShareButton>
      <FacebookShareButton url={pathName} quote={title} hashtag={tag[0]}>
        <FacebookIcon size={24} round />
      </FacebookShareButton>
    </div>
  );
}
