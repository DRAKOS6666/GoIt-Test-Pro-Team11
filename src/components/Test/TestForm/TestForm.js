import React, { useState, useEffect } from 'react';

import AnswerOption from './AnswerOption/AnswerOption';
// import styles from './TestForm.module.css';

// import { useDispatch, useSelector } from 'react-redux';
// import { testOperations, testSelectors } from 'redux/qaTest';

export default function TestForm({
  question,
  decreaseIdx,
  increaseIdx,
  addAnswer,
  indexValue,
  numberOfQ,
}) {
  const answers = [...question.answers];
  const [selection, setSelection] = useState({});

  const onSelection = e => {
    const { value } = e.target;
    const selectedAnswer = { questionId: question.questionId, answer: value };
    setSelection(selectedAnswer);
  };

  const nextQ = () => {
    increaseIdx();
    addAnswer(selection);
    setSelection({});
  };

  const prevQ = () => {
    decreaseIdx();
    addAnswer(selection);
    setSelection({});
  };
  const turnOffButonNext =
    indexValue >= 0 && indexValue < numberOfQ ? false : true;
  const turnOffButonPrev =
    indexValue <= numberOfQ && indexValue > 0 ? false : true;

  return (
    <div>
      <h3>{question.question}</h3>
      <button onClick={addAnswer}>Finish Test</button>
      <ul>
        {answers.map((answer, index) => (
          <AnswerOption
            answer={answer}
            onSelection={onSelection}
            selectedOption={selection.answer}
            key={index}
          />
        ))}
      </ul>
      <button onClick={prevQ} disabled={turnOffButonPrev}>
        PrevQ
      </button>
      <button onClick={nextQ} disabled={turnOffButonNext}>
        NextQ
      </button>
    </div>
  );
}
