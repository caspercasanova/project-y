import React from 'react';
import styles from './MiniNav.module.scss';

export default function MiniNav({ children }) {
  return (
    <nav className={styles.Mininav}>
      <div className={styles.Contents}>
        {children.map((child, index) => (
          <button
            className={styles.link}
            key={`nav_option_${index}`}>
            {child}
          </button>
        ))}
      </div>
    </nav>
  );
}
