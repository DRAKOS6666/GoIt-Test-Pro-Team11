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

  // const resultNumber = Number(
  //   resultInPercents ? resultInPercents.slice(0, -1) : 0,
  // );
  // const incorrectNumber = 100 - resultNumber;

  // const totalQuestions = 12;
  // const correctAnswers = parseInt((totalQuestions * resultNumber) / 100, 10);

  const totalQuestions = 12;
  const resultNumber = useMemo(() => {
    return Number(resultInPercents ? resultInPercents.slice(0, -1) : 0);
  }, []);
  const incorrectNumber = useMemo(() => {
    return 100 - resultNumber;
  }, []);
  const correctAnswers = useMemo(() => {
    return parseInt((totalQuestions * resultNumber) / 100, 10);
  }, []);
  /*    const dispatch = useDispatch(); */
  return (
    // return (
    // <div className={s.container}>
    //   <h2>Results</h2>
    <div className={s.container}>
      <h2 className={s.title}>Results</h2>
      <h3 className={s.subtitle}>[TESTING THEORY_]</h3>
      {/* <h3 className={s.subtitle}>[{testName}_]</h3> */}

      <div className={s.line}></div>
      <div>
        <Diagram
          data={[
            ['Answer', 'Percentage'],
            ['Correct', resultNumber],
            ['Incorrect', incorrectNumber],
          ]}
        />
      </div>

      <p>Correct answers - {correctAnswers} </p>
      <p>Total questions - {totalQuestions} </p>
      <div className={s.back}>
        <img
          src={resultsImg}
          alt="A picture with a cat holding a heart-baloon"
        />
      </div>
      <p>{mainMessage}</p>
      <p>{secondaryMessage}</p>

      <button className={s.button} type="button" onClick={backToTestPage}>
        {' '}
        Try again
      </button>

      {/*   {{testName} === 'Testing Theory' ? <button
        className={s.button}
        type="button"
        onClick={() =>  dispatch(testOperations.getTestTheoryQuestion())}> Try again 
      </button> : <button
        className={s.button}
        type="button"
        onClick={() =>  dispatch(testOperations.getTechQuestion())}> Try again 
      </button>}  */}
    </div>
  );
}
