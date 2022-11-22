import NextLink from 'next/link'
import {Fragment} from 'react'
import {
  List,
  LinkOverlay,
  ListItem,
  Container,
  Heading,
  Image
} from '@chakra-ui/react'

const IndexPage = ({groupByMonthPosts}) => {
  return (
    <Container>
      {Object.keys(groupByMonthPosts).map((group) => {
        return (
          <Fragment key={group}>
            <Heading as="h3" mt={12} mb={4}>
              {group}
            </Heading>
            <List spacing={3}>
              {groupByMonthPosts[group].map((post) => {
                return (
                  <ListItem
                    position="relative"
                    display="flex"
                    gap={2}
                    alignItems="center"
                    key={post.title}
                  >
                    <NextLink legacyBehavior href={`/blog/${post.slug}`} passHref>
                      <LinkOverlay>{post.title}</LinkOverlay>
                    </NextLink>
                    {post.tags.map((tag) => {
                      return (
                        <Image
                          key={tag}
                          boxSize={4}
                          objectFit="cover"
                          alt={tag}
                          src={`https://pics-rust.vercel.app/uPic/icons/${tag}.svg`}
                        />
                      )
                    })}
                  </ListItem>
                )
              })}
            </List>
          </Fragment>
        )
      })}
    </Container>
  )
}

export default IndexPage

export async function getStaticProps() {
  const {GetAllPosts} = await import('utils/getAllPosts')
  const posts = await GetAllPosts()
  const groupByMonthPosts = posts.reduce((prev, next) => {
    if (Array.isArray(prev[next.group])) {
      prev[next.group].push(next)
    } else {
      prev[next.group] = []
      prev[next.group].push(next)
    }
    return prev
  }, {})
  return {
    props: {
      groupByMonthPosts
    }
  }
}
