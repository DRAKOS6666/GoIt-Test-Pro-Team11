import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { ReactComponent as Menu } from '../../images/icons/menu.svg';
import { ReactComponent as Close } from '../../images/icons/close.svg';

import styles from './Header.module.css';
import Navigation from 'components/Navigation';

export default function Header() {
  const [menuShow, setMenuShow] = useState(true);
  const isAuth = useSelector(authSelectors.getIsAuthUser);

  const toggleeMemu = () => {
    setMenuShow(state => (state = !state));
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <Link to="/" className={styles.Link}>
          <div className={styles.pro}>
            <b className={styles.textpro}>Pro</b>
          </div>
          <div className={styles.test}>
            <b className={styles.texttest}>[Test_]</b>
          </div>
        </Link>
      </div>
      <hr></hr>
      <div className={styles.btnThumb}>
        <button type="button" onClick={toggleeMemu} className={styles.btnMenu}>
          {menuShow ? (
            <Menu className={styles.icon} />
          ) : (
            <Close className={styles.icon} />
          )}
        </button>
      </div>

      {/* {isAuth && <UserMenu />} */}
      {/* <Navigation /> */}
      {/* <UserMenu /> */}
    </div>
  );
}
