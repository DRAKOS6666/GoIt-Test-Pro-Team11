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
  const [activeNextQ, setActiveNextQ] = useState(false);
  const [activePrevQ, setActivePrevQ] = useState(true);
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

  const activeButton = indexValue => {
    if (test.length - 1 > indexValue > 0) {
      setActivePrevQ(activePrevQ => false);
      setActiveNextQ(activeNextQ => false);
    } else if (indexValue === 0) {
      setActivePrevQ(activePrevQ => true);
      setActiveNextQ(activeNextQ => false);
    } else if (indexValue === test.length - 1) {
      setActivePrevQ(activePrevQ => false);
      setActiveNextQ(activeNextQ => true);
    }
  };

  const changeAnswer = (arrAnswers, newAnswer) => {
    const rule = Boolean(arrAnswers.length);
    if (rule) {
      const updatedArrAnswers = arrAnswers.map(answer =>
        answer.questionId === newAnswer.questionId &&
        answer.answer !== newAnswer.answer
          ? { ...answer, answer: newAnswer.answer }
          : answer,
      );
      return updatedArrAnswers;
    }

    return arrAnswers;
  };

  const addAnswer = newAnswer => {
    console.log('newAnswer:', newAnswer);
    if (newAnswer.questionId) {
      const newAnswersArr = changeAnswer(answers, newAnswer);
      setAnswers(answers => [...newAnswersArr, newAnswer]);
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
