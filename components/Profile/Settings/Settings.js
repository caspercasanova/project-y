import React from 'react';
import styles from './Settings.module.scss';
import Button from '../../ui/Button/Button';
export default function Settings() {
  const defaultProfile = {
    displayName: 'New Sense Conscript',
    uid: '_0131310',
    email: 'nsa@gmail.com',
    currentPoints: '0',
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <h5>Display Name:</h5>
        <h3>{defaultProfile.displayName}</h3>
      </div>
      <div>
        <h5>Email:</h5>
        <h3>{defaultProfile.email}</h3>
      </div>
      <div>
        <Button>Delete Account</Button>
      </div>
    </div>
  );
}
