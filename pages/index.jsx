import {motion} from 'framer-motion'
import Link from 'next/link'
import {FaGithub, FaSitemap, FaTwitter} from 'react-icons/fa'
import dynamic from 'next/dynamic'
import styles from 'styles/index.module.scss'

const Image = dynamic(() => import('components/Image'), {ssr: false})
const MotionLink = motion(Link)
const LinkItems = [
  {icon: 'blog', href: '/blog', bordered: true},
  {icon: 'challenges', href: '/challenges', bordered: true},
  {icon: 'playground', href: 'playground', bordered: true},
  {icon: 'about', href: '/about', bordered: true},
  {icon: 'contact', href: '/contact', bordered: true}
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
    <div className={styles.wrapper}>
      <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{ease: 'easeInOut', duration: 0.5}}
      >
        <Image
          src="/avatar.png"
          width={176}
          height={186.5}
          loading="lazy"
          alt="avatar"
          unoptimized={true}
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
      className={styles['item-container']}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <MotionLink
          href={item.href}
          key={item.href}
          className={item.bordered && styles.item}
          variants={variants}
        >
          {item.icon}
        </MotionLink>
      ))}
    </motion.div>
  )
}
