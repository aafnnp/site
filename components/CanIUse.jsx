import { Box, Grid, Heading, Image, Link, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import React, { Component } from 'react';
import { fetcher } from 'utils';

export default class CanIUse extends Component {
  static enums = {
    desktop: {
      Chrome: 'CDWccX.jpg',
      Firefox: 'mqRvLw.jpg',
      IE: 'uKn6gH.jpg',
      Edge: 'aoF7l0.jpg',
      Safari: 'mIxpPG.jpg',
    },
    mobile: {
      'Android Chrome': 'CDWccX.jpg',
      'Android FireFox': 'mqRvLw.jpg',
      Android: 'VK4LoM.jpg',
      'Ios Safari': 'mIxpPG.jpg',
    },
  };

  state = {
    desktop: [],
    mobile: [],
    updateTime: Date.now(),
  };

  componentDidMount() {
    fetcher(
      'https://raw.githubusercontent.com/Fyrd/caniuse/main/data.json'
    ).then((res) => {
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

      this.setState({
        desktop: this.getSupportData([chrome, firefox, ie, edge, safari]),
        mobile: this.getSupportData([and_chr, and_ff, android, ios_saf]),
        updateTime: dayjs(res.data.updated).format('YYYY-MM-DD HH:mm:ss'),
      });
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
      <Box mx="auto" my={10}>
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
          feature at that version and up. Update Time:
          <Text color="red" display="inline">
            {this.state.updateTime}
          </Text>
        </Text>
        <div className="caniuse-section">
          <Heading as="h5" fontSize="xs" py={4}>
            Desktop
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" mb={2} gap={6}>
            {Object.entries(CanIUse.enums.desktop).map(
              ([key, value], index) => {
                return (
                  <Box
                    key={key}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    textAlign="center"
                  >
                    <Image
                      src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/${value}`}
                      alt={key}
                      margin="0 auto 0.5rem"
                      width="3rem"
                      height="3rem"
                    />
                    <Text
                      color="white"
                      rounded="md"
                      textAlign="center"
                      p={2}
                      fontWeight="bold"
                      bg={
                        this.state.desktop[index] === 'No'
                          ? '#ff0024'
                          : '#47ca4c'
                      }
                    >
                      {this.state.desktop[index]}
                    </Text>
                  </Box>
                );
              }
            )}
          </Grid>
        </div>

        <div className="caniuse-section mt-4">
          <Heading as="h5" fontSize="xs" py={4}>
            Mobile / Tablet
          </Heading>
          <Grid templateColumns="repeat(4, 1fr)" mb={2} gap={6}>
            {Object.entries(CanIUse.enums.mobile).map(([key, value], index) => {
              return (
                <Box
                  key={key}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/${value}`}
                    alt={key}
                    margin="0 auto 0.5rem"
                    width="3rem"
                    height="3rem"
                  />
                  <Text
                    color="white"
                    rounded="md"
                    textAlign="center"
                    p={2}
                    fontWeight="bold"
                    bg={
                      this.state.desktop[index] === 'No' ? '#ff0024' : '#47ca4c'
                    }
                  >
                    {this.state.desktop[index]}
                  </Text>
                </Box>
              );
            })}
          </Grid>
        </div>
      </Box>
    );
  }
}
