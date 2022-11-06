import NextImage from 'next/legacy/image'
import React from 'react'

const customLoader = ({src}) => src

export default function Image(props) {
  return (
    <div {...props}>
      <NextImage
        loader={customLoader}
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
        loading="lazy"
        layout="responsive"
      />
    </div>
  )
}
