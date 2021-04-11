import React from 'react';

import TestForm from '../../components/Test';

export default function TestPage({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <TestForm></TestForm>
    </div>
  );
}
