import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import * as actions from './qaTest-actions';

import { testOperations } from 'redux/qaTest';

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
  [testOperations.getTechQuestion.rejected]: (_, { payload }) => payload,
  [testOperations.getTestTheoryQuestion.rejected]: (_, { payload }) => payload,
  [testOperations.sendTestTechResults.rejected]: (_, { payload }) => payload,
  [testOperations.sendTestTheoryResults.rejected]: (_, { payload }) => payload,

  [testOperations.getTechQuestion.pending]: () => null,
  [testOperations.getTestTheoryQuestion.pending]: () => null,
  [testOperations.sendTestTechResults.pending]: () => null,
  [testOperations.sendTestTheoryResults.pending]: () => null,
});

const tests = createReducer([], {
  [testOperations.getTechQuestion.fulfilled]: (_, { payload }) => payload,
  [testOperations.getTestTheoryQuestion.fulfilled]: (_, { payload }) => payload,

});

const results = createReducer([], {
  [testOperations.sendTestTechResults.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [testOperations.sendTestTheoryResults.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export default combineReducers({
  tests,
  results,
  isLoading,
  error,
});
