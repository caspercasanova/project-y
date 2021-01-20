import React from 'react';
import styles from './FeaturedProduct.module.scss';
import Image from 'next/image';
export default function FeaturedProduct() {
  return (
    <section className={styles.Featured_Product_Section}>
      <header className={styles.Featured_Product_Header}>
        <h3>Featured Product</h3>
      </header>
      <div className={styles.Featured_Product_Body}>
        <div className={styles.Featured_Product_Info}>
          <p>
            You can use the Stripe API in test mode, which does not
            affect your live data or interact with the banking
            networks. The API key you use to authenticate the request
            determines whether the request is live mode or test mode.
          </p>
        </div>
        <div className={styles.Featured_Product_Image}>
          <Image
            src={'/images/eazy_e.png'}
            height={700}
            width={600}
            alt={'something'}
          />
        </div>
      </div>
    </section>
  );
}
