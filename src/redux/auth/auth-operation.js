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
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const newUser = await authApi.registerUser(userData);
      return newUser;
    } catch (error) {
      return rejectWithValue({ error, thunk: getCurrentUser, args: userData });
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authApi.loginUser(userData);
      token.set(response.accesToken);
      return response;
    } catch (error) {
      return rejectWithValue({ error, thunk: getCurrentUser, args: userData });
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logoutUser();
      token.unSet();
    } catch (error) {
      return rejectWithValue(
        { error, thunk: getCurrentUser },
      );
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authApi.getCurrentUser(userData.email);
      return response;
    } catch (error) {
      return rejectWithValue({ error, thunk: getCurrentUser, args: userData });
    }
  },
  {
    condition: (data, { getState }) => {
      if (data.accessToken) {
        token.set(data.accessToken);
        return true;
      }

      const {
        auth: { accessToken: persistedToken },
      } = getState();
      if (!persistedToken) {
        return false;
      }
      token.set(persistedToken);
    },
  },
);
