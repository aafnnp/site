import { Heading, Link, ListItem, OrderedList } from '@chakra-ui/react';
import React from 'react';

function RandomPost({ data }) {
  return (
    <>
      <Heading as="h2" mt={8} mb={4} size="sm">
        更多文章
      </Heading>
      <OrderedList styleType="circle" color="gray.500">
        {data.map((item, key) => (
          <ListItem key={key}>
            <Link href={`/blog/${item.slug}`} textDecoration="underline">
              {item.data.title}
            </Link>
          </ListItem>
        ))}
      </OrderedList>
    </>
  );
}

export default RandomPost;
