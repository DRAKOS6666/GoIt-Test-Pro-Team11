import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';

import PrivateRoute from 'components/Route/PrivateRoute';
import PublicRoute from 'components/Route/PublicRoute';

import Header from 'components/Header';
import Navigation from 'components/Navigation';
import AuthPage from 'views/AuthPage';

import Test from 'views/TestPage/TestPage';

import Results from './Results';
import Materials from './Materials';
import MainPage from './MainPage';
import Contacts from 'views/Contacts';
import Footer from 'views/Footer';
import Loader from 'components/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {
  const user = useSelector(authSelectors.getUser);
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  // console.log('isFetchingCurrentUser: ', isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser(user));
  }, []);

  return (
    // !isFetchingCurrentUser &&    (
    <>
      <Header>
        <Navigation />
      </Header>
      <div className="wrapper">
        <div className="main-content">
          <Suspense fallback={<Loader />}>
            <Switch>
              <PrivateRoute
                exact
                path="/"
                component={MainPage}
                redirectTo="/auth"
              />

              <PublicRoute
                path="/auth"
                component={AuthPage}
                redirectTo="/"
                restricted
              />

              <PublicRoute path="/test" component={Test} redirectTo="/auth" />

              <PublicRoute
                path="/results"
                component={Results}
                redirectTo="/auth"
              />

              <PrivateRoute
                path="/useful-info"
                component={Materials}
                redirectTo="/auth"
              />

              <PublicRoute
                path="/contacts"
                component={Contacts}
                redirectTo="/auth"
              />

              <Redirect to="/auth" />
            </Switch>
          </Suspense>
        </div>

        <ToastContainer autoClose={3700} position="top-center" />
      </div>
      <Footer />
    </>
    // )
  );
}

export default App;
