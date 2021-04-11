import React from 'react';
import AnswerOption from './AnswerOption/AnswerOption';
import styles from './TestForm.module.css';

export default function TestForm({ question }) {
  const onCheked = () => {};

  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.answers.map(answer => (
          <AnswerOption answer={answer} />
        ))}
      </ul>
    </div>
  );
}
