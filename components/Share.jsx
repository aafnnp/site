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
  WeiboShareButton
} from 'next-share'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import styles from 'styles/blog.module.scss'

export default function Share(props) {
  const {asPath} = useRouter()
  const [url, setUrl] = useState(asPath)
  useEffect(() => {
    setUrl(location.href)
  }, [asPath])
  return (
    <>
      {asPath === '/' ? null : (
        <div className={styles.share}>
          <TwitterShareButton url={url} title={props.data.title}>
            <TwitterIcon size={24} round />
          </TwitterShareButton>
          <WeiboShareButton url={url} title={props.data.title}>
            <WeiboIcon size={24} round />
          </WeiboShareButton>
          <EmailShareButton url={url} subject={props.data.title} body="body">
            <EmailIcon size={24} round />
          </EmailShareButton>
          <RedditShareButton url={url} title={props.data.title}>
            <RedditIcon size={24} round />
          </RedditShareButton>
          <FacebookShareButton
            url={asPath}
            quote={props.data.title}
            hashtag={props.data.tags[0]}
          >
            <FacebookIcon size={24} round />
          </FacebookShareButton>
        </div>
      )}
    </>
  )
}
