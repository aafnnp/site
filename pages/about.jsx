import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export default function Index() {
  return (
    <Flex justifyContent="center">
      <VStack>
        <Avatar
          size="2xl"
          name="Manon.icu"
          alt="Manon.icu"
          src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/KDdimu.jpg"
        />

        <Heading as="h1">Manon.icu</Heading>
        <Heading as="h2">FullStack Developer.</Heading>
        <Text atextAign="left">
          Helping people turn their ideas into sites & apps that work.
        </Text>
        <Text textAlign="left">Professional and Cost-Effective.</Text>
        <Text textAlign="left" color="tomato">
          Always.
        </Text>

        <HStack color="white">
          <Link href="/challenges">
            <Button colorScheme="twitter">Challenges</Button>
          </Link>
          <Link href="/">
            <Button colorScheme="twitter">Blog</Button>
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
}
