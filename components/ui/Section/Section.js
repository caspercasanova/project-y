import React from 'react';
import styles from './Section.module.scss';
export default function Section({ header, children }) {
  return (
    <section className={styles.Section}>
      {header && <h2>{header}</h2>}
      <div className={styles.row}>{children}</div>
    </section>
  );
}
