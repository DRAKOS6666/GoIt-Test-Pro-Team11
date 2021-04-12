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
  // const dispatch = useDispatch();
  // const test = useSelector(getTestData);

  console.log('test:', test);
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

  console.log('idx:', idx);
  return (
    <div>
      <h2>{title}</h2>
      <p>{`question ${idx + 1}/${test.length}`}</p>
      <TestForm question={test[idx]} />
      <button onClick={decreaseIdx}>PrevQ</button>
      <button onClick={increaseIdx}>NextQ</button>
    </div>
  );
}
