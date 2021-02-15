import React from 'react';
import styles from './LandingBanner.module.scss';
import Image from 'next/image';
import Button from '../../ui/Button/Button';
export default function LandingBanner() {
  return (
    <section className={styles.LandingBannerSection}>
      <div className={styles.PictureContainer}>
        <img
          src={'/images/eazy_e.png'}
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
