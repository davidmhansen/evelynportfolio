import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';


// import components
import Header from '@/components/header';
import Banner from '@/components/banner';
import About from '@/components/about';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
    <Head>
      <title>Evelyn Falkenberg - E-Commerce Managerin</title>
      <meta name="description" content="Evelyn Falkenberg - E-Commerce Managerin" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <Banner/>
    <About/>
    <Footer/>
    </div>
  );
}
