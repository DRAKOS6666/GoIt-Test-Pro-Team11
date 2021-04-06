import React from 'react';

import s from './Footer.module.css';

const Footer = () => {

    return (
        <footer className={s.footer}>
            <div className={s.footer_wrap}>
                <p className={s.footer_descr}> <span className={s.footer_descr_icon}>©</span>  2021</p>
                <p className={s.footer_descr}> <span>|</span> All Rights Reserved</p>
                <p className={s.footer_descr}> <span>|</span> Developed with</p>

            </div>
            <p className={s.footer_des}> <a href="#" className={s.footer_descr_link}>by GoIT Students</a></p>

        </footer>
    );
};
export default Footer;