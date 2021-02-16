import React from 'react';
import styles from './Categories.module.scss';

export default function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.category}>LifeStyle</div>
      <div className={styles.category}>Running</div>
      <div className={styles.category}>BasketBall</div>
      <div className={styles.category}>Football</div>
      <div className={styles.category}>Soccer</div>
      <div className={styles.category}>Training & Gym</div>
      <div className={styles.category}>Skateboard</div>
      <div className={styles.category}>Track and Field</div>
      <div className={styles.category}>Walking</div>
      <div className={styles.category}>Shoes Under $100</div>
    </div>
  );
}
