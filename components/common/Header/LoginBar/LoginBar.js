import React from 'react';
import styles from './LoginBar.module.scss';
import Button from '../../../ui/Button/Button';
export default function LoginBar() {
  return (
    <div className={styles.LoginBar}>
      <div>
        Created By:{' '}
        <a href="https://www.linkedin.com/in/310-nicholas-lopez/">
          Nicholas Lopez
        </a>
      </div>
      <div>
        <Button>Create Account</Button>
        <Button>Cart</Button>
      </div>
    </div>
  );
}
