import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about-content">
            <h3>Meine Kompetenzen</h3>
            <p>
              Als E-Commerce Managerin mit Schwerpunkt auf Conversion Rate
              Optimierung arbeite ich engagiert an der Performance-Steigerung
              unterschiedlicher Online-Shops. Zu meinen größten Stärken zählt
              meine analytische, kunden- und lösungsorientierte Denkweise, sowie
              meine ausgeprägten Fähigkeiten in den Bereichen Kommunikation und
              Projektmanagement. Als empathische und extrovertierte Person
              arbeite ich gerne im Team, treibe aber auch eigenverantwortlich
              Projekte zielstrebig voran.
            </p>
            <div className="btn-row">
              <a target="_blank" href="/Lebenslauf-Evelyn-Falkenberg.pdf">
                Lebenslauf ansehen
              </a>
            </div>
          </div>
          <div className="about-images">
            <div>
              <Image
                alt="Test"
                className="top-right"
                src={"/work.jpg"}
                width={700}
                height={700}
              ></Image>
            </div>
            <div>
              <Image
                alt="Test"
                className="bottom-left"
                src={"/do-something-great.jpg"}
                width={700}
                height={700}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="yellow-box"></div>
    </div>
  );
}
