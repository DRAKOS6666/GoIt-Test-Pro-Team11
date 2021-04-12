import React from 'react';
import s from '../Materials.module.css';

function UsefullInfoUrl({ name, url }) {
    return (
        <>
            <a className={s.link} href={url} target="_blank">{name}</a>
        </>
    );
}
export default UsefullInfoUrl