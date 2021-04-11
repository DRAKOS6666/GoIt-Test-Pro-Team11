import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

const Navigation = () => {
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
        >
          Contacts
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
