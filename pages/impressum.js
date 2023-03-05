import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Impressum() {
  return (
    <div>
      <Head>
        <title>Evelyn Falkenberg - E-Commerce Managerin</title>
        <meta
          name="description"
          content="Evelyn Falkenberg - E-Commerce Managerin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <div className="impressum-wrapper">
          <div className="impressum-header">
            <h1>Impressum</h1>
            <p>Angaben gemäß § 5 TMG</p>
            <p>Evelyn Falkenberg Rüppurrer Straße 132 76137 Karlsruhe </p>
            <p>Vertreten durch: Evelyn Falkenberg</p>
            <h2>Kontakt:</h2>
            <p>Telefon: 017621430518</p>
            <p>Mail: mail@evelynfalkenberg.de</p>
          </div>
          <div className="impressum-content">
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
