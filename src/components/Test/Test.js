import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TitleTest from './TittleTest/TittleTest';
import TestForm from './TestForm/TestForm';

import styles from './Test.module.css';

const Test = () => {
  const dispatch = useDispatch();

  return (
    <>
      <TitleTest />
      <TestForm />
    </>
  );
};

export default Test;
