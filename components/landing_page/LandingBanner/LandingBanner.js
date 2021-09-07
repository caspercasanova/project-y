import React from 'react';
import styles from './LandingBanner.module.scss';
import Image from 'next/image';
import Button from '../../ui/Button/Button';
export default function LandingBanner() {
  return (
    <section className={styles.LandingBannerSection}>
      <div className={styles.PictureContainer}>
        <img
          src={
            'https://static.nike.com/a/images/f_auto/dpr_1.0/w_1242,c_limit/315e7ecf-8c74-494e-a630-d75202ec5f92/nike-just-do-it.jpg'
          }
          alt={'banner'}
          // layout="responsive"
          // priority
        />
        <div className={styles.BannerText}>
          <h1>Next Level Thinking</h1>
          <h2>When Living Aint Eazy</h2>
          <Button>Shop Now</Button>
        </div>
      </div>
    </section>
  );
}
