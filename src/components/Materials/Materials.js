import React from 'react';
import UsefullInfoItem from './UsefullInfoItem/UsefullInfoItem';
import UsefullInfoUrl from './UsefullInfoItem/UsefullInfoUrl';
import s from './Materials.module.css';
import { books, resources, } from '../Materials/usefullMaterials.json';

function UsefullInfo() {
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
                        <li className={s.materials} key={id}><UsefullInfoUrl id={id} name={name} url={url} /></li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
export default UsefullInfo
