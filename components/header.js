import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header>
      <motion.div
        initial={{
          y: -10,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
        className="container"
      >
        <div className="header__wrapper">
          <div className="logo">
            <Link href="/">Evelyn Falkenberg</Link>
          </div>
          <div className="navigation">
            <nav>
              <a target="_blank" href="/Lebenslauf.pdf">Lebenslauf</a>
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
      </motion.div>
    </header>
  );
}
