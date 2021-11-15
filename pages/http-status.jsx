import { Box, Heading, HStack, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { data, title } from 'utils/config';

export default function HttpStatus() {
  return (
    <Box>
      <Heading as="h1" mb={4}>
        HTTP状态代码概述
      </Heading>

      {data.map((item, key) => (
        <Box boxShadow="xl" key={key} p={4} mb={4} rounded="md">
          <Heading as="h2" mb={2}>
            <HStack>
              <Text>{key + 1}xx</Text>
              <Text pl={4}>{title[key]}</Text>
            </HStack>
          </Heading>

          {item.map((el) => (
            <Box py={2} key={el.key}>
              <Link
                href={`https://www.abstractapi.com/http-status-codes/${el.key}`}
                color="purple.500"
              >
                <HStack>
                  <Text
                    px={2}
                    py={1}
                    backgroundColor="purple.500"
                    rounded="md"
                    color="white"
                    fontSize="xs"
                  >
                    {el.key}
                  </Text>
                  <Text>-</Text>
                  <Text>{el.value}</Text>
                </HStack>
              </Link>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
