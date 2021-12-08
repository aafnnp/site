import { Image } from '@chakra-ui/react';
import React from 'react';

export default class Unsplash extends React.Component {
  state = {
    photos: '',
    imgHeight: 0,
  };

  componentDidMount() {
    const imgWidth = document.querySelector('.chakra-container').clientWidth;
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=rqPMZ8Ur7rQa6x2P1oPOSziry4m5XXod9KWStukAAy4&query=` +
        this.props.tags[0] || 'coding'
    )
      .then((response) => response.json())
      .then(({ results }) => {
        const random = Math.floor(Math.random() * results.length);
        this.setState({
          photos: results[random].urls.regular,
          imgHeight: imgWidth * 0.382,
        });
      })
      .catch((_) => {
        this.setState({
          photos: 'https://source.unsplash.com/random',
          imgHeight: imgWidth * 0.382,
        });
      });
  }

  render() {
    return (
      <Image
        borderRadius="md"
        htmlWidth="100%"
        fit="cover"
        htmlHeight="auto"
        src={this.state.photos}
        loading="lazy"
        alt={this.props.title}
      />
    );
  }
}
