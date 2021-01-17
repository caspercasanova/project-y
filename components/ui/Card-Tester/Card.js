import React from 'react';
import styles from './Card.module.scss';
export default function Card({ children }) {
  return <article className={styles.Card_Test}>{children}</article>;
}
