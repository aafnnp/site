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
import {Flex} from '@chakra-ui/react'

export default function Share({title, tag}) {
  const {asPath} = useRouter()
  const [url, setUrl] = useState(asPath)

  useEffect(() => {
    setUrl(location.href)
  }, [asPath])

  return (
    <>
      {asPath === '/' ? null : (
        <Flex gap={2} py={4} justifyContent="center">
          <TwitterShareButton
            url={url}
            title={title}
            via={'manon'}
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
          <FacebookShareButton url={asPath} quote={title} hashtag={tag[0]}>
            <FacebookIcon size={24} round />
          </FacebookShareButton>
        </Flex>
      )}
    </>
  )
}