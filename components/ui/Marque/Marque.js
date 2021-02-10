import React from 'react';
import Ticker from 'react-ticker';
import styles from './Marque.module.scss';

export default function Marque({ children }) {
  return (
    <div className={styles.Marque}>
      <Ticker offset={80}>
        {() => <div className={styles.container}>{children}</div>}
      </Ticker>
    </div>
  );
}
