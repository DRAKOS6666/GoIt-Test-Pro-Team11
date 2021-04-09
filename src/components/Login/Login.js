import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import { toast } from 'react-toastify';
// import styles from './Login.module.css';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleLoginSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.loginUser({ email, password }));
  };

  const handleRegisterSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.registerUser({ email, password }));
  };

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <label>
          E-mail:
      <input
            autoFocus
            required
            autoComplete="on"
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your E-mail"
          />
        </label>
        <label>
          Password:
      <input
            required
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your Name"
          />
        </label>
        <button type="submit">Login</button>
      </form>

      <form onSubmit={handleRegisterSubmit}>
        <label>
          E-mail:
      <input
            autoFocus
            required
            autoComplete="on"
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your E-mail"
          />
        </label>
        <label>
          Password:
      <input
            required
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your Name"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Login;
