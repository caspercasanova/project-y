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
          width={700}
          height={500}
        />
      </div>
    </section>
  );
}
