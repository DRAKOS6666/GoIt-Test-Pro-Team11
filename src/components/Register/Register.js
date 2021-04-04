import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import { toast } from 'react-toastify';
import styles from './Register.module.css';

import 'react-toastify/dist/ReactToastify.css';
import AddIcon from '@material-ui/icons/Add';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(authSelectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.signupUser({ name, email, password }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
        <input
            autoFocus
            required
            type="text"
            onChange={e => setName(e.target.value)}
            placeholder="Enter your Name"
          />
        </label>
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
        <ButtonMUI text="Register" type="submit" startIcon={<AddIcon />} />
      </form>
    </>
  );
};
export default Register;
