import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AnswerOption from './AnswerOption/AnswerOption';
import styles from './TestForm.module.css';
import { ReactComponent as Arrow } from '../../../images/icons/arrow.svg';
import { getAnswers } from '../../../redux/answerTypes/answerTypes-selectors';
export default function TestForm({
  question,
  decreaseIdx,
  increaseIdx,
  addAnswer,
  indexValue,
  numberOfQ,
  sendAnswers,
  isFinished,
}) {
  const answers = [...question.answers];
  const [selection, setSelection] = useState({});
  const answersInStat = useSelector(getAnswers);
  const questionId = question.questionId;
  const findAnswer = (id, arr) => {
    const item = arr.find(arrItem => arrItem.questionId === id);
    return item;
  };

  useEffect(() => {
    const isAnswerExist = answersInStat.some(
      answerInStat => questionId === answerInStat.questionId,
    );
    if (answersInStat.length !== 0 && isAnswerExist) {
      const answerInStat = findAnswer(questionId, answersInStat);
      const selectedAnswer = {
        questionId: answerInStat.questionId,
        answer: answerInStat.answer,
      };
      setSelection(selectedAnswer);
    }
    return;
  }, [questionId, answersInStat]);

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
  // const turnOffButonNext =
  //   indexValue >= 0 && indexValue < numberOfQ ? false : true;
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
          <span className={styles.btnTxt}>Previous</span>
        </button>
        <button
          onClick={() => (isFinished ? sendAnswers() : nextQ())}
          // disabled={turnOffButonNext}
        >
          <span className={styles.btnTxt}>
            {isFinished ? 'Submit' : 'Next'}
          </span>
          {!isFinished && (
            <div className={styles.svgContainer}>
              <Arrow className={styles.arrowRight} />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
