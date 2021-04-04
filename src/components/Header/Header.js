import React from 'react';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import styles from './Header.module.css';
import Navigation from 'components/Navigation';

export default function Header() {
  const isAuth = useSelector(authSelectors.getIsAuthUser);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <div className={styles.pro}>
          <b className={styles.textpro}>Pro</b>
        </div>
        <div className={styles.test}>
          <b className={styles.texttest}>[Test_]</b>
        </div>
      </div>
      {/* {isAuth && <UserMenu />} */}
      <Navigation />
      {/* <UserMenu /> */}
    </div>
  );
}
