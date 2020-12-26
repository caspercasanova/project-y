import React from 'react';
import Link from 'next/link';
import JoinClub from './JoinClub/JoinClub';
import styles from './Header.module.scss';
import LoginBar from './LoginBar/LoginBar';

export default function Header() {
  return (
    <section className={styles.NavigationSection}>
      <LoginBar />
      <nav className={styles.NavagationBar}>
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
      <JoinClub />
    </section>
  );
}
