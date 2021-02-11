import React, { useState } from 'react';
import { useUI } from '@components/ui/context';
import Field from '../ui/Field/Field';
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [dirty, setDirty] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { setModalView, closeModal } = useUI();

  const handleLogin = async e => {
    if (!dirty && !disabled) {
      setDirty(true);
      handleValidation();
    }

    try {
      setLoading(true);
      setMessage('');
      // await login({
      //   email,
      //   password,
      // })
      setLoading(false);
      closeModal();
    } catch ({ errors }) {
      setMessage(errors[0].message);
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
        <Field placeholder="Email" type="email" onChange={setEmail} />
        <Field
          placeholder="Password"
          type="password"
          onChange={setPassword}
        />

        <button type="submit">Log In</button>

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
