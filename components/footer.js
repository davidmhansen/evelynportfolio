import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="logo">
            <Link href="/">Evelyn Falkenberg</Link>
            - Copyright {new Date().getFullYear()}
          </div>
          <div className="navigation">
            <nav>
              <Link href="/impressum">Impressum</Link>
              <Link href="mailto:mail@evelynfalkenberg.de">Kontakt</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
