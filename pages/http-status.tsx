import NextLink from 'next/link'
import React from 'react'
import {data, title} from 'utils/http-status'
import {Container, Heading, Box, Text, Link} from '@chakra-ui/react'

const HttpStatus = () => {
  React.useEffect(()=>{
    // fetch("/api/publish").then(res=>{
    //   console.log(res,"res")
    // })


  },[])
  return (
    <Container p={4}>
      <Heading as="h1">HTTP状态代码概述</Heading>

      {data.map((item, key) => (
        <Box mt={8} key={key}>
          <Heading
            as="h2"
            mb={2}
            display="flex"
            gap={4}
            justifyContent="between"
          >
            <Text>{key + 1}xx</Text>
            <Text>{title[key]}</Text>
          </Heading>

          {item.map((el) => (
            <NextLink
              legacyBehavior
              href={`https://www.abstractapi.com/http-status-codes/${el.key}`}
              passHref
              key={el.key}
            >
              <Link display="flex" gap={2} py={2} isExternal>
                <Text bg="purple.500" px={2} py={1} rounded="md" fontSize="xs">{el.key}</Text>
                <Text>-</Text>
                <Text color="purple.500">{el.value}</Text>
              </Link>
            </NextLink>
          ))}
        </Box>
      ))}
    </Container>
  )
}

export default HttpStatus
