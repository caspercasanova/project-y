import React from 'react';
import styles from './JoinBanner.module.scss';
export default function JoinBanner() {
  return (
    <section className={styles.JoinBanner}>
      <div>
        <button>Join The Team</button>
      </div>
      <div className={styles.ImageContainer}>
        <img src={'/images/SpiritTheNow.png'} />
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </section>
  );
}
