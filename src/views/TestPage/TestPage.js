import test from '../../components/Test/TestForm/question.json';

import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getTestData } from '../../redux/qaTest/test-selectors';
// import {
//   getTechQuestion,
//   getTestTheoryQuestion,
// } from '../../redux/qaTest/test-operations';
import TestForm from '../../components/Test/TestForm/';
import TestStl from './TestPage.module.css';

export default function TestPage() {
  const title = 'Qa technical training';

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  // const dispatch = useDispatch();
  // const test = useSelector(getTestData);
  // console.log(test);

  // useEffect(() => {
  //   switch (title) {
  //     case 'qa technical training':
  //       dispatch(getTechQuestion());
  //       break;
  //     case 'testing theory':
  //       dispatch(getTestTheoryQuestion());
  //       break;
  //     default:
  //       break;
  //   }
  // }, [title, dispatch]);
  // const sendAnswers = () => {};

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
        setAnswers([...newAnswersArr]);
        return;
      }
      setAnswers(answers => [...answers, newAnswer]);
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
    <div>
      <div className={TestStl.hdContainer}>
        <h2 className={TestStl.header}>[{title}]</h2>
        <button onClick={addAnswer} className={TestStl.btn}>
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
  );
}
