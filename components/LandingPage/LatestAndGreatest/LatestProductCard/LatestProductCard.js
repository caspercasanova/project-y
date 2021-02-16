import React from 'react';
import styles from './LatestProductCard.module.scss';
export default function LatestProductCard({ src }) {
  return (
    <article className={styles.LatestProductCard}>
      <div className={styles.ImageContainer}>
        <img src={src} />
      </div>
      <div className={styles.LatestProductInfo}>
        <div>$1240</div>
        <div>KD12</div>
      </div>
      <div>Basketball Shoe</div>
    </article>
  );
}
