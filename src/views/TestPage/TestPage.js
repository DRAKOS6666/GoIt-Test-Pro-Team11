import test from '../../components/Test/TestForm/question.json';

import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getTestData } from '../../redux/qaTest/test-selectors';
// import {
//   getTechQuestion,
//   getTestTheoryQuestion,
// } from '../../redux/qaTest/test-operations';
import TestForm from '../../components/Test/TestForm/';

export default function TestPage() {
  const title = 'qa technical training';

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  // const dispatch = useDispatch();
  // const test = useSelector(getTestData);

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
  const sendAnswers = () => {};

  const addAnswer = newAnswer => {
    setAnswers(answers => [...answers, newAnswer]);
    console.log(newAnswer);
    console.log('answers:', answers);
    // console.log(answers);
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
      <h2>{title}</h2>

      <p>{`question ${idx + 1}/${test.length}`}</p>
      <TestForm
        question={test[idx]}
        increaseIdx={increaseIdx}
        decreaseIdx={decreaseIdx}
        addAnswer={addAnswer}
      />
    </div>
  );
}
