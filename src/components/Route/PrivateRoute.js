import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuth = useSelector(authSelectors.getIsAuthUser);
  return (
    <Route
      {...routeProps}
      render={props => {
        return isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
      }
    />
  );
};
export default PrivateRoute;
