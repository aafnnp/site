import {BrowserEnums} from 'utils'
import * as lite from 'caniuse-lite'
import {
  Container,
  Box,
  Heading,
  Grid,
  Link,
  Flex,
  Image,
  Center
} from '@chakra-ui/react'

const Section = ({browser, data}) => {
  return (
    <Box mt={4}>
      <Heading
        as="h3"
        py={4}
        fontSize="sm"
        fontWeight={600}
        textTransform="capitalize"
      >
        {browser}
      </Heading>
      <Grid templateColumns="repeat(4,1fr)" gap={4} mb={2}>
        {Object.entries(BrowserEnums[browser]).map(([key, value], index) => {
          return (
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              key={key}
            >
              <Image
                boxSize={12}
                src={`https://pics-rust.vercel.app/logos/${value}.svg`}
                alt={key}
                loading="lazy"
              />
              <Box
                mt={2}
                rounded="md"
                fontWeight="bold"
                p={2}
                w="100%"
                style={{
                  backgroundColor:
                    data.desktop[index] === 'No' ? '#ff0024' : '#47ca4c'
                }}
              >
                <Center>{data.desktop[index]}</Center>
              </Box>
            </Flex>
          )
        })}
      </Grid>
    </Box>
  )
}

export default function CanIUse({tag}) {
  console.log(lite.feature(lite.features[tag]), lite)
  const {
    stats: {
      chrome,
      firefox,
      ie,
      edge,
      safari,
      and_chr,
      and_ff,
      android,
      ios_saf
    }
  } = lite.feature(lite.features[tag])
  const getSupportData = (arr) => {
    return arr.map((item) => {
      const firstSupportItems = Object.entries(item).find((el) => el[1] === 'y')
      return firstSupportItems ? firstSupportItems[0] : 'No'
    })
  }

  const data = {
    desktop: getSupportData([chrome, firefox, ie, edge, safari]),
    mobile: getSupportData([and_chr, and_ff, android, ios_saf])
    // updateTime: dayjs(data.updated).format('YYYY-MM-DD HH:mm:ss')
  }

  return (
    <Container my={12} maxW={['768px', '1200px', '1200px', '1400px']}>
      <Box color="gray.500">
        This browser support data is from
        <Link px={1} color="red.500" href={`https://caniuse.com/#feat=${tag}`}>
          Caniuse
        </Link>
        ,which has more detail. A number indicates that browser supports the
        feature at that version and up.
      </Box>
      <Section browser="desktop" data={data} />
      <Section browser="mobile" data={data} />
    </Container>
  )
}
