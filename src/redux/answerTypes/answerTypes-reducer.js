import { createReducer } from '@reduxjs/toolkit';
import * as actions from './answerTypes-actions';

export const answers = createReducer([], {
  [actions.addAnswerToState]: (state, action) => [...state, action.payload],
  [actions.changeAnswerInState]: (_, action) => [...action.payload],
  [actions.deleteAnswerInState]: () => [],
});
export const testType = createReducer(
  {},
  {
    [actions.addTestTypr]: (_, action) => {
      return {
        type: action.payload.type,
        title: action.payload.title,
      };
    },

    [actions.deleteTestTypr]: () => [],
  },
);
