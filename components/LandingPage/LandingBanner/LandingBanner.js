import React from 'react';
import styles from './LandingBanner.module.scss';
import Image from 'next/image';
export default function LandingBanner() {
  return (
    <section className={styles.LandingBannerSection}>
      <div className={styles.PictureContainer}>
        <Image
          src={'/images/eazy_e.png'}
          alt={'banner'}
          layout="responsive"
          width={1200}
          height={700}
        />
        <div className={styles.BannerText}>
          <h1>Next Level Thinking</h1>
          <h2>When Living Aint Eazy</h2>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
}
