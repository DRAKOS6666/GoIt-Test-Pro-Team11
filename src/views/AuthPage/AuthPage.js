import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import styles from './AuthPage.module.css';
import { toast } from 'react-toastify';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmitRegistr = event => {
    event.preventDefault();
    dispatch(authOperations.registerUser({ email, password }));
  };

  const handleSubmitLogin = event => {
    event.preventDefault();
    dispatch(authOperations.loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  //kon@mail.com
  //12345

  return (
    <div className={styles.authPage}>
      <div className={styles.info}>
        <h2 className={styles.title}>Pro Test</h2>
        <p className={styles.text}>
          <b>[</b> We will help you find weak points in knowledge so that you
          can strengthen it. We will show you what is relevant to know for a
          <b> QA Engineer</b> and will try to make the learning process more
          diverse_ <b>]</b>
        </p>
      </div>
      <form className={styles.form}>
        <label>
          E-mail:
          <input
            type="text"
            required
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your E-mail"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            required
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
        </label>

        <button type="submit" onClick={handleSubmitRegistr}>
          SIGN UP
        </button>
        <button type="submit" onClick={handleSubmitLogin}>
          SIGN in
        </button>
      </form>
    </div>
  );
}

export default AuthPage;
