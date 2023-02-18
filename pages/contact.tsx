import {Box, Heading, Link, Text} from '@chakra-ui/react'

export default function IndexPage() {
  return (
    <Box position="relative" px={6} pb={20} pt={12}>
      <Heading as="h1">Feedback</Heading>
      <Text mb={4}>
        You can send me feedback, suggestions and questions by emailing me at{' '}
        <Link href="mailto:gemini0525@foxmail.com">gemini0525@foxmail.com</Link>
      </Text>
      <Text mb={4}>
        Alternatively, you can send me a message on{' '}
        <Link href="https://twitter.com/Manonicu">Twitter</Link>
      </Text>
      <Text>
        If you spot outdated information in any of my articles, send me a link
        and I will make sure to update the article ASAP.
      </Text>
    </Box>
  )
}
