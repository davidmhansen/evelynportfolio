import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.6, delay: 0.1 }}
      exit={{ opacity: 0, y: 200 }}
    >
      <div className="container">
        <div className="header__wrapper">
          <div className="logo">
            <Link href="/">Evelyn Falkenberg</Link>
          </div>
          <div className="navigation">
            <nav>
              <a target="_blank" href="/Lebenslauf.pdf">
                Lebenslauf
              </a>
              <Link href="mailto:mail@evelynfalkenberg.de">Kontakt</Link>
              <a
                target="_blank"
                href="https://www.xing.com/profile/Evelyn_Falkenberg/cv"
              >
                XING
              </a>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
