import React from 'react'
import {motion} from 'framer-motion'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100}
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000}
    }
  }
}

const colors = [
  '#FF008C',
  '#D309E1',
  '#9C1AFF',
  '#4e1592',
  '#4400FF',
  '#7402ff'
]

const MenuItem = ({i, idx}) => {
  const style = {borderColor: colors[idx]}
  return (
    <motion.li
      variants={variants}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
      className="list-type-none mb-4 flex gap-4 items-center justify-center cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full border-2" style={style} />
      <div
        className="rounded flex items-center px-4 flex-1 capitalize border-2"
        style={style}
      >
        {i.name}
      </div>
    </motion.li>
  )
}

export default MenuItem
