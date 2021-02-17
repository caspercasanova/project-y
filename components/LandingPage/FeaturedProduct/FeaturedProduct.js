import React from 'react';
import styles from './FeaturedProduct.module.scss';
import Image from 'next/image';
import SimpleLineChart from '../../graphs/SimpleLineChart';

import Section from '../../ui/Section/Section';
export default function FeaturedProduct() {
  return (
    <Section header={'Featured Product'}>
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
        <div className={styles.rightContainer}>
          <div className={styles.imageContainer}>
            <img
              src={
                'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/efecb485-62e8-406d-b09c-4ec2426eef6d/sportswear-heritage-windrunner-mens-corduroy-jacket-VdJfdz.jpg'
              }
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
