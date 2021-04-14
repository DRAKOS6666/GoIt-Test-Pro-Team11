import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import styles from './UserMenu.module.css';

function UserMenu() {
  const user = useSelector(authSelectors.getUser);

  const userEmail = user.email;

  return (
    user && (
      <div className={styles.wrapper}>
        <div className={styles.letter}>
          {userEmail.slice(0, 1).toUpperCase()}
        </div>
        <span className={styles.email}>
          {userEmail.length > 20 ? 'Welcome' : userEmail}
        </span>
      </div>
    )
  );
}
export default memo(UserMenu);
