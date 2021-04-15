import React from 'react';
import s from './Footer.module.css';
import heart from '../../images/icons/heart.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={s.footer_wrap}>
        <p className={s.footer_descr}>
          {' '}
          <span className={s.footer_descr_span}>©</span>
        </p>
        <p className={s.footer_descr}>2021</p>
        <p className={s.footer_descr}>
          {' '}
          <span className={s.footer_descr_span}>|</span>
        </p>
        <p className={s.footer_descr}>All Rights Reserved</p>
        <p className={s.footer_descr}>
          {' '}
          <span className={s.footer_descr_span}>|</span>
        </p>
        <p className={s.footer_descr}>Developed with</p>
        <img className={s.footer_icon} src={heart} alt="" />
        <div className={s.footer_descr}>
          by{' '}
          <Link className={s.footer_descr_link} to="/contacts">
            GoIT Students
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
