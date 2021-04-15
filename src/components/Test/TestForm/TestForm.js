import React, { useState } from 'react';

import AnswerOption from './AnswerOption/AnswerOption';
import styles from './TestForm.module.css';

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
    addAnswer(selectedAnswer);
  };

  const nextQ = () => {
    increaseIdx();
    setSelection({});
  };

  const prevQ = () => {
    decreaseIdx();
    setSelection({});
  };
  const turnOffButonNext =
    indexValue >= 0 && indexValue < numberOfQ ? false : true;
  const turnOffButonPrev =
    indexValue <= numberOfQ && indexValue > 0 ? false : true;

  return (
    <div>
      <p>{`question ${indexValue + 1}/${numberOfQ + 1}`}</p>
      <h3>{question.question}</h3>
      <ul className={styles.list}>
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
