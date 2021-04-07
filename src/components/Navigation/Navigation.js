import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
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
