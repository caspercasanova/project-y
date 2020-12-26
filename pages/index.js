import Head from 'next/head';
import styles from '../styles/Home.module.scss';
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
        <header>
          <div>Featured Product</div>
        </header>
        <div></div>
      </section>

      <section className={styles.New_From_Us_Section}>
        <header className={styles.New_From_Us_Header}>
          <h3>New From Project-Y</h3>
        </header>
        <div className={styles.New_From_Us_Body}>
          <div className={styles.New_From_Us_Images}></div>
          <div className={styles.New_From_Us_Images}></div>
        </div>
      </section>

      <section
        className={styles.Latest_And_Greatest_Section}>
        <header
          className={styles.Latest_And_Greatest_Header}>
          <h3>The Latest & Greatest</h3>
        </header>
        <figure className={styles.Latest_And_Greatest_Body}>
          <LatestProductCart />
          <LatestProductCart />
          <LatestProductCart />
          <LatestProductCart />
          <LatestProductCart />
          <LatestProductCart />
        </figure>
      </section>

      <section className={styles.Saleschart_Section}>
        <header className={styles.Saleschart_Header}>
          <h3>Project-Y Sales-To-Date</h3>
        </header>
        <div className={styles.Saleschart_Body}>
          <div className={styles.Saleschart_Info}>
            <p>
              The Project_Y Group is organized around the
              simple Idea transparency leads to success. You
              the viewer has viewing access to all of
              accounts. Our Brand is centered around
              authenticity and how else could we be
              authentic if we didn't show the ins and outs
              of the business. Our API has predictable
              resource-oriented URLs, accepts form-encoded
              request bodies, returns JSON-encoded
              responses, and uses standard HTTP response
              codes, authentication, and verbs.
            </p>
            <p>
              You can use the Stripe API in test mode, which
              does not affect your live data or interact
              with the banking networks. The API key you use
              to authenticate the request determines whether
              the request is live mode or test mode.
            </p>
            <p>
              The Stripe API differs for every account as we
              release new versions and tailor functionality.
              These docs are customized to your version of
              the API and display your test key and test
              data, which only you can see.
            </p>
          </div>
          <figure className={styles.Saleschart_Figure}>
            <SimpleLineChart />
          </figure>
        </div>
        <footer>
          <figure
            className={styles.Saleschart_Footer_Figure}>
            <SimpleLineChart />
          </figure>
        </footer>
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

const LatestProductCart = () => {
  return (
    <article className={styles.LatestProductCard}>
      <div className={styles.LatestProductImage}></div>
      <div className={styles.LatestProductInfo}>
        <div>$1240</div>
        <div>KD12</div>
      </div>
      <div>Basketball Shoe</div>
    </article>
  );
};
