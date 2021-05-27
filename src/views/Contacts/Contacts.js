import React, { useState } from 'react';
import team from '../team.json';
import styles from './Contacts.module.css';
import ContactCard from './ContactCard';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Contacts() {
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState(null);
  const [name, setName] = useState(null);
  const [stack, setStack] = useState(null);
  const [descr, setDescr] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClickImg = (img, name, stack, descr) => {
    setImg(img);
    setName(name);
    setStack(stack);
    setDescr(descr);
    setShowModal(true);
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Our team</h2>
      <ul className={styles.list}>
        {team.map((el, index) => (
          <li
            key={index}
            className={styles.listItem}
            onClick={() => {
              const { url, name, stack, description } = el;
              handleClickImg(url, name, stack, description);
            }}
          >
            <img src={el.url} alt={el.name} className={styles.photo} />
            <div className={styles.content}>
              <p className={styles.name}>{el.name}</p>
              <p className={styles.stack}>{el.stack}</p>
              <p className={styles.description}>{el.description}</p>
              <div className={styles.overflow}>
                <a
                  href={el.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <FaGithub className={styles.icon} />
                </a>
                <a
                  href={el.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <FaLinkedinIn className={styles.icon} />
                </a>
              </div>
            </div>
          </li>
        ))}
        {showModal && window.innerWidth > 767 && (
          <ContactCard
            onClose={closeModal}
            img={img}
            name={name}
            stack={stack}
            descr={descr}
          />
        )}
      </ul>
    </div>
  );
}
