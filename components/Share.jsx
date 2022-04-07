import {
  TwitterIcon,
  TwitterShareButton,
  WeiboShareButton,
  WeiboIcon,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
  FacebookShareButton,
  FacebookIcon
} from 'next-share'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

export default function Share(props) {
  const {asPath} = useRouter()
  const [url, setUrl] = useState(asPath)
  useEffect(() => {
    setUrl(location.href)
  }, [asPath])
  return (
    <>
      {asPath === '/' ? null : (
        <div className="share py-4 flex justify-center gap-2">
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
