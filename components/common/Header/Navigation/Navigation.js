import React from 'react';
import styles from './Navigation.module.scss';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div>
      <nav className={styles.NavigationBar}>
        <div className={styles.NavLink}>
          <Link href={'/'}>Home</Link>
        </div>
        <div className={styles.NavLink}>
          <Link href={'/profile'}>Profile</Link>
        </div>
        <div className={styles.NavLink}>
          <Link href={'/products'}>Products</Link>
        </div>
        <div className={styles.NavLink}>
          <Link href={'/about'}>About</Link>
        </div>
      </nav>
    </div>
  );
}
