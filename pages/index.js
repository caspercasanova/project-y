import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer/Footer';
import LandingBanner from '../components/LandingBanner/LandingBanner';
import Header from '../components/Header/Header';
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
        <div>Statistics</div>
        <div>Sales Graph</div>
        <div>Visitor Map</div>
      </section>
      <section>
        <div>
          <div>This Is the Product Catalog</div>
          <p>
            If your blog's been submitted by someone else
            and you want to update its categories or
            description, send an email to
            trends@bloggingfordevs.com via the email address
            listed on your website ✌️
          </p>
          <p>
            The more people know about Trends, the more
            developers' blogs are discovered and followed.
            Help us get the word out!
          </p>
          <p>
            These rankings were originally inspired by the
            Detailed.com list of best blogs. SVG Patterns
            are from Hero Patterns and many icons are from
            Devicon. Thanks also to everyone who's submitted
            blogs and shared their feedback!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
