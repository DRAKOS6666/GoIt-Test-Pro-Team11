import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import { authOperations } from 'redux/auth';

import PrivateRoute from 'components/Route/PrivateRoute';
import PublicRoute from 'components/Route/PublicRoute';
import { authSelectors } from 'redux/auth';

import Home from 'components/Home';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import AuthPage from 'views/AuthPage';
// import Login from 'components/Login';
// import Register from 'components/Register';
import Test from 'components/Test';
import Results from './Results';
import Materials from './Materials';
import Contacts from 'views/Contacts';
import Footer from 'views/Footer';
import Loader from 'components/Loader';
import { books, resources, } from '../components/Materials/usefullMaterials.json';

import './index.css';

function App() {
  const user = useSelector(authSelectors.getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser(user));
  }, []);

  return (
    <div className="wrapper">
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<Loader />}>
        <Switch>

          <PublicRoute path="/auth" component={AuthPage} redirectTo="/auth" restricted />

          <PublicRoute path="/test" component={Test} redirectTo="/auth" />

          <PublicRoute path="/results" component={Results} redirectTo="/auth" />

          <PrivateRoute path="/useful-info" redirectTo="/auth">
            <Materials books={books} resources={resources} />
          </PrivateRoute>

          <PublicRoute path="/contacts" component={Contacts} redirectTo="/auth" />

          <PublicRoute path="/" component={Home} redirectTo="/auth" />

          <Redirect to="/auth" />

        </Switch>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
