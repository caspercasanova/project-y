import React from 'react';
import styles from './Modal.module.scss';
export default function Modal({ children }) {
  return (
    <div className={styles.backgroundOverlay}>
      <div className={styles.modalCard}>{children}</div>
    </div>
  );
}
