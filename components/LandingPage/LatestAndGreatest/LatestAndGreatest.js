import React from 'react';
import styles from './Latest.module.scss';
import LatestProductCard from '../LatestProductCard/LatestProductCard';
export default function LatestAndGreatest() {
  return (
    <section className={styles.Latest_And_Greatest_Section}>
      <header className={styles.Latest_And_Greatest_Header}>
        <h3>The Latest & Greatest</h3>
      </header>
      <figure className={styles.Latest_And_Greatest_Body}>
        <LatestProductCard />
        <LatestProductCard />
        <LatestProductCard />
        <LatestProductCard />
        <LatestProductCard />
        <LatestProductCard />
      </figure>
    </section>
  );
}
