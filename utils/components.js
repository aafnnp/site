import {
  Box,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import CanIUse from 'components/CanIUse.jsx';
import CodeSandbox from 'components/embed/CodeSandbox';
import React from 'react';

const components = {
  CanIUse,
  CodeSandbox,
  h2: (props) => <Heading mt={8} mb={4} size="md" as="h2" {...props} />,
  h3: (props) => (
    <Heading mt={4} mb={2} size="sm" as="h3">
      <span {...props}></span>
    </Heading>
  ),
  h4: (props) => <Heading mt={2} mb={1} size="xs" as="h4" {...props} />,
  p: (props) => <Text as="p" mb={4} {...props} />,
  pre: (props) => (
    <Box as="div">
      <Box as="pre" mb={4} {...props} />
    </Box>
  ),
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
