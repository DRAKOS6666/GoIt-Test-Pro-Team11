import React from 'react';
import AnswerOptStl from './AnswerOption.module.css';

export default function TestAnswerOption({
  answer,
  onSelection,
  selectedOption,
}) {
  return (
    <li className={AnswerOptStl.listItem}>
      <label className={AnswerOptStl.label}>
        <input
          className={AnswerOptStl.input}
          type="radio"
          name="answer"
          value={answer}
          onChange={onSelection}
          checked={selectedOption === answer}
        />
        <span className={AnswerOptStl.text}>{answer}</span>
      </label>
    </li>
  );
}
