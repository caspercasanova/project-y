import React, { useState, useCallback, useEffect } from 'react';
import { useUI } from '../../ui/context';
import Field from '../../ui/Field/Field';
import { validate } from 'email-validator';
// convert login to hook
// import useLogin from '../../framework/useLogin';

const login = async ({ password, email }) => {
  console.log(email, password);
  const data = await fetch('/api/customers/login', {
    method: 'POST',
    body: { password, email },
  }).then(res => res.json());
  console.log(data);
};

export default function SignIn() {
  const { setModalView, closeModal } = useUI();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [dirty, setDirty] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleLogin = async e => {
    // if (!dirty && !disabled) {
    //   setDirty(true);
    //   handleValidation();
    // }
    e.preventDefault();
    try {
      setLoading(true);
      setMessage('');
      login({
        email,
        password,
      });
      setLoading(false);
      closeModal();
    } catch (errors) {
      //setMessage(errors);
      console.log(errors);
      setLoading(false);
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
    <div>
      <div>Sign in</div>
      <form>
        {message && (
          <div className="text-red border border-red p-3">
            {message}. Did you {` `}
            <a
              className="text-accent-9 inline font-bold hover:underline cursor-pointer"
              onClick={() => setModalView('FORGOT_VIEW')}>
              forgot your password?
            </a>
          </div>
        )}
        <Field
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Field
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit" onClick={() => handleLogin()}>
          Submit
        </button>

        <div className="pt-1 text-center text-sm">
          <span className="text-accents-7">
            Don't have an account?
          </span>
          {` `}
          <a
            className="text-accent-9 font-bold hover:underline cursor-pointer"
            onClick={() => setModalView('SIGNUP_VIEW')}>
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
