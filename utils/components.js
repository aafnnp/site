import CanIUse from 'components/CanIUse'
import {Heading, Link, Box, OrderedList, ListItem} from '@chakra-ui/react'
import {FiExternalLink} from 'react-icons/fi'

const components = {
  CanIUse,
  h2: (props) => (
    <Heading as="h2" mb={4}>
      {props.children}
    </Heading>
  ),
  h3: (props) => (
    <Heading as="h3" mb={4}>
      {props.children}
    </Heading>
  ),
  h4: (props) => (
    <Heading as="h4" mb={4}>
      {props.children}
    </Heading>
  ),
  h5: (props) => (
    <Heading as="h5" mb={4}>
      {props.children}
    </Heading>
  ),
  p: (props) => (
    <Box as="div" mb={4}>
      {props.children}
    </Box>
  ),
  div: (props) => <Box mb={4}>{props.children}</Box>,
  a: (props) => {
    return (
      <Link
        display="inline-flex"
        alignItems="center"
        href={props.href}
        gap={2}
        isExternal
      >
        {props.children}
        <FiExternalLink />
      </Link>
    )
  },
  ul: (props) => <OrderedList mb={4}>{props.children}</OrderedList>,
  li: (props) => <ListItem>{props.children}</ListItem>
  // code: props=><Code>{props.children}</Code>
}

export default components
