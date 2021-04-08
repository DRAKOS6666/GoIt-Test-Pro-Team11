import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UsefullInfoItem from './UsefullInfoItem/UsefullInfoItem'
import s from './Materials.module.css';

function UsefullInfo({ books, resources }) {
    return (
        <div className={s.section}>
            <div className={s.literature}>
                <h2 className={s.title}>Usefull literature</h2>
                <ol className={s.list}>
                    {books.map(({ id, name, url }) => (
                        <li className={s.materials} key={id}><UsefullInfoItem id={id} name={name} url={url} /></li>
                    ))}
                </ol>
            </div>
            <div className={s.resources}>
                <h2 className={s.title}>Usefull resources</h2>
                <ol className={s.list}>
                    {resources.map(({ id, name, url }) => (
                        <li className={s.materials} key={id}><UsefullInfoItem id={id} name={name} url={url} /></li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
export default UsefullInfo