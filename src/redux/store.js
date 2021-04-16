import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import qaTestReducer from './qaTest/test-reducer';
import authReducer from './auth/auth-reducer';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import refreshTokenMiddleware from './middlewares/refreshToken';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  refreshTokenMiddleware,
];

// if (process.env.NODE_ENV === `development`) {
//   middleware.push(logger);
// }

const persistAuthConfig = {
  key: 'tokens',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sessionId', 'user'],
};

const persistTestConfig = {
  key: 'testing',
  storage,
  whitelist: ['tests', 'results'],
};

const store = configureStore({
  reducer: {
    qaTest: persistReducer(persistTestConfig, qaTestReducer),
    auth: persistReducer(persistAuthConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
