import Link from 'next/link'
import Image from 'next/image'
import {FaGithub, FaSitemap, FaTwitter} from 'react-icons/fa'
import styles from 'assets/styles/index.module.scss'

const LINK_ITEMS = [
  {icon: 'blog', href: '/blog', bordered: true},
  {icon: 'challenges', href: '/challenges', bordered: true},
  {icon: 'playground', href: 'playground', bordered: true},
  {icon: 'about', href: '/about', bordered: true},
  {icon: 'contact', href: '/contact', bordered: true}
]
const SOCIAL_ITEMS = [
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
    <div
      className={
        'flex flex-col gap-8 justify-center items-center w-screen h-screen'
      }
    >
      <div className={'relative w-52 h-52 rounded-full overflow-hidden'}>
        <Image src={'/avatar.webp'} alt={'Manon.icu'} fill />
      </div>
      <h1 className={'text-3xl font-bold'}>Manon.icu - Frontend Developer</h1>
      <div className={'flex justify-center'}>
        <Item items={SOCIAL_ITEMS} />
      </div>
      <div className={'flex justify-center'}>
        <Item items={LINK_ITEMS} />
      </div>
    </div>
  )
}

const Item = ({items}) => {
  return (
    <div className={'flex items-center gap-4'}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={item.bordered && styles.item}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}
