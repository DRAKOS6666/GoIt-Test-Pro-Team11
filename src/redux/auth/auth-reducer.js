import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { authOperations } from 'redux/auth';

const isLoading = createReducer(false, {
  [authOperations.getCurrentUser.pending]: () => true,
  [authOperations.getCurrentUser.fulfilled]: () => false,
  [authOperations.getCurrentUser.rejected]: () => false,

  [authOperations.registerUser.pending]: () => true,
  [authOperations.registerUser.fulfilled]: () => false,
  [authOperations.registerUser.rejected]: () => false,

  [authOperations.loginUser.pending]: () => true,
  [authOperations.loginUser.fulfilled]: () => false,
  [authOperations.loginUser.rejected]: () => false,

  [authOperations.logoutUser.pending]: () => true,
  [authOperations.logoutUser.fulfilled]: () => false,
  [authOperations.logoutUser.rejected]: () => false,
});

const error = createReducer(null, {
  [authOperations.getCurrentUser.rejected]: (_, { payload }) => payload,
  [authOperations.registerUser.rejected]: (_, { payload }) => payload,
  [authOperations.loginUser.rejected]: (_, { payload }) => payload,
  [authOperations.logoutUser.rejected]: (_, { payload }) => payload,

  [authOperations.getCurrentUser.pending]: () => null,
  [authOperations.registerUser.pending]: () => null,
  [authOperations.loginUser.pending]: () => null,
  [authOperations.logoutUser.pending]: () => null,
});

const user = createReducer(
  {},
  {
    [authOperations.getCurrentUser.fulfilled]: (_, { payload }) => payload,
    [authOperations.registerUser.fulfilled]: (state, { payload }) => payload.user,
    [authOperations.loginUser.fulfilled]: (state, { payload }) => payload.user,
    [authOperations.logoutUser.fulfilled]: () => null,
  },
);

const token = createReducer(null, {
  [authOperations.registerUser.fulfilled]: (_, { payload }) => payload.token,
  [authOperations.loginUser.fulfilled]: (_, { payload }) => payload.token,
  [authOperations.logoutUser.fulfilled]: () => null,
});

const isLoggedIn = createReducer(false, {
  [authOperations.registerUser.fulfilled]: () => true,
  [authOperations.loginUser.fulfilled]: () => true,
  [authOperations.getCurrentUser.fulfilled]: () => true,
  [authOperations.logoutUser.fulfilled]: () => false,

  [authOperations.logoutUser.rejected]: () => false,
  [authOperations.getCurrentUser.rejected]: () => false,
  [authOperations.registerUser.rejected]: () => false,
  [authOperations.loginUser.rejected]: () => false,
});

export default combineReducers({
  user,
  isLoading,
  error,
  token,
  isLoggedIn,
});
