import React from 'react';
import styles from './Corners.module.scss';

export default function Corners({ bottom = false, top = false }) {
  return (
    <div className={styles.CornerContainer}>
      {top && <TopCorners />}
      {bottom && <BottomCorners />}
    </div>
  );
}

const TopCorners = () => (
  <div className={`${styles.Corners} ${styles.TopCorners}`} />
);

const BottomCorners = () => (
  <div className={`${styles.Corners} ${styles.BottomCorners}`} />
);
