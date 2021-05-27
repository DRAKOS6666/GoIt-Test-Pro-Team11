import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// import * as actions from './qaTest-actions';
import {
  deleteTestResults,
  deleteQTest,
} from '../answerTypes/answerTypes-actions';
import { answers, testType } from '../answerTypes/answerTypes-reducer';
import { testOperations } from 'redux/qaTest';
import { authOperations } from 'redux/auth/';

const isLoading = createReducer(false, {
  [testOperations.getTechQuestion.pending]: () => true,
  [testOperations.getTechQuestion.fulfilled]: () => false,
  [testOperations.getTechQuestion.rejected]: () => false,

  [testOperations.getTestTheoryQuestion.pending]: () => true,
  [testOperations.getTestTheoryQuestion.fulfilled]: () => false,
  [testOperations.getTestTheoryQuestion.rejected]: () => false,

  [testOperations.sendTestTechResults.pending]: () => true,
  [testOperations.sendTestTechResults.fulfilled]: () => false,
  [testOperations.sendTestTechResults.rejected]: () => false,

  [testOperations.sendTestTheoryResults.pending]: () => true,
  [testOperations.sendTestTheoryResults.fulfilled]: () => false,
  [testOperations.sendTestTheoryResults.rejected]: () => false,
});

const error = createReducer(null, {
  [testOperations.getTechQuestion.rejected]: (_, { payload }) =>
    payload.error.response.data.message,
  [testOperations.getTestTheoryQuestion.rejected]: (_, { payload }) =>
    payload.error.response.data.message,
  [testOperations.sendTestTechResults.rejected]: (_, { payload }) =>
    payload.error.response.data.message,
  [testOperations.sendTestTheoryResults.rejected]: (_, { payload }) =>
    payload.error.response.data.message,

  [testOperations.getTechQuestion.pending]: () => null,
  [testOperations.getTestTheoryQuestion.pending]: () => null,
  [testOperations.sendTestTechResults.pending]: () => null,
  [testOperations.sendTestTheoryResults.pending]: () => null,
});

const tests = createReducer([], {
  [testOperations.getTechQuestion.fulfilled]: (_, { payload }) => payload,
  [testOperations.getTestTheoryQuestion.fulfilled]: (_, { payload }) => payload,

  [authOperations.logoutUser.fulfilled]: () => [],
  [deleteQTest]: () => [],
});

const results = createReducer([], {
  [testOperations.sendTestTechResults.fulfilled]: (_, { payload }) => payload,
  [testOperations.sendTestTheoryResults.fulfilled]: (_, { payload }) => payload,
  [authOperations.logoutUser.fulfilled]: () => [],
  [deleteTestResults]: () => [],
});

export default combineReducers({
  tests,
  results,
  answers,
  testType,
  isLoading,
  error,
});
