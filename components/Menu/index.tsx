import dynamic from "next/dynamic";
import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Avatar, Flex, Link } from "@chakra-ui/react";

const DarkModeSwitch = dynamic(() => import('components/DarkModeSwitch'), {
  ssr: false
})

const Navigation = () => {
  const {asPath} = useRouter()
  console.log(asPath)
  const pathArr = asPath.split('/')
  console.log(pathArr)
  return (
    <Flex gap={4} flexDirection={'column'} alignItems="center" px={6} pt={12}>
      <Flex
        className="manon"
        gap={4}
        alignItems={'center'}
        mb={8}
        fontWeight={'bold'}
      >
        <Avatar src={'/avatar.webp'} boxSize={10} />
        <Link href={'/'}>Manon.icu</Link>
      </Flex>
      {LinkItems.map((i) => (
        <NextLink legacyBehavior passHref key={i.name} href={i.href}>
          <Link
            {...(pathArr[1] === i.name && {
              bgGradient: 'linear(to-l, #7928CA, #FF0080)',
              bgClip: 'text'
            })}
            textTransform={'capitalize'}
          >
            {i.name}
          </Link>
        </NextLink>
      ))}
      <DarkModeSwitch />
    </Flex>
  )
}

const LinkItems = [
  {name: 'home', href: '/'},
  {name: 'blog', href: '/blog'},
  {name: 'challenges', href: '/challenges'},
  {name: 'playground', href: '/playground'},
  {name: 'about', href: '/about'},
  {name: 'contact', href: '/contact'}
]

export default Navigation
