import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { ReactComponent as Menu } from '../../images/icons/menu.svg';
import { ReactComponent as Close } from '../../images/icons/close.svg';
import { ReactComponent as Out } from '../../images/icons/sign-out.svg';

import styles from './Header.module.css';

export default function Header() {
  const [menuShow, setMenuShow] = useState(true);
  const isAuth = useSelector(authSelectors.getIsAuthUser);

  const toggleMemu = () => {
    setMenuShow(state => (state = !state));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to="/" className={styles.link}>
          <div className={styles.pro}>
            <b className={styles.textPro}>Pro</b>
          </div>
          <div className={styles.triangle}></div>
          <div className={styles.test}>
            <b className={styles.textTest}>[Test_]</b>
          </div>
        </Link>
      </div>

      {(!menuShow || window.innerWidth > 767) && <Navigation />}

      {/*  вместо true => isAuth  */ true && menuShow && <UserMenu />}

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

      {
        /*  вместо true => isAuth  */ ((true && !menuShow) ||
          (true && window.innerWidth > 767)) && (
          <div className={styles.outThumb}>
            <button type="button" className={styles.btnOut}>
              <Out />
            </button>
          </div>
        )
      }
    </div>
  );
}
