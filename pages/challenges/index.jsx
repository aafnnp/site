import { Box, Button, Grid, Heading, Image, Link } from '@chakra-ui/react';
import { getAllChallenges } from 'api/getAllChallenges';
import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

export default function IndexPage(props) {
  const { allChallenges } = props;
  return (
    <Box p={4}>
      <Heading as="h1" mb={4} textAlign="center">
        Challenges
      </Heading>
      <Grid templateColumns="repeat(4,1fr)" gap={6}>
        {allChallenges.map((challenge) => {
          return (
            <Box
              key={challenge.link}
              boxShadow="lg"
              rounded="md"
              overflow="hidden"
            >
              <Image
                className="flex-none rounded-l-md"
                src={`/screenshots/${challenge.title}.png`}
                alt={challenge.title}
              />
              <Box p={4}>
                <Box display="flex" mb={2}>
                  <Image
                    boxSize={18}
                    alt={challenge.group}
                    src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${challenge.group}.svg`}
                  />
                  <Heading as="h3" fontSize="sm" fontWeight="bold" ml={1.5}>
                    {challenge.title}
                  </Heading>
                </Box>
                <Grid templateColumns="repeat(2,1fr)" gap={4}>
                  <Button size="sm" leftIcon={<FaLink />}>
                    <Link href={challenge.link}>Link</Link>
                  </Button>
                  <Button size="sm" leftIcon={<FaGithub />}>
                    <Link
                      isExternal
                      href={`https://github.com/Manonicu/site/tree/master/pages/challenges/${challenge.group}/${challenge.title}.jsx`}
                    >
                      Source
                    </Link>
                  </Button>
                </Grid>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}

export async function getStaticProps() {
  const allChallenges = await getAllChallenges();
  return {
    props: {
      allChallenges,
    },
  };
}
