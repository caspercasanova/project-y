import React from 'react';
import styles from './LatestProductCard.module.scss';
export default function LatestProductCard() {
  return (
    <article className={styles.LatestProductCard}>
      <div className={styles.LatestProductImage}></div>
      <div className={styles.LatestProductInfo}>
        <div>$1240</div>
        <div>KD12</div>
      </div>
      <div>Basketball Shoe</div>
    </article>
  );
}
