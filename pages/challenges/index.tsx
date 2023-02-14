import NextLink from 'next/link'
import React from 'react'
import {FaGithub, FaLink} from 'react-icons/fa'
import {
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link
} from '@chakra-ui/react'

export default function IndexPage(props) {
  const {allChallenges} = props

  return (
    <Container pt={20} maxW={['768px', '1200px', '1200px', '1400px']}>
      <Heading as="h1" mb={12}>
        <Center>Challenges</Center>
      </Heading>
      <Grid templateColumns={'repeat(auto-fit, minmax(30ch, 1fr))'} gap={4}>
        {allChallenges.map((challenge, i) => {
          return <Challenge {...challenge} key={i} />
        })}
      </Grid>
    </Container>
  )
}

const Challenge = ({link, title, group}) => {
  return (
    <Flex gap={2} direction="column" key={link} flex={'1 1 20ch'}>
      <Image
        objectFit={'cover'}
        src={`/screenshots/${title}.webp`}
        alt={title}
        fallbackSrc="https://via.placeholder.com/1920x1080/00000FF/808080?Text=Manon.icu"
      />

      <Flex gap={2} alignItems="center">
        <Image
          src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${group}.svg`}
          boxSize={4}
          alt={title}
        />
        {title}
      </Flex>
      <Flex gap={2} alignItems="center" justifyContent="space-between">
        <NextLink passHref href={link} legacyBehavior>
          <Link
            display="flex"
            w="50%"
            alignItems="center"
            justifyContent="center"
            gap={2}
            bg="white"
            color="blue.500"
            py={1}
            rounded="md"
            shadow="md"
            fontSize="sm"
          >
            <FaLink />
            Link
          </Link>
        </NextLink>
        <NextLink
          passHref
          href={`https://github.com/Manonicu/site/tree/master/_challenges/${group}/${title}.jsx`}
          legacyBehavior
        >
          <Link
            display="flex"
            w="50%"
            alignItems="center"
            justifyContent="center"
            gap={2}
            bg="blue.500"
            py={1}
            rounded="md"
            color="white"
            fontSize="sm"
          >
            <FaGithub />
            Source
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  )
}

export const getStaticProps = async () => {
  const {globFiles} = await import('utils/globFiles')
  const allChallenges = await globFiles('_challenges')
  const challenges = allChallenges.map((item) => {
    const {
      params: {
        slug: [group, title]
      }
    } = item
    return {
      title: title,
      group: group,
      link: `/challenges/${group}/${title}`
    }
  })
  return {
    props: {
      allChallenges: challenges
    }
  }
}
