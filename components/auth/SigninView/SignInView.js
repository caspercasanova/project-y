import React, { useState } from 'react';
import styles from './SignInView.module.scss';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import ForgotPW from '../ForgotPW';

import Button from '../../ui/Button/Button';
export default function SignInView() {
  const [currentPage, setCurrentPage] = useState('Sign In');
  return (
    <div>
      <div>Welcome To Project Y</div>
      <div className={styles.SignInContainer}>
        <div>
          <Button onClick={() => setCurrentPage('Sign In')}>
            Sign In
          </Button>
          <Button onClick={() => setCurrentPage('Sign Up')}>
            Sign Up
          </Button>
        </div>
        <div>
          {currentPage == 'Sign In' && <SignIn />}
          {currentPage == 'Sign Up' && <SignUp />}
        </div>
        <Button>Continue As A Guest</Button>
        <Button>Forgot Your PW?</Button>
      </div>
    </div>
  );
}
