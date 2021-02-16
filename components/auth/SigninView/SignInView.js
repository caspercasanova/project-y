import React, { useState } from 'react';
import styles from './SignInView.module.scss';
import Register from '../Register';
import Login from '../Login';
import ForgotPW from '../ForgotPW';
import Button from '../../ui/Button/Button';

export default function SignInView() {
  const [currentPage, setCurrentPage] = useState('Sign In');
  return (
    <div>
      <h2>Welcome To Project Y</h2>
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
