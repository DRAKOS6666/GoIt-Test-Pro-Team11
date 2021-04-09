import React from 'react';
import s from './Footer.module.css';
import heart from '../../images/icons/heart.svg'

const Footer = () => {

    return (
        <footer className={s.wrapper} >
            <div className={s.footer_wrap}>
                <p className={s.footer_descr}> <span className={s.footer_descr_icon}>©</span> 2021</p>
                <p className={s.footer_descr}> <span className={s.footer_descr_span}>|</span> All Rights Reserved</p>
                <p className={s.footer_descr}> <span className={s.footer_descr_span}>|</span> Developed with</p>
                <img className={s.footer_icon} src={heart} alt="" />
                <p className={s.footer_descr_link}>by GoIT Students</p>
            </div>


        </footer>
    );
};
export default Footer;