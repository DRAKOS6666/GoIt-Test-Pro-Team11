import { authApi } from 'redux/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const newUser = await authApi.registerUser(userData);
      token.set(userData.token);
      return newUser;
    } catch ({ response }) {
      console.log('response', response);
      return rejectWithValue(`${response.data.message}`);
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authApi.loginUser(userData);
      token.set(response.token);
      return response;
    } catch ({ response }) {
      return rejectWithValue(`Email or Password is invalid`);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logoutUser();
      token.unSet();
    } catch (err) {
      return rejectWithValue(
        `${err.response.statusText} ${err.response.status}`,
      );
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'user/info',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authApi.getCurrentUser();
      return response;
    } catch (err) {
      return rejectWithValue(
        `${err.response.statusText} ${err.response.status}`,
      );
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token: persistedToken },
      } = getState();
      if (!persistedToken) {
        return false;
      }
      token.set(persistedToken);
    },
  },
);
