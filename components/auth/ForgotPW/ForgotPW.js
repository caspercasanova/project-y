import React, { useState, useEffect, useCallback } from 'react';
import Field from '../../ui/Field/Field';
import { validate } from 'email-validator';

export default function ForgotPW() {
  const [email, setEmail] = useState('');
  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState(false);
  const handleRequest = async e => {
    e.preventDefault();
    if (dirty) return;

    try {
      const data = await fetch('/api/customer/forgotpw', {
        email,
      }).then(res => res.json());
    } catch (e) {
      console.log(error);
      setError(true);
    }
  };

  const handleValidation = useCallback(() => {
    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email));
    }
  }, [email, dirty]);

  useEffect(() => {
    handleValidation();
  }, [handleValidation]);

  return (
    <div>
      <div>Forgot PW</div>
      <form onSubmit={handleRequest}>
        <Field />
        <button type="submit"></button>
      </form>
    </div>
  );
}
