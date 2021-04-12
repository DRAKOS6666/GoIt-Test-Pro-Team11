import React from 'react';
import s from '../Materials.module.css';

function UsefullInfoItem({ name, ref }) {
    return (
        <>
            <a className={s.link} href={ref}>{name}</a>
        </>
    );
}
export default UsefullInfoItem