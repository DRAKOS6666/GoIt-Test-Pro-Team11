import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import { toast } from 'react-toastify';
import styles from './Login.module.css';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email сan not be empty');
  const [passwordError, setPasswordError] = useState(
    'Password сan not be empty',
  );
  const [formValid, setFormValid] = useState(false);

  // блокировка кнопки при невалидном вводе
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  // когда пользователь покинул поле ввода
  const blurHandler = e => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      // no default
    }
  };

  // валидация для email
  const emailHandler = e => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect email');
    } else {
      setEmailError('');
    }
  };

  // валидация для password
  const passwordHandler = e => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Password must be longer than 3 and less than 8');
      if (!e.target.value) {
        setPasswordError('Password сan not be empty');
      }
    } else {
      setPasswordError('');
    }
  };

  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.loginUser({ email, password }));
  };

  // const useInput = initialValue => {
  //   const [value, setValue] = useState(initialValue);
  //   const [isDirty, setDirty] = useState(false);

  //   const onChange = e => {
  //     setValue(e.target.value);
  //   };

  //   const onBlur = e => {
  //     setDirty(true);
  //   };

  //   return value, onChange, onBlur;
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail:
          {/* уведомление пользователя об ошибке */}
          {emailDirty && emailError && (
            <div style={{ color: 'red' }}>{emailError}</div>
          )}
          <input
            value={email}
            onBlur={e => blurHandler(e)}
            name="email"
            autoFocus
            required
            autoComplete="on"
            type="email"
            // onChange={e => setEmail(e.target.value)}
            onChange={e => emailHandler(e)}
            placeholder="Enter your E-mail"
          />
        </label>
        <label>
          Password:
          {/* уведомление пользователя об ошибке */}
          {passwordDirty && passwordError && (
            <div style={{ color: 'red' }}>{passwordError}</div>
          )}
          <input
            value={password}
            onBlur={e => blurHandler(e)}
            name="password"
            required
            type="password"
            // onChange={e => setPassword(e.target.value)}
            onChange={e => passwordHandler(e)}
            placeholder="Enter your Name"
          />
        </label>
        {/* <button type="submit">Login</button>       */}
        <button disabled={!formValid} type="submit">
          SIGN IN
        </button>
        <button disabled={!formValid} type="submit">
          SIGN UP
        </button>
      </form>
    </>
  );
};

export default Login;
