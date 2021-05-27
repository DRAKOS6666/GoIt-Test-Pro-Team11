import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'components/App';
import Loader from 'components/Loader/Loader';

import 'modern-normalize/modern-normalize.css';

import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={<Loader />} persistor={store.persistor}>
      <Provider store={store.store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root'),
);
