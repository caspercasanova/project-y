import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  let currYear = new Date().getFullYear;
  return (
    <div className={styles.container}>
      <Head>
        <title>Stay Sick Yo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Product</div>
        <div>Image</div>
        <div>Buy Now</div>
      </main>
      <section>
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

          <JoinEmailList />
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <a href={'#'}>Returns/Shipping</a>
          <a href={'#'}>Contact Us</a>
          <a href={'#'}>Terms & Conditions</a>
          <a href={'#'}>FAQS</a>
        </div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <img
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.logo}
          />
        </a>
        <div>© {currYear} New Sense Active</div>
      </footer>
    </div>
  );
}

const JoinEmailList = () => {
  return (
    <div>
      <div>Become a New Sense Nuisence</div>
      <div>
        Signup to receive all upcoming news on collection
        releases and early access to exclusive drops.
      </div>
      <div>
        <input type="text"></input>
        <div>Email Icon</div>
      </div>
    </div>
  );
};
