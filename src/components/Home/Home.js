import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import AuthForm from '../../views/AuthForm/AuthForm';

import styles from './Home.module.css';

const Home = () => {
  const isAuth = useSelector(authSelectors.getIsAuthUser);
  return (
    <div className="appTitle">
      <h2>Home Component</h2>
      <AuthForm />
    </div>
  );
};

export default Home;
