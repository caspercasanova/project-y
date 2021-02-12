const defaultOpts = {
  url: '/api/customers/login',
  method: 'POST',
};

export default function useLogin({ email, password }) {
  if (!(email && password)) {
    throw new Error({
      message:
        'A first name, last name, email and password are required to login',
    });
  }

  return fetch({ ...defaultOpts, body: { email, password } });
}
