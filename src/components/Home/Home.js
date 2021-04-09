import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

import Login from '../Login/Login';

import styles from './Home.module.css';

const Home = () => {
  const isAuth = useSelector(authSelectors.getIsAuthUser);
  return (
    <div className="appTitle">
      <h2>Home Component</h2>
      <Login />
    </div>
  );
};

export default Home;
