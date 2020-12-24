import React from 'react';
import styles from './LoginBar.module.scss';

export default function LoginBar() {
  return (
    <div className={styles.LoginBar}>
      <div>Link To Other Product</div>
      <button>Create Account / Login</button>
    </div>
  );
}
