import NextImage from 'next/image';
import React from 'react'

const customLoader = ({src}) => src;

export default function Image(props) {
  return <NextImage
    {...props}
    loader={customLoader}
    src={props.src}
    width={props.width}
    height={props.height}
    alt={props.alt}
    loading="lazy"
    layout="responsive"
  />
}
