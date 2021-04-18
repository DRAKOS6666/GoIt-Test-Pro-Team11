import { createAction } from '@reduxjs/toolkit';

export const addAnswerToState = createAction('answers/addAnswerToState');
export const changeAnswerInState = createAction('answers/changeAnswerInState');
export const deleteAnswersInState = createAction('answer/deleteAnswersInState');

export const addTestTypr = createAction('answers/addTestTypr');
export const deleteTestTypr = createAction('answers/deleteTestTypr');

export const deleteTestResults = createAction('testResults/deleteTestResults');
export const deleteQTest = createAction('testQuestions/deleteQTest');
