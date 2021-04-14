import React, { useState } from 'react';

import AnswerOption from './AnswerOption/AnswerOption';
// import styles from './TestForm.module.css';

// import { useDispatch, useSelector } from 'react-redux';
// import { testOperations, testSelectors } from 'redux/qaTest';

export default function TestForm({
  question,
  decreaseIdx,
  increaseIdx,
  addAnswer,
}) {
  const [selection, setSelection] = useState({});
  const answers = [...question.answers];

  const onSelection = e => {
    const { value } = e.target;
    const selectedAnswer = { questionId: question.questionId, answer: value };
    addAnswer(selectedAnswer);
    setSelection({ questionId: question.questionId, answer: value });
  };

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
      <button onClick={decreaseIdx}>PrevQ</button>
      <button onClick={increaseIdx}>NextQ</button>
    </div>
  );
}
