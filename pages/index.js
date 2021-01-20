import Head from 'next/head';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';
import Container from '../components/ui/Container/Container';
import LandingPage from '../components/LandingPage';
import styles from '../styles/Home.module.scss';

export default function Home() {
  let currYear = new Date().getFullYear;
  return (
    <Container>
      <Head>
        <title>Project_Y</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LandingPage />
      <Footer />
    </Container>
  );
}
