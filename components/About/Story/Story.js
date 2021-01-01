import React from 'react';
import styles from './Story.module.scss';
import SimpleLineChart from '../../graphs/SimpleLineChart';
export default function Story() {
  return (
    <>
      <section>
        <div>
          <h2>Story</h2>
        </div>

        <div>
          <article>
            Project Y Is a business built for and by the people. It
            aims to showcase an emotion and mentality ignored and
            uncapturable by modern media. Project Y is sharp edge in a
            world of dull blades. Money is not the motive. Active
            Movement is.
          </article>
        </div>
        <figure>
          <img />
          <figcaption>
            This is a chart Showing Project Y Sales To Date
          </figcaption>
        </figure>
        <figure>
          <img />
          <figcaption>
            This is a chart showing Project Y Growth
          </figcaption>
        </figure>

        <div>
          <article>
            Project Y was established first as an expirament on
            business models and has since transitioned into a full
            fledged business. Inspiration landed in 2012 and has been
            cultivated since. Website Launched 2020. Business Liscence
            Unknown.
          </article>
        </div>

        <div>
          <div>
            total cost of volume / marginal costs / labor costs /
          </div>
          <div>
            portion of wages manufacturers: 15$/h internship: 15$/h
            designers: 17$/h lead designer: 23$/h ceo: 15% of total
            earnings research and development: 15% chart showing wages
            of workers for past 2 years
          </div>
          <div>current employees (use product card)</div>
        </div>
      </section>
      <section className={styles.Saleschart_Section}>
        <header className={styles.Saleschart_Header}>
          <h3>Project_Y Sales-To-Date</h3>
        </header>
        <div className={styles.Saleschart_Body}>
          <div className={styles.Saleschart_Info}>
            <p>
              The Project_Y Group is organized around the simple Idea
              transparency leads to success. You the viewer has
              viewing access to all of accounts. Our Brand is centered
              around authenticity and how else could we be authentic
              if we didn't show the ins and outs of the business. Our
              API has predictable resource-oriented URLs, accepts
              form-encoded request bodies, returns JSON-encoded
              responses, and uses standard HTTP response codes,
              authentication, and verbs.
            </p>
            <p>
              You can use the Stripe API in test mode, which does not
              affect your live data or interact with the banking
              networks. The API key you use to authenticate the
              request determines whether the request is live mode or
              test mode.
            </p>
            <p>
              The Stripe API differs for every account as we release
              new versions and tailor functionality. These docs are
              customized to your version of the API and display your
              test key and test data, which only you can see.
            </p>
          </div>
          <div className={styles.Saleschart_Figure}>
            <SimpleLineChart />
          </div>
        </div>
        <footer>
          <figure className={styles.Saleschart_Footer_Figure}>
            <SimpleLineChart />
          </figure>
        </footer>
      </section>
    </>
  );
}
