import React from 'react';
import styles from './Button.module.scss';
export default function Button({
  variant = 'normal',
  onClick = () => {},
  type = 'button',
  loading,
  children,
}) {
  let style;

  if (variant == 'normal') {
    style = styles.normal;
  }

  if (variant == 'pulse') {
    style = styles.pulse;
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${style}`}
      type={type}>
      {children}
      {loading && <i>..Loading..</i>}
    </button>
  );
}
