import React from 'react';
import styles from './Navigation.module.scss';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className={styles.navagationContainer}>
      <div className={styles.logo}>
        <img src={'/images/Project_Y_logo.png'} alt="logo" />
      </div>
      <nav className={styles.NavigationBar}>
        <Link href={'/'}>
          <div className={styles.NavLink}>Home</div>
        </Link>
        <Link href={'/profile'}>
          <div className={styles.NavLink}>Profile</div>
        </Link>
        <Link href={'/products'}>
          <div className={styles.NavLink}>Products</div>
        </Link>
        <Link href={'/about'}>
          <div className={styles.NavLink}>About</div>
        </Link>
      </nav>
      <div className={styles.LittlePhrase}>
        <i>Stay Up</i>
      </div>
    </div>
  );
}
