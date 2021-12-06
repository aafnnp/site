import { Box, Button, Flex, HStack, Image, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';

export default function Header() {
  const router = useRouter();
  return (
    <Flex
      position="relative"
      zIndex="9999"
      align="center"
      justify="space-between"
      mb={4}
      style={{ color: router.route.startsWith('/about') ? 'white' : '' }}
    >
      <Box py={4}>
        <HStack spacing={4}>
          <Image
            alt="Manon.icu"
            boxSize="20px"
            src="/terminal.svg"
            htmlWidth="20px"
            htmlHeight="20px"
          />
          <Link href="/">Manon.Icu</Link>
        </HStack>
      </Box>
      <Box py={4}>
        <HStack spacing={4}>
          <Link href="/about">About</Link>
          <Link href="https://twitter.com/Manonicu">
            <Button size="sm" colorScheme="twitter" leftIcon={<FaTwitter />}>
              Follow Me
            </Button>
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
}
