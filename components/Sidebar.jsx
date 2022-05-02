import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import {DiTerminal} from 'react-icons/di'
import {FaGithub, FaSitemap, FaTwitter} from 'react-icons/fa'
import styles from 'styles/sidebar.module.scss'

const Image = dynamic(() => import('components/Image'))

const Buttons = ['challenges', 'playground']
const Skills = [
  'html',
  'javascript',
  'css',
  'vue',
  'react',
  'sass',
  'nodejs',
  'swift',
  'linux',
  'docker'
]

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <DiTerminal className={styles['icon-terminal']} />

        <h1>
          <Link href="/">
            <a>Manon.Icu</a>
          </Link>
        </h1>
      </div>
      <div className={styles.description}>
        <Image
          className={styles.logo}
          src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/avatar.jpeg"
          alt="Manon.icu"
          layout="fill"
          width={240}
          height={240}
        />
        <div className={styles.info}>
          <h2 className={styles.h2}>Frontend Developer</h2>
          <p className={styles.p}>Hi! My name is Manon,Based in China.</p>
          <p className={styles.p}>
            My specialties are:
            <br />
            - SPA (Single Page Apps) with Vue React and Next.js.
            <br />- Backend solutions with Node.js .
          </p>
          <p>
            I will be happy to be part of your team or make a great product for
            you!
          </p>
        </div>
        <div className={styles.btn}>
          {Buttons.map((item) => (
            <Link href={`/${item}`} key={item}>
              <a className={styles.a}>{item}</a>
            </Link>
          ))}
        </div>
        <div className={styles.skills}>
          {Skills.map((item) => (
            <Image
              className={styles.tag}
              key={item}
              src={`https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${item}.svg`}
              alt={item}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
      <div className={styles.social}>
        <Link href="https://twitter.com/Manonicu">
          <a target="_blank">
            <FaTwitter />
          </a>
        </Link>
        <Link href="https://github.com/Manonicu">
          <a target="_blank">
            <FaGithub />
          </a>
        </Link>
        <Link href="/about">
          <a>
            <FaSitemap />
          </a>
        </Link>
      </div>
    </div>
  )
}
