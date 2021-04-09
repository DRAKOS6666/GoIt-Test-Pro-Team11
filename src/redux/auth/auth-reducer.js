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
    [authOperations.registerUser.fulfilled]: (_, { payload }) => payload,
    [authOperations.loginUser.fulfilled]: (_, { payload }) => payload.userData,
    [authOperations.logoutUser.fulfilled]: () => null,
  },
);

const accessToken = createReducer(null, {
  [authOperations.registerUser.fulfilled]: (_, { payload }) => payload.accessToken,
  [authOperations.loginUser.fulfilled]: (_, { payload }) => payload.accessToken,
  [authOperations.logoutUser.fulfilled]: () => null,
});

const refreshToken = createReducer(null, {
  [authOperations.registerUser.fulfilled]: (_, { payload }) => payload.refreshToken,
  [authOperations.loginUser.fulfilled]: (_, { payload }) => payload.refreshToken,
  [authOperations.logoutUser.fulfilled]: () => null,
});

const sessionId = createReducer(null, {
  // [authOperations.registerUser.fulfilled]: (_, { payload }) => payload.sid,
  [authOperations.loginUser.fulfilled]: (_, { payload }) => payload.sid,
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
  accessToken,
  refreshToken,
  sessionId,
  user,
  isLoading,
  error,
  isLoggedIn,
});
