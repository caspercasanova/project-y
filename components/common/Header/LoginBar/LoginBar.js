import React from 'react';
import styles from './LoginBar.module.scss';
import Button from '../../../ui/Button/Button';
import Bag from '../../../icons/Bag.tsx';

import { useUI } from '../../../ui/context';

export default function LoginBar() {
  const { openModal } = useUI();

  return (
    <div className={styles.LoginBar}>
      <div>
        Created By:{' '}
        <a href="https://www.linkedin.com/in/310-nicholas-lopez/">
          Nicholas Lopez
        </a>
      </div>
      <div>
        <button
          aria-label="Create Account"
          onClick={() => openModal()}>
          Create Account
        </button>
        <button aria-label="Create Account">
          <Bag />
        </button>
      </div>
    </div>
  );
}
