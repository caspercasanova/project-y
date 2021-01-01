import React from 'react';
import styles from './Navigation.module.scss';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div>
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
    </div>
  );
}
