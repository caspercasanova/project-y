import React from 'react';
import styles from './FeaturedProduct.module.scss';
import Image from 'next/image';
import SimpleLineChart from '../../graphs/SimpleLineChart';
export default function FeaturedProduct() {
  return (
    <section className={styles.Featured_Product_Section}>
      <header>
        <h1>Featured Product</h1>
      </header>
      <div className={styles.Body}>
        <div className={styles.leftContainer}>
          <div className={styles.description}>
            <p>
              You can use the Stripe API in test mode, which does not
              affect your live data or interact with the banking
              networks. The API key you use to authenticate the
              request determines whether the request is live mode or
              test mode.
            </p>
            <p>
              You can use the Stripe API in test mode, which does not
              affect your live data or interact with the banking
              networks. The API key you use to authenticate the
              request determines whether the request is live mode or
              test mode.
            </p>
          </div>
          <div className={styles.LineChart}>
            <SimpleLineChart />
          </div>
        </div>
        <div className={styles.rightContainer}></div>
      </div>
    </section>
  );
}
