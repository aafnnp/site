import { Box, Button, Heading, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { Fragment } from 'react';
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);

export default function Index() {
  return (
    <Fragment>
      <style jsx>{`
        .about {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          background: url('https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/about-bg.jpg')
            no-repeat center center fixed;
          background-size: cover;
          color: #fff;
        }
      `}</style>
      <div className="about">
        <Box position="absolute" top="6rem" left="3.708rem">
          <MotionHeading
            as="h1"
            fontSize="xl"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 1.5 }}
          >
            Manon.icu
          </MotionHeading>
          <MotionHeading
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 1.5, delay: 0.8 }}
            as="h3"
          >
            FullStack Developer.
          </MotionHeading>
        </Box>

        <Box position="absolute" bottom="6rem" right="3.708rem">
          <Link href="/challenges">
            <MotionButton
              colorScheme="twitter"
              w="8rem"
              mr={6}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: 'easeOut', duration: 1.5, delay: 0.8 }}
            >
              Challenges
            </MotionButton>
          </Link>
          <Link href="/">
            <MotionButton
              colorScheme="twitter"
              w="8rem"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: 'easeOut', duration: 1.5, delay: 1.6 }}
            >
              Blog
            </MotionButton>
          </Link>
        </Box>
      </div>
    </Fragment>
  );
}
