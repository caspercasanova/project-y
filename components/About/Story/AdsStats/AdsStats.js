import TinyAreaChart from '../../../graphs/TinyAreaChart';
import React from 'react';
import styles from './AdsStats.module.scss';

export default function AdsStats() {
  return (
    <div className={styles.AdsStats}>
      <header className={styles.header}>
        <h2>Ad Reception</h2>
      </header>

      <Stat index={1} name={'Creative 01'} rank={13} />
      <Stat index={1} name={'Creative 01'} rank={13} />
      <Stat index={1} name={'Creative 01'} rank={13} />
      <Stat index={1} name={'Creative 01'} rank={13} />
      <Stat index={1} name={'Creative 01'} rank={13} />
    </div>
  );
}

const Stat = ({ index, name, stats, rank }) => {
  return (
    <div className={styles.StatContainer}>
      <div className={styles.stat}>{index}</div>
      <div className={styles.stat}>{name}</div>
      <div className={styles.stat}>{rank}</div>
      <div className={styles.stat}>
        <TinyAreaChart />
      </div>
    </div>
  );
};
