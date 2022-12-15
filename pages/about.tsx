import Link from "next/link";
import { FaGithub, FaHome, FaSitemap, FaTwitter } from "react-icons/fa";
import styles from "assets/styles/about.module.scss";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image)

export default function Index() {
  const animate = {
    opacity: [0, 1, 1, 0, 0],
    scale: [1, 1, 1, 1.1, 1]
  }
  const transition = (key) => {
    return {
      duration: 12,
      ease: 'linear',
      times: [0, 0.05, 0.25, 0.3, 1],
      repeat: Infinity,
      delay: 3 * key
    }
  }
  return (
    <div className="absolute flex flex-col justify-between w-screen h-screen overflow-hidden bg-slate-900 top-0 left-0 pt-[100px] px-8 pb-8">
      {[...Array(4)].map((_, key) => {
        return (
          <MotionImage
            animate={animate}
            transition={transition(key)}
            key={key}
            position="absolute"
            w="100vw"
            h="100vh"
            top={0}
            left={0}
            alt="Manon.icu"
            src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/hero-bg-${
              key + 1
            }.jpeg`}
            objectFit="cover"
          />
        )
      })}

      <Flex
        position="absolute"
        w="100vw"
        bottom={0}
        left={0}
        p={4}
        justifyContent="space-between"
        alignItems="end"
        color="white"
      >
        <Heading as="h1">
          <Text fontSize="2xl">Freelancer</Text>
          <Text fontSize="5xl">Fullstack Developer</Text>
          <Text fontSize="5xl">Particular Frontend</Text>
        </Heading>

        <div className={styles['scroll-indicator']}>
          <div className={styles['scroll-indicator-wrapper']}>
            <div className={styles['scroll-line']}></div>
          </div>
        </div>

        <Flex gap={4}>
          <Link href="/">
            <FaHome />
          </Link>
          <Link href="https://twitter.com/Manonicu">
            <FaTwitter />
          </Link>
          <Link href="https://github.com/Manonicu">
            <FaGithub />
          </Link>
          <Link href="/pages/about">
            <FaSitemap />
          </Link>
        </Flex>
      </Flex>
    </div>
  )
}
