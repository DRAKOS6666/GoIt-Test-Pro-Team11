import React, { useState } from 'react';

import ContactCard from './ContactCard';
import team from './team.js';

import s from './Contacts.module.css';

const Contacts = () => {
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
    <div className={s.teamContainer}>
      <h2 className={s.teamTitle}>Our Team</h2>

      <ul className={s.teamList}>
        {team.map(({ id, img, name, stack, descr }) => (
          <li
            key={id}
            className={s.teamItem}
            onClick={() => handleClickImg(img, name, stack, descr)}
          >
            <img className={s.teamImg} src={img} alt="" />
            <h3 className={s.name}>{name}</h3>
            <p className={s.stack}>{stack}</p>
            <p className={s.description}>{descr}</p>
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
};
export default Contacts;
