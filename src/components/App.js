import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';

import PrivateRoute from 'components/Route/PrivateRoute';
import PublicRoute from 'components/Route/PublicRoute';
// import { authSelectors } from 'redux/auth';

import Header from 'components/Header';
import Navigation from 'components/Navigation';
import AuthPage from 'views/AuthPage';
import Test from 'components/Test';
import Results from './Results';
import Materials from './Materials';
import MainPage from './MainPage'
import Contacts from 'views/Contacts';
import Footer from 'views/Footer';
import Loader from 'components/Loader';

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
    <div className="wrapper">
    <Header>
      <Navigation />
    </Header>
    <Suspense fallback={<Loader />}>
      <Switch>

        <PrivateRoute exact path="/" component={MainPage} redirectTo="/auth" />

        <PublicRoute path="/auth" component={AuthPage} redirectTo="/" restricted />

        <PublicRoute path="/test" component={Test} redirectTo="/auth" />

        <PublicRoute path="/results" component={Results} redirectTo="/auth" />

        <PrivateRoute path="/useful-info" component={Materials} redirectTo="/auth" />

        <PublicRoute path="/contacts" component={Contacts} redirectTo="/auth" />

        <Redirect to="/auth" />

      </Switch>
      <Footer />
    </Suspense>
  </div>
    // )
  );
}

export default App;
