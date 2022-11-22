import NextLink from 'next/link'
import React from 'react'
import {Box, Heading, OrderedList, ListItem, Link} from '@chakra-ui/react'
import {FiExternalLink} from 'react-icons/fi'

export default function RandomPost({randomPost}) {
  return (
    <Box>
      <Heading as="h2" fontSize="text.base" mb={4}>
        更多文章
      </Heading>
      <OrderedList>
        {randomPost.map((item) => (
          <ListItem key={item.title}>
            <NextLink legacyBehavior href={`/blog/${item.slug}`} passHref>
              <Link display="flex" alignItems="center" gap={2} isExternal>{item.title}<FiExternalLink /></Link>
            </NextLink>
          </ListItem>
        ))}
      </OrderedList>
    </Box>
  )
}
