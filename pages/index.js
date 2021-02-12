import Head from 'next/head';
import Container from '../components/ui/Container/Container';
import LandingPage from '../components/LandingPage';
import styles from '../styles/Home.module.scss';
import Layout from '../components/common/Layout/Layout';
export default function Home() {
  let currYear = new Date().getFullYear;
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
