// import test from '../../components/Test/TestForm/question.json';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  getAnswers,
  getTestType,
} from '../../redux/answerTypes/answerTypes-selectors';
import {
  addAnswerToState,
  changeAnswerInState,
} from '../../redux/answerTypes/answerTypes-actions';
import { testOperations, testSelectors } from '../../redux/qaTest';

import Loader from '../../components/Loader';
import TestForm from '../../components/Test/TestForm/';
import TestStl from './TestPage.module.css';

export default function TestPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const testType = useSelector(getTestType);

  useEffect(() => {
    if (testType.type === 'technical') {
      dispatch(testOperations.getTechQuestion());
    }
    if (testType.type === 'theory') {
      dispatch(testOperations.getTechQuestion());
    }
  }, [dispatch, testType.type]);

  const test = useSelector(testSelectors.getTestData);
  const answers = useSelector(getAnswers);
  const isLoading = useSelector(testSelectors.getTestIsLoading);
  const error = useSelector(testSelectors.getTestError);
  const [idx, setIdx] = useState(0);

  const backToMainePage = () => {
    history.push('/');
  };

  const toResultPage = () => {
    history.push('/results');
  };
  // dispatch(testOperations.sendTestTechResults(answers));
  // dispatch(testOperations.sendTestTheoryResults(answers));

  const sendAnswers = answers => {
    if (answers.length === test.length) {
      if (testType.type === 'technical') {
        dispatch(testOperations.sendTestTechResults(answers));
        toResultPage();
        return;
      }
      if (testType.type === 'theory') {
        dispatch(testOperations.sendTestTheoryResults(answers));
        toResultPage();
        return;
      }
    }
    backToMainePage();
  };

  const changeAnswer = (arrAnswers, newAnswer) => {
    if (arrAnswers.length) {
      const updatedArrAnswers = arrAnswers.map(option => {
        if (
          option.questionId === newAnswer.questionId &&
          option.answer !== newAnswer.answer
        ) {
          return { ...option, answer: newAnswer.answer };
        }
        return option;
      });
      return updatedArrAnswers;
    }
  };

  const addAnswer = newAnswer => {
    if (Object.keys(newAnswer).length !== 0) {
      if (answers.some(answer => answer.questionId === newAnswer.questionId)) {
        const newAnswersArr = changeAnswer(answers, newAnswer);
        dispatch(changeAnswerInState(newAnswersArr));
        return;
      }
      dispatch(addAnswerToState(newAnswer));
    }
  };

  const increaseIdx = () => {
    if (idx === test.length - 1) {
      return;
    }
    setIdx(idx => idx + 1);
  };

  const decreaseIdx = () => {
    if (idx === 0) {
      return;
    }
    setIdx(idx => idx - 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      {test.length > 0 && (
        <div>
          <div className={TestStl.hdContainer}>
            <h2 className={TestStl.header}>[{testType.title}]</h2>
            <button
              onClick={() => sendAnswers(answers)}
              className={TestStl.btn}
            >
              Finish Test
            </button>
          </div>

          <TestForm
            question={test[idx]}
            increaseIdx={increaseIdx}
            decreaseIdx={decreaseIdx}
            addAnswer={addAnswer}
            indexValue={idx}
            numberOfQ={test.length - 1}
          />
        </div>
      )}
    </>
  );
}
