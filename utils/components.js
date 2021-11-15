import {
  Box,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import CanIUse from 'components/CanIUse.jsx';
import { CodePen, CodeSandbox, Gist } from 'mdx-embed';
import React from 'react';

const components = {
  CodePen,
  Gist,
  CodeSandbox,
  CanIUse,
  h2: (props) => <Heading mt={8} mb={4} size="sm" as="h2" {...props} />,
  p: (props) => <Text mb={4} {...props} />,
  ul: (props) => (
    <OrderedList mb={4} styleType="circle" color="gray.500" {...props} />
  ),
  ol: (props) => (
    <OrderedList mb={4} styleType="circle" color="gray.500" {...props} />
  ),
  li: (props) => <ListItem {...props} />,
  img: (props) => (
    <Box mt={8} boxShadow="2xl">
      <Image loading="lazy" alt={props.alt} {...props} />
    </Box>
  ),
};

export default components;
