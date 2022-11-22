import React from 'react'
import {useRouter} from 'next/router'
import NextLink from 'next/link'
import {Flex, Link} from '@chakra-ui/react'

const Navigation = () => {
  const {asPath} = useRouter()
  return (
    <Flex gap={4} alignItems="center" justifyContent="center" py={4}>
      {LinkItems.map((i) => (
        <NextLink legacyBehavior passHref key={i.name} href={i.href}>
          <Link className={`menu-item ${i.href === asPath && 'text-twitter'} `}>
            {i.name}
          </Link>
        </NextLink>
      ))}
    </Flex>
  )
}

const LinkItems = [
  {name: 'Home', href: '/'},
  {name: 'Blog', href: '/blog'},
  {name: 'Challenges', href: '/challenges'},
  {name: 'Playground', href: '/playground'},
  {name: 'About', href: '/about'},
  {name: 'Contact', href: '/contact'}
]

export default Navigation
