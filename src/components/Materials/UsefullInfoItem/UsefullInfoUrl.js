import React from 'react';

function UsefullInfoUrl({ name, url }) {
    return (
        <>
            <a href={url}>{name}</a>
        </>
    );
}
export default UsefullInfoUrl