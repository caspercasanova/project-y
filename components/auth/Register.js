import React, { useState, useEffect, useCallback } from 'react';
import Field from '../ui/Field/Field';
import Button from '../ui/Button/Button';
import { validate } from 'email-validator';

export default function Register() {
  const [email, setEmail] = useState('');
  const [codename, setCodename] = useState('');
  const [password, setPassword] = useState('');
  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const data = await fetch('/api/customers/register', {
        email,
        codename,
        password,
      }).then(res => res.json());

      console.log(data);
    } catch (e) {
      console.log(e);
      setError(True);
    }
  };

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password);

    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(
        !validate(email) || password.length < 7 || !validPassword
      );
    }
  }, [email, password, dirty]);

  useEffect(() => {
    handleValidation();
  }, [handleValidation]);

  return (
    <form onSubmit={handleSignUp}>
      <Field
        placeholder="Codename"
        value={codename}
        type="text"
        onChange={e => setCodename(e.target.value)}
      />
      <Field
        placeholder="Email"
        value={email}
        type="email"
        onChange={e => setEmail(e.target.value)}
      />
      <Field
        placeholder="Password"
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit"> Submit</Button>
    </form>
  );
}

/* 
      <Field placeholder="Street Address" />
      <Field placeholder="Street Address 2" />
      <Field placeholder="City" />
      <Field placeholder="Zip Code" />
      <Field placeholder="State" />
*/
