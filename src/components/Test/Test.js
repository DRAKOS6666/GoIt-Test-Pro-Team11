import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TitleTest from './TittleTest/TittleTest';
import TestForm from './TestForm/TestForm';

import styles from './Test.module.css';
import { testOperations } from 'redux/qaTest';


const Test = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testOperations.getTechQuestion())
  }, [dispatch])

  return (
    <>
      <TitleTest />
      <TestForm />
    </>
  );
};

export default Test;
