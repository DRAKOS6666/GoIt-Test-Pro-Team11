import React, { useState } from 'react';

import TestForm from '../../components/Test';

export default function TestPage({ title, test }) {
  const [idx, setIdx] = useState(0);

  const increaseIdx = idx => {
    if (idx === test.length) {
      return;
    }

    setIdx(idx + 1);
    setIdx(idx - 1);
  };
  const decreaseIdx = idx => {
    if (idx === 0) {
      return;
    }
    setIdx(idx - 1);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>
        `question ${idx}/${test.length}`
      </p>
      <TestForm question={test[idx]} />
      <button onClick={decreaseIdx}>PrevQ</button>
      <button onClick={increaseIdx}>NextQ</button>
    </div>
  );
}
