import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';
import LandingBanner from '../components/ui/LandingBanner/LandingBanner';
import SimpleLineChart from '../components/graphs/SimpleLineChart';
export default function Home() {
  let currYear = new Date().getFullYear;
  return (
    <div className={styles.container}>
      <Head>
        <title>Project_Y</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LandingBanner />
      <section>
        <div>Featured Release</div>
      </section>
      <section>
        <div>Statistics</div>
      </section>
      <section>
        <div>Sales Graph</div>
        <figure>
          <SimpleLineChart />
        </figure>
      </section>
      <section>
        <div>Visitor Map</div>
      </section>
      <section>
        <div>
          This is a section meant to be cool above the
          footer
        </div>
      </section>
      <Footer />
    </div>
  );
}
