import React from 'react';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import styles from './Header.module.css'
import Navigation from 'components/Navigation';

export default function Header() {
  const isAuth = useSelector(authSelectors.getIsAuthUser);

  return (
    <div className='header-wrapper'>
      <h3>Logo</h3>
      <Navigation />
      {isAuth && <UserMenu />}
    </div>
  )
}
