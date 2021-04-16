import { createAction } from '@reduxjs/toolkit';

export const addAnswerToState = createAction('answers/addAnswerToState');
export const changeAnswerInState = createAction('answers/changeAnswerInState');
export const deleteAnswerInState = createAction('answer/deleteAnswerInState');

export const addTestTypr = createAction('answers/addTestTypr');
export const deleteTestTypr = createAction('answers/deleteTestTypr');
