import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.thumb}>
        <NavLink
          to="/"
          exact
          className={styles.NavLink}
          activeClassName={styles.active}
        >
          Home
        </NavLink>
      </div>
      <div className={styles.thumb}>
        <NavLink
          to="/useful-info"
          exact
          className={styles.NavLink}
          activeClassName={styles.active}
        >
          Materials
        </NavLink>
      </div>
      <div className={styles.thumb}>
        <NavLink
          to="/contacts"
          className={styles.NavLink}
          activeClassName={styles.active}
        >
          Contacts
        </NavLink>
      </div>
    </div>
  );
};
export default Navigation;
