import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import { authOperations } from 'redux/auth';

import PrivateRoute from 'components/Route/PrivateRoute';
import PublicRoute from 'components/Route/PublicRoute';

import Home from 'components/Home';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Login from 'components/Login';
import Test from 'components/Test';
import Results from './Results';
import Materials from './Materials';
import Contacts from 'views/Contacts';
import Footer from 'views/Footer';
import Loader from 'components/Loader';



import './index.css';


function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.getCurrentUser());
  // }, [dispatch]);

  return (
    <div className="wrapper">
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<Loader />}>
        <Switch>

          <PublicRoute
            path="/auth"
            component={Login}
            restricted
          />
          <PublicRoute
            path="/test"
            component={Test}
            redirectTo="/auth"
          />
          <PublicRoute
            path="/results"
            component={Results}
            redirectTo="/auth"
          />
          <PublicRoute
            path="/useful-info"
            component={Materials}
            redirectTo="/auth"
          />
          <PublicRoute
            path="/contacts"
            component={Contacts}
            redirectTo="/auth"
          />
          <PublicRoute
            path="/"
            component={Home}
            redirectTo="/auth"
          />

          <Redirect to="/auth" />

        </Switch>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
