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
        <div>
          <Link href={'/'}>Home</Link>
        </div>
        <div>
          <Link href={'/profile'}>About</Link>
        </div>
        <div>
          <Link href={'/products'}>Products</Link>
        </div>
        <div>
          <Link href={'/about'}>About</Link>
        </div>
      </nav>
      <JoinClub />
    </section>
  );
}
