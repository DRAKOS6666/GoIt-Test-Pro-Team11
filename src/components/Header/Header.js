import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';

import { ReactComponent as Menu } from '../../images/icons/menu.svg';
import { ReactComponent as Close } from '../../images/icons/close.svg';
import { ReactComponent as Out } from '../../images/icons/sign-out.svg';

import styles from './Header.module.css';
import { Avatar } from '@material-ui/core';

function Header() {
  const [menuShow, setMenuShow] = useState(true);
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.getIsAuthUser);

  const toggleMemu = () => {
    setMenuShow(state => (state = !state));
  };

  const onClickLogout = () => {
    dispatch(authOperations.logoutUser());
    setMenuShow(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to="/" className={styles.link} onClick={() => setMenuShow(true)}>
          <div className={styles.pro}>
            <b className={styles.textPro}>Pro</b>
          </div>
          <div className={styles.triangle}></div>
          <div className={styles.test}>
            <b className={styles.textTest}>[Test_]</b>
          </div>
        </Link>
      </div>

      {(!menuShow || window.innerWidth > 767) && (
        <Navigation closMenu={() => setMenuShow(true)} />
      )}

      {isAuth && menuShow && <UserMenu />}

      {window.innerWidth < 768 && (
        <div className={styles.menuThumb}>
          <button type="button" onClick={toggleMemu} className={styles.btnMenu}>
            {menuShow ? (
              <Menu className={styles.icon} />
            ) : (
              <Close className={styles.icon} />
            )}
          </button>
        </div>
      )}

      {((isAuth && !menuShow) || (isAuth && window.innerWidth > 767)) && (
        <div className={styles.outThumb}>
          <Link to="/" className={styles.lnkOut}>
            <button
              type="button"
              onClick={onClickLogout}
              className={styles.btnOut}
            >
              <Out />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default memo(Header);
