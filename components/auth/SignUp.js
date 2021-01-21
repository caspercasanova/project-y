import React, { useState, useEffect } from 'react';
import Input from '../ui/Input/Input';
// TODO set it up
// signup
//
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setName] = useState('');
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
      <Input placeholder="name" />
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Input placeholder="street address" />
      <Input placeholder="zip code" />
      <button type="submit"> Submit</button>
    </form>
  );
}
