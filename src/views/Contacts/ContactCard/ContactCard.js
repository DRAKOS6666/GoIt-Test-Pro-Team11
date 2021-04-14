import React, { useEffect } from 'react';

import styles from './ContactCard.module.css';

export default function ContactCard({ img, name, stack, descr, onClose }) {
  const onCloseModal = e => {
    if (e.target.nodeName === 'DIV') {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onCloseModal}>
      <div className={styles.contactCard}>
        <img className={styles.image} src={img} alt="" />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.stack}>{stack}</p>
        <p className={styles.description}>{descr}</p>
      </div>
    </div>
  );
}
