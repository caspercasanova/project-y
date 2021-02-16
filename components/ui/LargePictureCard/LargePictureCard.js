import React from 'react';
import styles from './LargePictureCard.module.scss';

export default function LargePictureCard({ src, link, figCaption }) {
  return (
    <div className={styles.LargePictureCard}>
      <div className={styles.PictureContainer}>
        <img src={src} />
      </div>
      <figcaption className={styles.figCaption}>
        {figCaption}
      </figcaption>
    </div>
  );
}
