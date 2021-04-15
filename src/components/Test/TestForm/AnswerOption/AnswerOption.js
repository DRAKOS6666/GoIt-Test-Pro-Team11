import React from 'react';

export default function TestAnswerOption({
  answer,
  onSelection,
  selectedOption,
}) {
  return (
    <li>
      <label>
        <input
          type="radio"
          name="answer"
          value={answer}
          onChange={onSelection}
          checked={selectedOption === answer}
        />
        {answer}
      </label>
    </li>
  );
}
