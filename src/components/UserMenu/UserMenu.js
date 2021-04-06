import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector(authSelectors.getUser);
  const dispatch = useDispatch();

  // const onClickLogout = () => {
  //   dispatch(authOperations.logoutUser());
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.letter}>W</div>
      <span className={styles.email}>email@com.</span>
      {/* <button onClick={onClickLogout}>Out</button> */}
    </div>
  );
};
export default UserMenu;
