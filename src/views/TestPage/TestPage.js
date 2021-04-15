import test from '../../components/Test/TestForm/question.json';

import React, { useState } from 'react';
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
        console.log(newAnswersArr);
        setAnswers([...newAnswersArr]);
        console.log(answers);
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
  console.log(answers);
  return (
    <div>
      <h2>{title}</h2>

      <p>{`question ${idx + 1}/${test.length}`}</p>
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
