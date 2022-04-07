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
  FacebookIcon,
} from 'next-share'
import {useRouter} from 'next/router'

export default function Share(props) {
  const {asPath} = useRouter()
  console.log(props.data)
  return (
    <>
      {asPath === '/' ? null : (
        <div className="share py-4 flex justify-center gap-2">
          <TwitterShareButton url={location.href} title={props.data.title}>
            <TwitterIcon size={24} round />
          </TwitterShareButton>
          <WeiboShareButton url={location.href} title={props.data.title}>
            <WeiboIcon size={24} round />
          </WeiboShareButton>
          <EmailShareButton
            url={location.href}
            subject={props.data.title}
            body="body"
          >
            <EmailIcon size={24} round />
          </EmailShareButton>
          <RedditShareButton url={location.href} title={props.data.title}>
            <RedditIcon size={24} round />
          </RedditShareButton>
          <FacebookShareButton
            url={location.href}
            quote={'next-share is a social share buttons for your next React apps.'}
            hashtag={props.data.tags[0]}
          >
            <FacebookIcon size={24} round />
          </FacebookShareButton>
        </div>
      )}
    </>
  )
}
