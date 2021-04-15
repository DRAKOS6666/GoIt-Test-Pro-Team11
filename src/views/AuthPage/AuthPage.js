import React from 'react';

import AuthForm from '../AuthForm/AuthForm';

import styles from './AuthPage.module.css';

function AuthPage() {
  return (
    <div className={styles.authPage}>
      <div className={styles.info}>
        <h2 className={styles.title}>Pro Test</h2>
        <p className={styles.text}>
          <b>[</b> We will help you find weak points <br /> in knowledge so that
          you can strengthen it. We will show you what is relevant to know for a
          <b> QA Engineer</b> and will try to make the learning process more
          diverse_ <b>]</b>
        </p>
      </div>
      <AuthForm className={styles.form} />
    </div>
  );
}

export default AuthPage;
