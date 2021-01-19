import React from 'react';
import styles from './Button.module.scss';
export default function Button({
  onClick = () => {},
  type = 'button',
  loading,
  children,
}) {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {children}
      {loading && <i>..Loading..</i>}
    </button>
  );
}
