import Image from 'next/image';
import temple from '../public/temple.JPG';
import portrait from '../public/portrait.jpg';
import tree from '../public/tree.JPG';

import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ ease: 'easeOut', duration: 1.5 }}
          >
            <Image
              className="side-image left"
              alt="User profile picture"
              src={temple}
            />
          </motion.div>
          <motion.div
            initial={{
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="banner-name"
          >
            Evelyn <br></br>Falkenberg
          </motion.div>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className="main-image__wrapper"
          >
            <Image
              className="main-image"
              alt="User profile picture"
              src={portrait}
            />
          </motion.div>
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ ease: 'easeOut', duration: 1.5 }}
          >
            <Image
              className="side-image right"
              alt=" User profile picture"
              src={tree}
            />
          </motion.div>
        </div>
        <motion.div initial={{
              opacity: 0,
              y: 50
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{ ease: 'easeOut', duration: 1, delay: .25 }} className="profession">E-Commerce Managerin aus <span>Karlsruhe</span></motion.div>
      </div>
    </div>
  );
}
