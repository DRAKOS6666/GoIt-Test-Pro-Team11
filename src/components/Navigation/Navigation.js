import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

function Navigation({ closMenu }) {
  const isAuth = useSelector(authSelectors.getIsAuthUser);

  return (
    <nav className={styles.wrapper}>
      {isAuth && (
        <div className={styles.thumb}>
          <NavLink
            to="/"
            exact
            className={styles.navLink}
            activeClassName={styles.active}
            onClick={() => closMenu()}
          >
            Home
          </NavLink>
        </div>
      )}

      {isAuth && (
        <div className={styles.thumb}>
          <NavLink
            to="/useful-info"
            exact
            className={styles.navLink}
            activeClassName={styles.active}
            onClick={() => closMenu()}
          >
            Materials
          </NavLink>
        </div>
      )}

      <div className={styles.thumb}>
        <NavLink
          to="/contacts"
          className={styles.navLink}
          activeClassName={styles.active}
          onClick={() => closMenu()}
        >
          Contacts
        </NavLink>
      </div>
    </nav>
  );
}

export default memo(Navigation);
