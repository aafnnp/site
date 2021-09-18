import Layout from 'components/Layout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <Layout
      title="About"
      description="Manon.icu - FullStack Developer.Helping people turn their ideas into sites & apps that work.
    Professional and Cost-Effective.
    Always."
    >
      <motion.figure
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        duration={300}
      >
        <Image
          size="2xl"
          alt="Manon.icu"
          width={200}
          height={200}
          className="rounded-full"
          src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/KDdimu.jpg"
        />
      </motion.figure>

      <hgroup className="my-8 text-4xl leading-relaxed">
        <motion.h1
          animate={{ targetX: 1, opacity: 1 }}
          duration={300}
          delay={300}
        >
          Manon.icu
        </motion.h1>
        <h2 className="text-sm text-gray-400">FullStack Developer.</h2>
      </hgroup>
      <div className="description">
        Helping people turn their ideas into sites & apps that work.
        <br />
        Professional and Cost-Effective. <br />
        <span>Always.</span>
      </div>

      <nav className="mt-8">
        <Link href="/challenges">
          <a>Challenges</a>
        </Link>
        <Link href="/">
          <a>Blog</a>
        </Link>
      </nav>
    </Layout>
  );
}
