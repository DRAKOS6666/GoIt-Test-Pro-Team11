import { createAsyncThunk } from '@reduxjs/toolkit';

import { testApi } from 'redux/qaTest';

export const getTechQuestion = createAsyncThunk(
  'testTech/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const qaTest = await testApi.getTechQuestion();
      return qaTest;
    } catch (err) {
      return rejectWithValue(`${err.message} ${err.name}`);
    }
  },
);

export const getTestTheoryQuestion = createAsyncThunk(
  'testTheory/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const qaTest = await testApi.getTheoryQuestion();
      return qaTest;
    } catch (err) {
      return rejectWithValue(`${err.message} ${err.name}`);
    }
  },
);

export const sendTestTechResults = createAsyncThunk(
  'testTech/sendResults',
  async (results, { rejectWithValue }) => {
    try {
      const testResults = await testApi.getTechResult(results);
      return testResults;
    } catch (err) {
      return rejectWithValue(
        `${err.response.statusText} ${err.response.status}`,
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
    } catch (err) {
      console.log('err', err.response);
      return rejectWithValue(
        `${err.response.statusText} ${err.response.status}`,
      );
    }
  },
);
