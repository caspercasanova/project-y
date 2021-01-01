import React from 'react';
import JoinClub from './JoinClub/JoinClub';
import styles from './Header.module.scss';
import LoginBar from './LoginBar/LoginBar';
import Navigation from './Navigation/Navigation';

export default function Header() {
  return (
    <section className={styles.NavigationSection}>
      <LoginBar />
      <Navigation />
      <JoinClub />
    </section>
  );
}
