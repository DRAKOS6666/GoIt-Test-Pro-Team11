import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './answerTypes-actions';

const answers = createReducer([], {
  [actions.addAnswer]: (state, action) => [...state, action.payload],
});
const testType = createReducer('', {
  [actions.addAnswer]: (_, action) => action.payload,
});

export default combineReducers({
  answers,
  testType,
});
