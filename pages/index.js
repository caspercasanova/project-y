import Head from 'next/head';
import Container from '../components/ui/Container/Container';
import LandingPage from '../components/landing_page';
import styles from '../styles/Home.module.scss';
import { Layout } from '../components/common';
export default function Home() {
  return (
    <Container>
      <Head>
        <title>Project_Y</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <LandingPage />
      </Layout>
    </Container>
  );
}
