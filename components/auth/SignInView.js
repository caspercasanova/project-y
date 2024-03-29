import React, { useState } from 'react';
import styles from './SignInView.module.scss';
import Register from './Register/Register';
import Login from './Login/Login';
import ForgotPW from './ForgotPW/ForgotPW';
import Button from '../ui/Button/Button';

export default function SignInView() {
  const [currentPage, setCurrentPage] = useState('Sign In');
  return (
    <div className={styles.SignInView}>
      <div className={styles.logoContainer}>
        <img src="/images/Project_Y_logo.png" />
      </div>
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
          {currentPage == 'Sign In' && <Login />}
          {currentPage == 'Sign Up' && <Register />}
        </div>
        <button>Continue As A Guest</button>
        <button>Forgot Your PW?</button>
      </div>
    </div>
  );
}
