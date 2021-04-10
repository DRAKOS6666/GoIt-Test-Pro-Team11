import React from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from '../../images/icons/arrow.svg';
import s from './MainPage.module.css';

export default function MainPage() {
    return (<>
        <h2 className={s.titleOne}>“Regression testing. What is it?</h2>
        <h2 className={s.title}>If the system compiles, that's good, if it boots, that's great!”</h2>
        <p className={s.subtitle}>Linus Torvalds</p>
        <p className={s.descriptionsubtitle}>Linux kernel creator, hacker, 1969</p>
        <ul className={s.items}>
            <NavLink className={s.itemLink} to={`/test`}>
                <li className={s.item}>
                    <h2>QA technical training</h2>
                    <Arrow className={s.icon} />
                </li>                    
            </NavLink>
            <NavLink className={s.itemLink} to={`/test`}>
                <li className={s.itemColor}>
                    <h2>Testing theory</h2>
                    <Arrow className={s.icon} />
                </li>
            </NavLink>
        </ul>
    </>);
};