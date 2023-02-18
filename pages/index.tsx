import Link from 'next/link'
import {FaGithub, FaSitemap, FaTwitter} from 'react-icons/fa'
import styles from 'assets/styles/index.module.scss'
import {Avatar, Center, Flex, Grid, GridItem, Heading} from '@chakra-ui/react'

const LINK_ITEMS = [
  {icon: 'blog', href: '/blog', bordered: true},
  {icon: 'challenges', href: '/challenges', bordered: true},
  {icon: 'playground', href: 'playground', bordered: true},
  {icon: 'about', href: '/about', bordered: true},
  {icon: 'contact', href: '/contact', bordered: true}
]
const SOCIAL_ITEMS = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/Manonicu'
  },
  {
    icon: <FaTwitter />,
    href: 'https://twitter.com/Manonicu'
  },
  {
    icon: <FaSitemap />,
    href: '/about'
  }
]

export default function Index() {
  return (
    <Flex justify="center" alignItems="center" w="100vw" h="100vh">
      <Grid gap={4}>
        <GridItem w="100%">
          <Center>
            <Avatar src="/avatar.webp" size="2xl" name="Manon.icu" />
          </Center>
        </GridItem>
        <GridItem w="100%">
          <Heading as="h1">Manon.icu - Frontend Developer</Heading>
        </GridItem>
        <GridItem w="100%">
          <Center>
            <Item items={SOCIAL_ITEMS} />
          </Center>
        </GridItem>
        <GridItem w="100%">
          <Center>
            <Item items={LINK_ITEMS} />
          </Center>
        </GridItem>
      </Grid>
    </Flex>
  )
}

const Item = ({items}) => {
  return (
    <Flex gap={4} mt={8}>
      {items.map((item) => (
        <GridItem key={item.href}>
          <Link href={item.href} className={item.bordered && styles.item}>
            {item.icon}
          </Link>
        </GridItem>
      ))}
    </Flex>
  )
}
