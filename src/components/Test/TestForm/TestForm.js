import React, { useState } from 'react';
import AnswerOption from './AnswerOption/AnswerOption';
import styles from './TestForm.module.css';
import { ReactComponent as Arrow } from '../../../images/icons/arrow.svg';

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
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <p className={styles.questionCounter}>
          question <span className={styles.accent}>{`${indexValue + 1}`}</span>/
          {`${numberOfQ + 1}`}
        </p>
        <h3 className={styles.question}>{question.question}</h3>
        <div className={styles.decor}></div>
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
      </div>
      <div className={styles.navigationContainer}>
        <button onClick={prevQ} disabled={turnOffButonPrev}>
          <div className={styles.svgContainer}>
            <Arrow className={styles.arrowLeft} />
          </div>
          <span className={styles.btnTxt}>Previous question</span>
        </button>
        <button onClick={nextQ} disabled={turnOffButonNext}>
          <span className={styles.btnTxt}>Next question</span>
          <div className={styles.svgContainer}>
            <Arrow className={styles.arrowRight} />
          </div>
        </button>
      </div>
    </div>
  );
}
