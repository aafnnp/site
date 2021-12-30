import { Image } from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';
import { fetcher } from 'utils';

export default function Unsplash({ tags, title }) {
  const tag = tags ? tags[0] || 'coding' : 'coding';
  const { data, error } = useSWR(
    `https://api.unsplash.com/search/photos/?client_id=rqPMZ8Ur7rQa6x2P1oPOSziry4m5XXod9KWStukAAy4&query=${tag}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const photo =
    data.results[Math.floor(Math.random() * data.results.length)].urls.regular;

  return (
    <Image
      borderRadius="md"
      width="100%"
      height="auto"
      objectFit={['cover', 'contain']}
      src={photo}
      loading="lazy"
      alt={title}
    />
  );
}
