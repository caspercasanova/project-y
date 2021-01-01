import React from 'react';
import styles from './LoginBar.module.scss';

export default function LoginBar() {
  return (
    <div className={styles.LoginBar}>
      <div>
        Created By:{' '}
        <a href="https://www.linkedin.com/in/310-nicholas-lopez/">
          Nicholas Lopez
        </a>
      </div>
      <button>Create Account / Login</button>
    </div>
  );
}
