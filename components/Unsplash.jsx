import { Image } from '@chakra-ui/react';
import React, { useEffect } from 'react';

export default function Unsplash(props) {
  const [photos, setPhotos] = React.useState(
    'https://source.unsplash.com/random'
  );
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=rqPMZ8Ur7rQa6x2P1oPOSziry4m5XXod9KWStukAAy4&query=` +
        props.tags[0] || 'coding'
    )
      .then((response) => response.json())
      .then(({ results }) => {
        const random = Math.floor(Math.random() * results.length);
        setPhotos(results[random].urls.regular);
      });
  }, []);

  return (
    <Image
      borderRadius="md"
      aspectratio={1 / 0.382}
      src={photos}
      loading="lazy"
      alt={props.title}
    />
  );
}
