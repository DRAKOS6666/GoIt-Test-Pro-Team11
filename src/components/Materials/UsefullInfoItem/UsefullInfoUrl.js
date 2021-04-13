import React from 'react';
import s from '../Materials.module.css';

function UsefullInfoUrl({ name, url }) {
    return (
        <>
            <a className={s.link} href={url}>{name}</a>
        </>
    );
}
export default UsefullInfoUrl