import Link from 'next/link';
import Image from 'next/image';

import temple from '../public/temple.jpg';
import tree from '../public/tree.jpg';

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
              unterschiedlicher Online-Shops. Meine Stärken liegen in der
              Datenanalyse und Interpretation sowie in der Planung und Umsetzung
              von A/B-Tests und dem damit verbundenen Projektmanagement.
            </p>
            <div className='btn-row'>
                <Link href="#">Lebenslauf ansehen</Link>
            </div>
          </div>
          <div className='about-images'>
            <div>
                <Image alt='Test' className='top-right' src={temple}></Image>
            </div>
            <div>
            <Image alt='Test' className='bottom-left' src={tree}></Image>
            </div>
          </div>
        </div>
      </div>
      <div className='yellow-box'></div>
    </div>
  );
}
