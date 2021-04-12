import React, { useState } from 'react';
import AnswerOption from './AnswerOption/AnswerOption';
// import styles from './TestForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { testOperations, testSelectors } from 'redux/qaTest';

export default function TestForm({ question }) {
  console.log(question);
  const answers = [...question.answers];
  console.log(answers);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  console.log(selectedAnswer);
  const onCheked = e => {
    const { value } = e.target;
    setSelectedAnswer({ questionId: question.questionId, answer: value });
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {answers.map(answer => (
          <AnswerOption
            answer={answer}
            onSelection={onCheked}
            selectedOption={selectedAnswer.answer}
          />
        ))}
      </ul>
    </div>
  );
}
