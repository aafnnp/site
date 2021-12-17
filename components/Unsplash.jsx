import { Image } from '@chakra-ui/react';
import React, { useEffect } from 'react';

export default function Unsplash({ tags, title }) {
  const [photos, setPhotos] = React.useState(
    'https://source.unsplash.com/random'
  );

  useEffect(() => {
    const tag = tags[0] || 'coding';
    function fetchPhotos() {
      fetch(
        `https://api.unsplash.com/search/photos/?client_id=rqPMZ8Ur7rQa6x2P1oPOSziry4m5XXod9KWStukAAy4&query=${tag}`
      )
        .then((response) => response.json())
        .then(({ results }) => {
          const random = Math.floor(Math.random() * results.length);
          setPhotos(results[random].urls.regular);
        });
    }

    fetchPhotos();
  }, [tags]);

  return (
    <Image
      borderRadius="md"
      width="100%"
      height="auto"
      objectFit={['cover', 'contain']}
      src={photos}
      loading="lazy"
      alt={title}
    />
  );
}
