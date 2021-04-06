import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


import styles from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector(authSelectors.getUser);
  const isAuth = useSelector(authSelectors.getIsAuthUser);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(authOperations.logoutUser());
  };

  return (
    <div className="userMenuContainer">
      {isAuth && <span>
        Welcome, <span className="userName">{user.email}</span>
      </span>}

      <button onClick={onClickLogout} >
        Logout
      </button>

    </div>
  );
};
export default UserMenu;
