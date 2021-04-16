import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { testSelectors } from 'redux/qaTest';
import Diagram from '../Diagram';
import { getTestType } from '../../redux/answerTypes/answerTypes-selectors';
import s from './Results.module.css';
import resultsImg from '../../images/results.png';
export default function Results() {
  const resultInfo = useSelector(testSelectors.getTestResults);
  const testType = useSelector(getTestType);
  const history = useHistory();
  const backToTestPage = () => {
    history.push('/test');
  };
  const mainMessage = resultInfo.data.mainMessage;
  const secondaryMessage = resultInfo.data.secondaryMessage;
  const resultInPercents = resultInfo.data.result;
  const totalQuestions = 12;
  const resultNumber = useMemo(() => {
    return Number(resultInPercents ? resultInPercents.slice(0, -1) : '0');
  }, [resultInPercents]);
  const incorrectNumber = useMemo(() => {
    return 100 - resultNumber;
  }, [resultNumber]);
  const correctAnswers = useMemo(() => {
    return parseInt((totalQuestions * resultNumber) / 100, 10);
  }, [resultNumber]);
  return (
    <div className={s.container}>
      <h2 className={s.title}>Results</h2>
      <h3 className={s.subtitle}>[{testType.title}_]</h3>
      <div className={s.line}></div>
      <div>
        <Diagram
          data={[
            ['Answer', 'Percentage'],
            [`${resultNumber}% Correct`, resultNumber],
            [`${incorrectNumber}% Incorrect`, incorrectNumber],
          ]}
        />
      </div>
      <div className={s.answers}>
        <p>
          Correct answers - <span className={s.number}>{correctAnswers}</span>{' '}
        </p>
        <div className={s.verticalLine}></div>
        <p>
          Total questions - <span className={s.number}>{totalQuestions}</span>{' '}
        </p>
      </div>
      <div className={s.catImg}>
        <img
          src={resultsImg}
          alt="A cat holding a heart-baloon"
          className={s.catImg}
        />
      </div>
      <p className={s.mainMessage}>{mainMessage}</p>
      <p className={s.secondaryMessage}>{secondaryMessage}</p>
      <button className={s.button} type="button" onClick={backToTestPage}>
        Try again
      </button>
    </div>
  );
}
