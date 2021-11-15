import { Box, Button, Flex, HStack, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';

export default function Header() {
  return (
    <Flex align="center" justify="space-between" mb={4}>
      <Box py={4}>
        <HStack spacing={4}>
          <Image alt="Manon.icu" boxSize="20px" src="/terminal.svg" />
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
