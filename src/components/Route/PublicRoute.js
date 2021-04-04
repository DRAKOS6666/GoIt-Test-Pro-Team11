import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuth = useSelector(authSelectors.getIsAuthUser);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
};
export default PublicRoute;
