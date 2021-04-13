import React from 'react';
import team from '../team.json';
import styles from './Contacts.module.css';

export default function Contacts() {
  console.log(team);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Our team</h2>
      <ul className={styles.list}>
        {team.map((el, index) => (
          <li key={index} className={styles.listItem}>
            <img src={el.url} className={styles.photo} />
            <div className={styles.content}>
              <p className={styles.name}>{el.name}</p>
              <p className={styles.vocation}>{el.vocation}</p>
              <p className={styles.description}>{el.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
