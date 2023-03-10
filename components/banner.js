import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion';

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.83, 0, 0.17, 1],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

export default function Banner() {
  return (
    <motion.div className="banner">
      <div className="container">
        <motion.div
          className="row"
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <motion.div className="banner-name" variants={item}>
            Evelyn <br></br>Falkenberg
          </motion.div>

          <motion.div variants={item}>
            <Image
              className="side-image left"
              alt="Evelyn Falkenberg in Vietnam"
              src={'/vacation.jpg'}
              width={700}
              height={700}
            />
          </motion.div>
          <motion.div className="main-image__wrapper" variants={item}>
            <Image
              className="main-image"
              alt="Profilbild"
              src={'/evelyn-5.jpg'}
              width={700}
              height={700}
            />
          </motion.div>
          <motion.div variants={item}>
            <Image
              className="side-image right"
              alt=" Evelyn Falkenberg in Kambodscha"
              src={'/vacation-2.jpg'}
              width={700}
              height={700}
            />
          </motion.div>
          <motion.div className="profession" variants={item}>
            E-Commerce Managerin aus <span>Karlsruhe</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
