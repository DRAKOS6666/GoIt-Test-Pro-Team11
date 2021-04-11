import React, { useState } from 'react';
import AnswerOption from './AnswerOption/AnswerOption';
// import styles from './TestForm.module.css';

export default function TestForm({ question }) {
  const answers = [...question.answers, "I don't know"];
  const [selectedAnswer, setSelectedAnswer] = useState("I don't know");
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
