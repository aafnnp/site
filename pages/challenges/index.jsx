import { Box, Button, Grid, Heading, Image, Link } from '@chakra-ui/react';
import { getAllChallenges } from 'api/getAllChallenges';
import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const MotionHeading = motion(Heading);
const MotionGrid = motion(Grid);
const MotionBox = motion(Box);

export default function IndexPage(props) {
  const { allChallenges } = props;
  return (
    <Box p={4}>
      <MotionHeading
        as="h1"
        mb={4}
        textAlign="center"
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        Challenges
      </MotionHeading>

      <MotionGrid
        templateColumns="repeat(4,1fr)"
        gap={6}
        initial="hidden"
        animate="visible"
      >
        {allChallenges.map((challenge, i) => {
          return (
            <MotionBox
              key={challenge.link}
              custom={i}
              boxShadow="lg"
              rounded="md"
              overflow="hidden"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: 'easeOut', duration: 0.5, delay: i * 0.1 }}
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
            </MotionBox>
          );
        })}
      </MotionGrid>
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
