import React, { useState, useEffect, useCallback } from 'react';
import Field from '../ui/Field/Field';
import Button from '../ui/Button/Button';
// TODO set it up
// signup
//
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPW] = useState('');
  const [dirty, setDirty] = useState(false);

  const handleSignUp = async e => {
    e.preventDefault();
    try {
    } catch (e) {}
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
      <Field placeholder="First Name" />
      <Field placeholder="Last Name" />
      <Field placeholder="Email" />
      <Field placeholder="Password" />
      <Field placeholder="Street Address" />
      <Field placeholder="Street Address 2" />
      <Field placeholder="City" />
      <Field placeholder="Zip Code" />
      <Field placeholder="State" />
      <Button type="submit"> Submit</Button>
    </form>
  );
}
