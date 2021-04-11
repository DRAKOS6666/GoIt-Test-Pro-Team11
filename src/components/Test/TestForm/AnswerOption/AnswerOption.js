import React from 'react';

export default function TestAnswerOption({ answer, onChecked }) {
  return (
    <li>
      <label>
        <input
          type="radio"
          name="answer"
          value={answer}
          onChange={onchange}
          cheked={onChecked}
        />
        {answer}
      </label>
    </li>
  );
}
