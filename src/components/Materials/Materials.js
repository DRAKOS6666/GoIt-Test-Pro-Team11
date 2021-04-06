import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import UsefullInfoItem from './UsefullInfoItem/UsefullInfoItem'
import s from './Materials.module.css';

function UsefullInfo({ books, resources }) {
    return (
        <div className={s.section}>
            <h2 className={s.title}>Usefull literature</h2>
            <ol className={s.list}>
                {books.map(({ id, name, url }) => (
                    <li className={s.materials} key={id}><UsefullInfoItem id={id} name={name} url={url} /></li>
                ))}
            </ol>
            <h2 className={s.title}>Usefull resources</h2>
            <ol className={s.list}>
                {resources.map(({ id, name, url }) => (
                    <li className={s.materials} key={id}><UsefullInfoItem id={id} name={name} url={url} /></li>
                ))}
            </ol>
        </div>
    );
}
export default UsefullInfo