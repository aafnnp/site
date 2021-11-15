import { Box, Grid, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { Component } from 'react';

export default class CanIUse extends Component {
  state = {
    desktop: [],
    mobile: [],
  };

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Fyrd/caniuse/main/data.json')
      .then((res) => res.json())
      .then((res) => {
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
            ios_saf,
          },
        } = res.data[this.props.tag];

        this.setState(
          {
            desktop: this.getSupportData([chrome, firefox, ie, edge, safari]),
            mobile: this.getSupportData([and_chr, and_ff, android, ios_saf]),
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  getSupportData = (arr) => {
    return arr.map((item) => {
      const firstSupportItems = Object.entries(item).find(
        (el) => el[1] === 'y'
      );
      return firstSupportItems ? firstSupportItems[0] : 'No';
    });
  };

  render() {
    return (
      <Box mx="auto" my={10} w="80%">
        <Text color="gray.500" fontSize="xs" fontFamily="Gugi">
          This browser support data is from
          <Link
            href={`https://caniuse.com/#feat=${this.props.tag}`}
            color="#ff0024"
            px={2}
          >
            Caniuse
          </Link>
          ,which has more detail. A number indicates that browser supports the
          feature at that version and up.
        </Text>
        <div className="caniuse-section">
          <Heading as="h5" fontSize="xs" py={4}>
            Desktop
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" mb={2} gap={6}>
            <Box display="flex" justifyContent="center">
              <Image
                src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/CDWccX.jpg"
                alt="chrome"
                loading="lazy"
                boxSize="3rem"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Image
                src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mqRvLw.jpg"
                alt="firefox"
                loading="lazy"
                boxSize="3rem"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Image
                src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/uKn6gH.jpg"
                alt="IE"
                loading="lazy"
                boxSize="3rem"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Image
                src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/aoF7l0.jpg"
                alt="Edge"
                loading="lazy"
                boxSize="3rem"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Image
                src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mIxpPG.jpg"
                alt="Safari"
                loading="lazy"
                boxSize="3rem"
              />
            </Box>
          </Grid>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {this.state.desktop.map((item, index) => {
              return (
                <Text
                  key={index}
                  color="white"
                  rounded="md"
                  textAlign="center"
                  p={2}
                  fontWeight="bold"
                  bg={
                    this.state.desktop[index] === 'No' ? '#ff0024' : '#47ca4c'
                  }
                >
                  {item}
                </Text>
              );
            })}
          </Grid>
        </div>

        <div className="caniuse-section mt-4">
          <Heading as="h5" fontSize="xs" py={4}>
            Mobile / Tablet
          </Heading>
          <Grid templateColumns="repeat(4, 1fr)" mb={2} gap={6}>
            <Box display="flex" justifyContent="center">
              <Image
                src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/CDWccX.jpg"
                alt="Android Chrome"
                loading="lazy"
                boxSize="3rem"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Image
                src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mqRvLw.jpg"
                alt="Android Firefox"
                loading="lazy"
                boxSize="3rem"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Image
                src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/VK4LoM.jpg"
                alt="Android"
                loading="lazy"
                boxSize="3rem"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Image
                src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mIxpPG.jpg"
                alt="Safari"
                loading="lazy"
                boxSize="3rem"
              />
            </Box>
          </Grid>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {this.state.mobile.map((item, index) => {
              return (
                <Text
                  key={index}
                  color="white"
                  rounded="md"
                  textAlign="center"
                  p={2}
                  fontWeight="bold"
                  bg={
                    this.state.desktop[index] === 'No' ? '#ff0024' : '#47ca4c'
                  }
                >
                  {item}
                </Text>
              );
            })}
          </Grid>
        </div>
      </Box>
    );
  }
}
