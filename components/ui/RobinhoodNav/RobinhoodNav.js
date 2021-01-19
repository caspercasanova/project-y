import React from 'react';
import styles from './RobinhoodNav.module.scss';

export default function RobinhoodNav({
  pages,
  setPage,
  currentlyActive,
}) {
  console.log(pages);
  return (
    <nav className={styles.AboutViewNav}>
      {pages.map((page, index) => (
        <button
          key={index}
          className={
            page.name == currentlyActive ? styles.active : ''
          }
          onClick={() => setPage(page.name)}>
          {page.name}
        </button>
      ))}
    </nav>
  );
}
