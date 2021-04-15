import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { testOperations, testSelectors } from 'redux/qaTest';
import Diagram from '../Diagram';
import s from './Results.module.css';
import resultsImg from '../../images/results.png';

export default function Results() {
  const resultInfo = useSelector(testSelectors.getTestResults);
  const history = useHistory();
  const location = useLocation();
  console.log('history', history);
  console.log('location', location);

  const backToTestPage = () => {
    history.push('/test');
  };
  const mainMessage = resultInfo.mainMessage;
  const secondaryMessage = resultInfo.secondaryMessage;
  const resultInPercents = resultInfo.result;

  /*  const testName =  */

  /*    const dispatch = useDispatch(); */
  const resultNumber = Number(
    resultInPercents ? resultInPercents.slice(0, -1) : 0,
  );
  const incorrectNumber = 100 - resultNumber;

  const totalQuestions = 12;
  const correctAnswers = parseInt((totalQuestions * resultNumber) / 100, 10);
