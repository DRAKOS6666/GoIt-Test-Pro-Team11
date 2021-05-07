import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCurrentUser } from '../auth/auth-operation';
import { testApi } from 'redux/qaTest';


export const getTechQuestion = createAsyncThunk(
  'testTech/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const qaTest = await testApi.getTechQuestion();
      return qaTest;
    } catch (error) {
      return rejectWithValue({ error, thunk: getTechQuestion });
    }
  },
);

export const getTestTheoryQuestion = createAsyncThunk(
  'testTheory/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const qaTest = await testApi.getTheoryQuestion();
      return qaTest;
    } catch (error) {
      return rejectWithValue({ error, thunk: getTestTheoryQuestion });
    }
  },
);

export const sendTestTechResults = createAsyncThunk(
  'testTech/sendResults',
  async (results, { rejectWithValue }) => {
    try {
      const testResults = await testApi.getTechResult(results);
      return testResults;
    } catch (error) {
      return rejectWithValue(
        { error, thunk: sendTestTechResults, args: results },
      );
    }
  },
);

export const sendTestTheoryResults = createAsyncThunk(
  'testTheory/sendResults',
  async (results, { rejectWithValue }) => {
    try {
      const testResults = await testApi.getTheoryResults(results);
      return testResults;
    } catch (error) {
      return rejectWithValue(
        { error, thunk: sendTestTheoryResults, args: results },
      );
    }
  },
);
