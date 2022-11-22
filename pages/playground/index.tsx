import NextLink from 'next/link'
import React from 'react'
import {FaGithub, FaLink} from 'react-icons/fa'
import {
  Grid,
  Container,
  Heading,
  OrderedList,
  ListItem,
  Flex,
  Image,
  Link,
  Center
} from '@chakra-ui/react'

export default function IndexPage(props) {
  const {allChallenges} = props

  return (
    <Container
      pt={20}
      maxW={['768px', '1200px', '1200px', '1400px']}
    >
      <Heading as="h1" mb={4}><Center>Web API Playground</Center></Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <OrderedList>
          {allChallenges.map((challenge) => {
            return (
              <ListItem key={challenge.link}>
                <Flex gap={2} alignItems="center">
                  {challenge.title}
                  <Image
                    boxSize={4}
                    src={`https://pics-rust.vercel.app/uPic/icons/${challenge.group}.svg`}
                    alt={challenge.group}
                  />
                  <NextLink passHref legacyBehavior href={challenge.link}>
                    <Link>
                      <FaLink />
                    </Link>
                  </NextLink>
                  <NextLink
                    passHref
                    legacyBehavior
                    href={`https://github.com/Manonicu/site/tree/master/_playground/${challenge.group}/${challenge.title}.jsx`}
                  >
                    <Link>
                      <FaGithub />
                    </Link>
                  </NextLink>
                </Flex>
              </ListItem>
            )
          })}
        </OrderedList>
      </Grid>
    </Container>
  )
}

export const getStaticProps = async () => {
  const {globFiles} = await import('utils/globFiles')
  const allChallenges = await globFiles('_playground')
  const challenges = allChallenges.map((item) => {
    const {
      params: {
        slug: [group, title]
      }
    } = item
    return {
      title: title,
      group: group,
      link: `/playground/${group}/${title}`
    }
  })
  return {
    props: {
      allChallenges: challenges
    }
  }
}
