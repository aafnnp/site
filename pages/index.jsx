import {motion} from 'framer-motion'
import Link from 'next/link'
import {FaGithub, FaSitemap, FaTwitter} from 'react-icons/fa'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('components/Image'), {ssr: false})
const MotionLink = motion(Link)
const LinkItems = [
  {icon: 'blog', href: '/blog'},
  {icon: 'challenges', href: '/challenges'},
  {icon: 'playground', href: 'playground'},
  {icon: 'about', href: '/about'},
  {icon: 'contact', href: '/contact'}
]
const SocialItems = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/Manonicu'
  },
  {
    icon: <FaTwitter />,
    href: 'https://twitter.com/Manonicu'
  },
  {
    icon: <FaSitemap />,
    href: '/about'
  }
]

export default function Index() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center opacity-100 dark:bg-gray-800">
      <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{ease: 'easeInOut', duration: 0.5}}
      >
        <Image
          src="/avatar.png"
          className="w-[176px] h-[186.5px]"
          width={176}
          height={186.5}
          loading="lazy"
          alt="avatar"
        />
      </motion.div>
      <motion.h1
        className="text-4xl mt-8 font-bold text-center dark:text-white"
        initial={{x: -20, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{ease: 'easeInOut', duration: 0.5, delay: 1}}
      >
        Manon.icu - Frontend Developer
      </motion.h1>
      <Item items={SocialItems} delay={2} />
      <Item items={LinkItems} delay={5} />
    </div>
  )
}

const Item = ({items, delay}) => {
  const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    },
    transition: {
      ease: 'easeInOut',
      delay: delay
    }
  }

  const variants = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.div
      className={`flex gap-4 mt-8 text-sm text-gray-600 dark:text-white uppercase cursor-pointer`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <MotionLink
          href={item.href}
          key={item.href}
          className="underline"
          variants={variants}
        >
          {item.icon}
        </MotionLink>
      ))}
    </motion.div>
  )
}
