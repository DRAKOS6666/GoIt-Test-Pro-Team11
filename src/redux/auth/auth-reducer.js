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
    [authOperations.registerUser.fulfilled]: (state, { payload }) => payload,
    [authOperations.loginUser.fulfilled]: (state, { payload }) =>
      payload.userData,
    [authOperations.logoutUser.fulfilled]: () => null,
  },
);

const accessToken = createReducer(null, {
  [authOperations.loginUser.fulfilled]: (_, { payload }) => payload.accessToken,
  [authOperations.logoutUser.fulfilled]: () => null,
});

const refreshToken = createReducer(null, {
  [authOperations.loginUser.fulfilled]: (_, { payload }) =>
    payload.refreshToken,
  [authOperations.logoutUser.fulfilled]: () => null,
});

const sid = createReducer(null, {
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
  user,
  isLoading,
  error,
  accessToken,
  isLoggedIn,
  refreshToken,
  sid,
});

// import { createSlice } from '@reduxjs/toolkit';
// import { authOperations } from 'redux/auth';

// const initialState = {
//   user: { email: null },
//   accessToken: null,
//   refreshtoken: null,
//   sid: null,
//   isLoggedIn: false,
//   isFetchingCurrentUser: false,
//   error: null,
// };

// const aithSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [authOperations.registerUser.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//       state.error = null;
//     },
//     [authOperations.registerUser.pending](state) {
//       state.error = null;
//     },
//     [authOperations.registerUser.rejected](state, { payload }) {
//       state.error = payload;
//     },

//     [authOperations.loginUser.fulfilled](state, { payload }) {
//       state.user = payload.userData;
//       state.token = payload.accessToken;
//       state.token = payload.refreshToken;
//       state.isLoggedIn = true;
//     },
//     [authOperations.loginUser.pending](state) {
//       state.error = null;
//     },
//     [authOperations.loginUser.rejected](state, { payload }) {
//       state.error = payload;
//     },

//     [authOperations.getCurrentUser.pending](state) {
//       state.isFetchingCurrentUser = true;

//       state.error = null;
//     },
//     [authOperations.getCurrentUser.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.isLoggedIn = true;
//       state.isFetchingCurrentUser = false;
//     },
//     [authOperations.getCurrentUser.rejected](state, { payload }) {
//       state.isFetchingCurrentUser = false;
//       state.error = payload;
//     },
//   },
// });

// export default aithSlice.reducer;
