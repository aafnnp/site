import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children, title, description }) => {
  const { route } = useRouter();

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className={`flex flex-col items-start p-4 ${
          route === '/about' && 'items-center h-full about'
        }`}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
